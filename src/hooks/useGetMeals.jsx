import { useEffect, useState } from "react"
import { getCategories, getIngredients, getMealsById, getMealsByLetter } from "../services/meals.services"
import { useParams } from "react-router-dom"

export const useGetMeals = () => {
    const [meals, setMeals] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [categories, setCategories] = useState([])

    const getMealsByFirstLetter = (letter) => {
        getMealsByLetter(letter, (data) => {
            setMeals(data)
        })
    }

    useEffect(() => {
        getMealsByFirstLetter("m")
        getIngredients((data) => {
            setIngredients(data)
        })
        getCategories((data) => {
            setCategories(data)
        })
    }, [])


    return {meals, getMealsByFirstLetter, ingredients, categories}
}