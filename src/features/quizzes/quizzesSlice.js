import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
    name: 'quizzesSlice',
    initialState: {
        quizzes: {}
    },
    reducers: {
        // expected payload: { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        },
    }
});

// Selector
export const selectQuizzes = (state) => state.quizzes.quizzes;

// Action generator and reducer
export default quizzesSlice.reducer;
export const { addQuiz } = quizzesSlice.actions;