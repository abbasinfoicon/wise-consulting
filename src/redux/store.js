import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import CartSlice, { getTotals } from '../features/CartSlice'
import ProductsSlice, { productsFetch } from '../features/ProductsSlice'
import { userSlice } from '../features/UserSlice'
import { serApi, proApi, blogApi, sliderApi, testimonialApi, ptnrApi, teamApi } from '../services/service'

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    products: ProductsSlice,
    user: userSlice,

    // Add the generated reducer as a specific top-level slice
    [serApi.reducerPath]: serApi.reducer,
    [proApi.reducerPath]: proApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [sliderApi.reducerPath]: sliderApi.reducer,
    [testimonialApi.reducerPath]: testimonialApi.reducer,
    [ptnrApi.reducerPath]: ptnrApi.reducer,
    [teamApi.reducerPath]: teamApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(serApi.middleware)
    .concat(proApi.middleware)
    .concat(blogApi.middleware)
    .concat(sliderApi.middleware)
    .concat(testimonialApi.middleware)
    .concat(ptnrApi.middleware)
    .concat(teamApi.middleware)
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch);
store.dispatch(productsFetch());
store.dispatch(getTotals());