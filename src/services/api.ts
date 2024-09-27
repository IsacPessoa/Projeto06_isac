import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Efood } from '../Pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: string
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: string
      expires: {
        month: string
        year: string
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Efood[], void>({
      query: () => ''
    }),
    getPratos: builder.query<Efood[], void>({
      query: () => 'pratos'
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'https://fake-api-tau.vercel.app/api/efood/checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantesQuery,
  useGetPratosQuery,
  usePurchaseMutation
} = api

export default api
