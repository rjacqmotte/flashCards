import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        // expected payload: {id: '123456', name: 'name of topic', icon: 'icon url'}
        addTopic: (state, action) => {
            state.topics[action.payload.id] = action.payload;
            state.topics[action.payload.id].quizIds = [];
        },
        // expected paylaod: { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
        addQuizId: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.id); 
        },
    }
});

// Selector
export const selectTopics = (state) => state.topics?.topics;

// export action creator and reducer
export default topicsSlice.reducer;
export const { addTopic } = topicsSlice.actions;