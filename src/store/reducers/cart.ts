import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { Efood } from '../../Pages/Home'

type CartState = {
  items: Efood[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Efood>) => {
      state.items.push(action.payload)
    },
    // remove: (state, action: PayloadAction<number>) => {
    //   state.items = state.items.filter((item) => item.id !== action.payload)
    // },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items
        .map((item) => ({
          ...item,
          cardapio: item.cardapio.filter(
            (cardapioItem) => cardapioItem.id !== action.payload
          )
        }))
        .filter((item) => item.cardapio.length > 0) as Draft<Efood[]>
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, close, open, remove } = cartSlice.actions
export default cartSlice.reducer
