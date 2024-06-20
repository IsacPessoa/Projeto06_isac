import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Efood } from '../../Pages/Home'

type CartState = {
  items: Efood[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Efood>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
