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
  reducers: {},
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

export default todoSlice.reducer;