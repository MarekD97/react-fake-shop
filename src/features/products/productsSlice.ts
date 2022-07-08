import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ProductState {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

const initialState: ProductState[] = []

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductState[]>) => {
            action.payload.forEach((product: ProductState) => {
                state.push(product);
            })
        },
        addProduct: (state, action: PayloadAction<ProductState>) => {
            state.push(action.payload);
        },
        deleteProduct: (state, action: PayloadAction<number>) => {
            return state.filter(({id}) => id !== action.payload);
        }
    }
})

export const { addProduct, setProducts, deleteProduct } = productsSlice.actions;

export const getProducts = (state: RootState) => state.products;

export default productsSlice.reducer;