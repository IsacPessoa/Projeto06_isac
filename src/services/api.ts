import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Efood } from '../Pages/Home'

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
    })
  })
})

export const { useGetRestaurantesQuery, useGetPratosQuery } = api

export default api
