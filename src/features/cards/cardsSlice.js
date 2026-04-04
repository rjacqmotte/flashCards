import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        // { id: '123', front: 'front of card', back: 'back of card'}
        addCard: (state, action) => {
            state.cards[action.payload.id] = action.payload;
        },
    }
});

// Selector
export const selectCard = (state, id) => state.cards.cards[id];

// export action creator and reducer
export default cardsSlice.reducer;
export const { addCard } = cardsSlice.actions;