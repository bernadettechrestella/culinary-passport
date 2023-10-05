import React, { useEffect, useState } from 'react'
import { useGetMeals } from '../hooks/useGetMeals'
import { useParams } from 'react-router-dom'
import { getMealsById } from '../services/meals.services'
import Navbar from '../components/Navbar'

const MealsDetailsPages = () => {
const {idMeal} = useParams()
const [mealDetails, setMealsDetails] = useState([])
const instructions = mealDetails?.strInstructions;
const formattedInstructions = instructions ? instructions.split('. ').join('.\n') : '';

console.log(formattedInstructions)

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
        <div className='w-full h-screen laptop:px-20 px-10 pt-20'>
            <div className='mb-8'>
                <p className='laptop:text-5xl text-4xl font-bold text-green-600 text-center mb-2'>{mealDetails.strMeal}</p>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                <div className='my-auto'>
                    {[...Array(20)].map((_, i) => {
                        const ingredient = mealDetails[`strIngredient${i +1}`]
                        const measure = mealDetails[`strMeasure${i +1}`]
                        if (ingredient && measure) {
                            if ((i + 1) % 2 === 1) {
                            return (
                                <div key={i} className='flex gap-2 justify-end'>
                                        <p className='text-xl my-auto'>{measure} {ingredient}</p>
                                    <img src={`https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`} alt="" className='w-12' />
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
                                <div key={i} className='flex gap-2 justify-start'>
                                    <img src={`https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`} alt="" className='w-12'/>
                                    <p className='text-xl my-auto'>{measure} {ingredient}</p>
                                </div>
                            )
                            }
                        }
                        return null;
                    })}
                </div>
            </div>
            <div className='text-center mt-10 pb-10'>
                <p className='text-orange-500 text-3xl font-bold border-b-2 border-green-500 mb-2'>Instructions</p>
                <pre className='font-jost text-xl max-w-[100%] overflow-auto'>{formattedInstructions}</pre>
            </div>
        </div>
    </div>
  )
}

export default MealsDetailsPages