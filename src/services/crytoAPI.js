import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const crytoApiHeaders = {
    'X-RapidAPI-Key': '48ba35f6dbmshaa056d2f9dbb9e4p1363aejsn2bb4b43df90d',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: crytoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi', 
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count)=> createRequest(`/coins?limit=${count}`),
        }),
        getCryptosDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        })
    })
})

export const { useGetCryptosQuery, useGetCryptosDetailsQuery } = cryptoApi //creating hook