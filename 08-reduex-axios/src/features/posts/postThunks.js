import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});

export const createPost = createAsyncThunk('posts/createPost', async (postData) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
  return response.data;
});

export const updatePost = createAsyncThunk('posts/updatePost', async ({ id, data }) => {
  const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data);
  return response.data;
});

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return id;
});