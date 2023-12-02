import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MealsDetailsPages from './Pages/MealsDetailsPages';
import ListMealsByIngredients from './Pages/ListMealsByIngredients.jsx'
import ListMealsByCategories from './Pages/ListMealsByCategories.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/meals/:idMeal',
    element: <MealsDetailsPages />
  },
  {
    path : '/mealsByIngredients/:strIngredient',
    element: <ListMealsByIngredients />
  },
  {
    path : '/mealsByCategories/:strCategory',
    element: <ListMealsByCategories />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)