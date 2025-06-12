import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// 비동기 액션 작성
// createAsyncThunk : 3개의 인자를 받아온다(pending(로딩중), fulfilled(완료), rejected(실패))
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
    return response.data;
  }
);

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        loading: false,
        error: null,
    },

    // 추가 Reducer 확장 예시
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({ id: Date.now(), title: action.payload, completed: false });
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) todo.completed = !todo.completed;
        }
    },

    extraReducers: (builder) => {
        builder

            // 로딩중
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            // 완료
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = action.payload;
            })

            // 실패
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;