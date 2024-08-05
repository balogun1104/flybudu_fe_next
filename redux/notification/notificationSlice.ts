import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api';

interface Notification {
  id: number;
  headline: string;
  details: string;
  created_at: string;
  // Add other fields as needed
}

interface NotificationState {
  notifications: Notification[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  lastFetched: number | null;
}

const initialState: NotificationState = {
  notifications: [],
  status: 'idle',
  error: null,
  lastFetched: null,
};

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (_, { getState }) => {
    const state = getState() as { notifications: NotificationState };
    const lastFetched = state.notifications.lastFetched;
    const currentTime = Date.now();

    // Only fetch if it's been more than 5 minutes since the last fetch
    if (!lastFetched || currentTime - lastFetched > 5 * 60 * 1000) {
      const response = await axiosInstance.get('/notifications/list');
      return response.data.data;
    } else {
      return [];
    }
  }
);

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload.length > 0) {
          state.notifications = action.payload;
          state.lastFetched = Date.now();
        }
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default notificationSlice.reducer;