import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	items: [],
}

export const basketSlice = createSlice({
	name: "basket",
	initialState,
	reducers: {
		addToBasket: (state, action) => {
			state.items = [...state.items, action.payload];
		},
		removeFromBasket: (state, action) => {

		}
	},
});


export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Where ".basket" equal to the "name" of the slice created
export const selectBasketItems = (state) => state.basket.items;

export default basketSlice.reducer;
