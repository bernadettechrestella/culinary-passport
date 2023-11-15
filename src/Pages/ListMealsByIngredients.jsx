import React, { useEffect, useState } from 'react'
import { getMealsByIngredients } from '../services/meals.services'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useGetMeals } from '../hooks/useGetMeals'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'


const ListMealsByIngredients = () => {
    const {strIngredient} = useParams()

    const {ingredients} = useGetMeals()
    const [filteredIngredients, setFilteredIngredients] = useState([])
    
    const [meals, setMeals] = useState([])
    const [startIndexMeals, setStartIndexMeals] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        if (ingredients.length > 0) {
            setFilteredIngredients(ingredients.filter(ingredient => ingredient.strIngredient === strIngredient))
        }
        getMealsByIngredients(strIngredient, (data) => {
            setMeals(data)
        })
    }, [ingredients, strIngredient])

    const handleClickPrevMeals = () => {
        if (startIndexMeals === 0) {
            setStartIndexMeals(meals.length - (meals.length % 6));
        } else {
            setStartIndexMeals(Math.max(startIndexMeals - 6, 0));
        }
    }

    const handleClickNextMeals = () => {
        if (startIndexMeals === (meals.length - (meals.length % 6))) {
            setStartIndexMeals(0);
        } else {
            setStartIndexMeals(startIndexMeals + 6);
        }
    }

    const handleIngredientsClick = (strIngredient) => {
        navigate(`/mealsByIngredients/${strIngredient}`)
    }

    const handleMealsClick = (idMeal) => {
        navigate(`/meals/${idMeal}`)
    }

  return (
    <div>
        <Navbar />
        <div className='w-full h-screen laptop:px-20 px-10 pt-20'>
            <div className='tablet:grid tablet:grid-cols-3 tablet:gap-5'>
                <div className='col-span-1'>
                    {filteredIngredients.length > 0 ? (
                        <div>
                            <h1 className='text-center tablet:text-4xl text-2xl font-bold text-green-500 tablet:mb-5'>{filteredIngredients[0].strIngredient}</h1>
                            <img src={`https://www.themealdb.com/images/ingredients/${filteredIngredients[0].strIngredient}.png`} alt="" className='w-[50%] h-auto mx-auto tablet:w-full'/>
                            {/* <p>{filteredIngredients[0].strDescription}</p> */}
                            <div className='text-center tablet:mt-3'>
                                <p className='tablet:text-xl text-base font-semibold text-orange-500 tablet:pb-3 pb-1'>Other <span className='text-green-500'>ingredients</span></p>
                                <select className='border-2 border-orange-500 rounded-2xl text-green-500 font-semibold tablet:text-xl tablet:p-3 text-base p-1'
                                    defaultValue={filteredIngredients[0].strIngredient} onChange={(e) => handleIngredientsClick(e.target.value)}>
                                    {ingredients.map(ingredient => (
                                        <option key={ingredient.idIngredient} value={ingredient.strIngredient}>{ingredient.strIngredient}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    ) : (
                    <p>Loading assets...</p>
                    )}
                </div>
                <div className='col-span-2'>
                    <div className='tablet:text-2xl text-lg mt-2 tablet-mt-0 text-center tablet:text-left font-bold text-orange-500 pl-3 tablet:mb-5 mb-2'>Meals based on <span className='text-green-500'>{strIngredient}</span> ingredient</div>
                    <div className='grid laptop:grid-cols-3 tablet:grid-cols-2 grid-cols-2 tablet:gap-3 gap-2 mx-4'>
                        {Array.isArray(meals) && meals.slice(startIndexMeals, startIndexMeals + 6).map((meal) => (
                            <div key={meal.idMeal} className='relative cursor-pointer' onClick={() => handleMealsClick(meal.idMeal)}>
                                <img src={meal.strMealThumb} alt={meal.strMeal} className='rounded-3xl'/>
                                <p className='absolute bottom-0 left-0 right-0 px-2 laptop:px-4 py-1 laptop:py-2 bg-gray-500 bg-opacity-80 text-center rounded-3xl text-white laptop:text-lg text-sm'>
                                    {meal.strMeal}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className='flex gap-3 justify-end mt-3 mr-3'>
                        {meals && meals.length > 8 ? <BsFillArrowLeftCircleFill onClick={handleClickPrevMeals} size={30} className='text-orange-500 cursor-pointer'/> : null}
                        {meals && meals.length > 8 ? <BsFillArrowRightCircleFill onClick={handleClickNextMeals} size={30} className='text-green-500 cursor-pointer'/> : null}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListMealsByIngredients