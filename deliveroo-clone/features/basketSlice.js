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
			const index = state.items.findIndex(item =>
				item.id === action.payload
			);

			let newBasket = [...state.items];

			if (index >= 0) {
				// Remove the item
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Can't remove product (id: ${action.payload}) 
					as it's not in the basket`
				);
			}

			state.items = newBasket;
		}
	},
});


export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Where ".basket" equal to the "name" of the slice created
export const selectBasketItems = (state) => state.basket.items;

export const selectBasketById = (state, id) =>
	state.basket.items.filter(item => item.id === id);

export default basketSlice.reducer;
