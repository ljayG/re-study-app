// src/store/postThunk.ts
import axios from 'axios';
import { AppDispatch } from './store';
import { fetchStart, fetchSuccess, fetchFailure } from './postSlice';
import { Post } from '../types/post';

export const fetchPosts = () => async (dispatch: AppDispatch) => {
  dispatch(fetchStart());
  try {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    dispatch(fetchSuccess(response.data));
  } catch (error: any) {
    dispatch(fetchFailure(error.message));
  }
};