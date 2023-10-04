import { useEffect, useState } from "react"
import { getIngredients, getMealsByLetter } from "../services/meals.services"

export const useGetMeals = () => {
    const [meals, setMeals] = useState([])
    const [ingredients, setIngredients] = useState([])

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
    }, [])


    return {meals, getMealsByFirstLetter, ingredients}
}