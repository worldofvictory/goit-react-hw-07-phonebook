import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = `https://659703b92da9f1f820f72ce5.mockapi.io/`;

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get(`/contacts`);
  return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  const response = await axios.post(`/contacts`, contact);
  return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
});