import React, { useEffect, useState } from 'react'
import { useGetMeals } from '../hooks/useGetMeals'
import { useNavigate, useParams } from 'react-router-dom'
import { getMealsById } from '../services/meals.services'
import Navbar from '../components/Navbar'

const MealsDetailsPages = () => {
const {idMeal} = useParams()
const [mealDetails, setMealsDetails] = useState([])
const instructions = mealDetails?.strInstructions;
const formattedInstructionsLaptop = instructions ? instructions.replace(/\.\s/g, '.\n').replace(/(.{160})/g, '$1\n') : '';
const formattedInstructionsMobile = instructions ? instructions.replace(/\.\s/g, '.\n').replace(/(.{37})/g, '$1\n') : '';
const navigate = useNavigate()

useEffect(() => {
    window.scrollTo(0, 0)
    getMealsById(idMeal, (data) => {
        setMealsDetails(data)
    })
}, [idMeal])

console.log(mealDetails)

  return (
    <div>
        <Navbar />
        <div className='w-full h-screen laptop:px-20 px-10 tablet:pt-20 pt-14'>
            <div className='laptop:mb-8 mb-4'>
                <p className='laptop:text-5xl text-3xl font-bold text-green-600 text-center mb-2'>{mealDetails.strMeal}</p>
            </div>
            <div className='tablet:grid grid-cols-3 gap-6 hidden'>
                <div className='my-auto'>
                    {[...Array(20)].map((_, i) => {
                        const ingredient = mealDetails[`strIngredient${i +1}`]
                        const measure = mealDetails[`strMeasure${i +1}`]
                        if (ingredient && measure) {
                            if ((i + 1) % 2 === 1) {
                            return (
                                <div key={i} className='flex gap-2 justify-end pb-1'>
                                        <p className='text-xl my-auto'>{measure} {ingredient}</p>
                                    <img src={`https://www.themealdb.com/images/ingredients/${ingredient.replace(/ /g, '%20')}-Small.png`} alt="" className='w-12 cursor-pointer' onClick={() => navigate(`/mealsByIngredients/${ingredient}`)}/>
                                </div>
                            )
                        }
                    }
                    return null;
                })}
                </div>
                <div>
                    <div className='bg-gradient-to-b from-orange-500 to-green-500 rounded-2xl'>
                        <img src={mealDetails.strMealThumb} alt="" className='rounded-2xl border-transparent border-4'/>
                    </div>
                </div>
                <div className='my-auto'>
                    {[...Array(20)].map((_, i) => {
                        const ingredient = mealDetails[`strIngredient${i +1}`]
                        const measure = mealDetails[`strMeasure${i +1}`]
                        if (ingredient && measure) {
                            if ((i + 1) % 2 === 0) {
                            return (
                                <div key={i} className='flex gap-2 justify-start pb-1'>
                                    <img src={`https://www.themealdb.com/images/ingredients/${ingredient.replace(/ /g, '%20')}-Small.png`} alt="" className='w-12 cursor-pointer' onClick={() => navigate(`/mealsByIngredients/${ingredient}`)}/>
                                    <p className='text-xl my-auto'>{measure} {ingredient}</p>
                                </div>
                            )
                            }
                        }
                        return null;
                    })}
                </div>
            </div>
            <div className='block tablet:hidden'>
                <div>
                    <div className='bg-gradient-to-b from-orange-500 to-green-500 rounded-2xl mb-5'>
                        <img src={mealDetails.strMealThumb} alt="" className='rounded-2xl border-transparent border-4'/>
                    </div>
                </div>
                <div className='my-auto'>
                    {[...Array(20)].map((_, i) => {
                        const ingredient = mealDetails[`strIngredient${i +1}`]
                        const measure = mealDetails[`strMeasure${i +1}`]
                            return (
                                <div key={i} className='flex gap-2 justify-start'>
                                    <img src={`https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`} alt="" className='w-12 cursor-pointer' onClick={() => navigate(`/mealsByIngredients/${ingredient}`)}/>
                                    <p className='text-xl my-auto'>{measure} {ingredient}</p>
                                </div>
                            )
                        return null;
                    })}
                </div>
            </div>
            <div className='flex justify-center pt-3 text-center gap-3'>
                <button className='bg-orange-500 text-white p-1 rounded' disabled>{mealDetails.strArea} Food</button>
                <button className='bg-green-500 text-white p-1 rounded'
                    onClick={() => navigate(`/mealsByCategories/${mealDetails.strCategory}`)}>{mealDetails.strCategory} Category</button>
            </div>
            <div className='text-center mt-5 pb-10'>
                <p className='text-orange-500 text-3xl font-bold border-b-2 border-green-500 mb-2'>Instructions</p>
                <pre className='font-jost text-xl hidden tablet:block'>{formattedInstructionsLaptop}</pre>
                <pre className='font-jost text-xl tablet:hidden'>{formattedInstructionsMobile}</pre>
            </div>
        </div>
    </div>
  )
}

export default MealsDetailsPages