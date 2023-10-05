import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-scroll'
import { useGetMeals } from '../hooks/useGetMeals'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const DashboardPages = () => {
    const {meals, getMealsByFirstLetter, ingredients} = useGetMeals()
    const [buttonActive, setButtonActive] = useState("m")
    const [startIndex, setStartIndex] = useState(0);
    const navigate = useNavigate()

    const handleLetterClick = (letter) => {
        getMealsByFirstLetter(letter)
    }

    const handleMealsClick = (idMeal) => {
        navigate(`/meals/${idMeal}`)
    }

        const handleClickNext = () => {
            setStartIndex(startIndex + 10)
        }

        const handleClickPrev = () => {
            setStartIndex(startIndex - 10)
        }

  return (
    <div>
        <Navbar/>
        <div className='w-full h-screen laptop:px-20 px-10'>
            <div className='grid laptop:grid-cols-3 grid-cols-2 laptop:pt-44 gap-2 pt-52'>
                <div>
                    <img className='rounded-full' src="https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg" />
                </div>
                <div className='laptop:col-span-2 font-extrabold text-5xl laptop:text-7xl m-auto'>
                    <p className='text-green-600'>Embark on a</p>
                    <p className='text-green-600'> Flavorful Journey</p>
                    <p className='text-orange-500'>with Culinary Passport!</p>
                    <Link to='recipes' smooth={true} duration={500}>
                        <button className='laptop:text-2xl text-xl mt-5 bg-green-300 text-orange-500 border-2 border-green-400 p-2 rounded-full font-semibold'>Explore Recipe</button>
                    </Link>
                </div>
            </div>
        </div>
        <div name='recipes' className='w-full min-h-screen laptop:px-20 px-10 py-10'>
            <div className='text-center mb-10'>
                <p className='laptop:text-5xl text-4xl font-bold text-green-600'>Find Your
                    <span className='text-orange-500'> Perfect Meal</span>
                </p>
            </div>
            <div className='mb-10 flex gap-2 w-full justify-center text-center'>
                <button onClick={() => {handleLetterClick("a"); setButtonActive("a")}} className={`rounded-full ${buttonActive === "a" ? 'bg-green-500 text-white' : 'bg-green-300 text-green-500'} font-semibold w-8 text-lg`}>A</button>
                <button onClick={() => {handleLetterClick("b"); setButtonActive("b")}} className={`rounded-full ${buttonActive === "b" ? 'bg-orange-500 text-white' : 'bg-orange-300 text-orange-500'} font-semibold w-8 text-lg`}>B</button>
                <button onClick={() => {handleLetterClick("c"); setButtonActive("c")}} className={`rounded-full ${buttonActive === "c" ? 'bg-green-500 text-white' : 'bg-green-300 text-green-500'} font-semibold w-8 text-lg`}>C</button>
                <button onClick={() => {handleLetterClick("d"); setButtonActive("d")}} className={`rounded-full ${buttonActive === "d" ? 'bg-orange-500 text-white' : 'bg-orange-300 text-orange-500'} font-semibold w-8 text-lg`}>D</button>
                <button onClick={() => {handleLetterClick("e"); setButtonActive("e")}} className={`rounded-full ${buttonActive === "e" ? 'bg-green-500 text-white' : 'bg-green-300 text-green-500'} font-semibold w-8 text-lg`}>E</button>
                <button onClick={() => {handleLetterClick("f"); setButtonActive("f")}} className={`rounded-full ${buttonActive === "f" ? 'bg-orange-500 text-white' : 'bg-orange-300 text-orange-500'} font-semibold w-8 text-lg`}>F</button>
                <button onClick={() => {handleLetterClick("g"); setButtonActive("g")}} className={`rounded-full ${buttonActive === "g" ? 'bg-green-500 text-white' : 'bg-green-300 text-green-500'} font-semibold w-8 text-lg`}>G</button>
                <button onClick={() => {handleLetterClick("h"); setButtonActive("h")}} className={`rounded-full ${buttonActive === "h" ? 'bg-orange-500 text-white' : 'bg-orange-300 text-orange-500'} font-semibold w-8 text-lg`}>H</button>
                <button onClick={() => {handleLetterClick("i"); setButtonActive("i")}} className={`rounded-full ${buttonActive === "i" ? 'bg-green-500 text-white' : 'bg-green-300 text-green-500'} font-semibold w-8 text-lg`}>I</button>
                <button onClick={() => {handleLetterClick("j"); setButtonActive("j")}} className={`rounded-full ${buttonActive === "j" ? 'bg-orange-500 text-white' : 'bg-orange-300 text-orange-500'} font-semibold w-8 text-lg`}>J</button>
                <button onClick={() => {handleLetterClick("k"); setButtonActive("k")}} className={`rounded-full ${buttonActive === "k" ? 'bg-green-500 text-white' : 'bg-green-300 text-green-500'} font-semibold w-8 text-lg`}>K</button>
                <button onClick={() => {handleLetterClick("l"); setButtonActive("l")}} className={`rounded-full ${buttonActive === "l" ? 'bg-orange-500 text-white' : 'bg-orange-300 text-orange-500'} font-semibold w-8 text-lg`}>L</button>
                <button onClick={() => {handleLetterClick("m"); setButtonActive("m")}} className={`rounded-full ${buttonActive === "m" ? 'bg-green-500 text-white' : 'bg-green-300 text-green-500'} font-semibold w-8 text-lg`}>M</button>
                <button onClick={() => {handleLetterClick("n"); setButtonActive("n")}} className={`rounded-full ${buttonActive === "n" ? 'bg-orange-500 text-white' : 'bg-orange-300 text-orange-500'} font-semibold w-8 text-lg`}>N</button>
                <button onClick={() => {handleLetterClick("o"); setButtonActive("o")}} className={`rounded-full ${buttonActive === "o" ? 'bg-green-500 text-white' : 'bg-green-300 text-green-500'} font-semibold w-8 text-lg`}>O</button>
                <button onClick={() => {handleLetterClick("p"); setButtonActive("p")}} className={`rounded-full ${buttonActive === "p" ? 'bg-orange-500 text-white' : 'bg-orange-300 text-orange-500'} font-semibold w-8 text-lg`}>P</button>
                <button onClick={() => {handleLetterClick("q"); setButtonActive("q")}} className={`rounded-full ${buttonActive === "q" ? 'bg-green-500 text-white' : 'bg-green-300 text-green-500'} font-semibold w-8 text-lg`}>Q</button>
                <button onClick={() => {handleLetterClick("r"); setButtonActive("r")}} className={`rounded-full ${buttonActive === "r" ? 'bg-orange-500 text-white' : 'bg-orange-300 text-orange-500'} font-semibold w-8 text-lg`}>R</button>
                <button onClick={() => {handleLetterClick("s"); setButtonActive("s")}} className={`rounded-full ${buttonActive === "s" ? 'bg-green-500 text-white' : 'bg-green-300 text-green-500'} font-semibold w-8 text-lg`}>S</button>
                <button onClick={() => {handleLetterClick("t"); setButtonActive("t")}} className={`rounded-full ${buttonActive === "t" ? 'bg-orange-500 text-white' : 'bg-orange-300 text-orange-500'} font-semibold w-8 text-lg`}>T</button>
                <button onClick={() => {handleLetterClick("u"); setButtonActive("u")}} className={`rounded-full ${buttonActive === "u" ? 'bg-green-500 text-white' : 'bg-green-300 text-green-500'} font-semibold w-8 text-lg`}>U</button>
                <button onClick={() => {handleLetterClick("v"); setButtonActive("v")}} className={`rounded-full ${buttonActive === "v" ? 'bg-orange-500 text-white' : 'bg-orange-300 text-orange-500'} font-semibold w-8 text-lg`}>V</button>
                <button onClick={() => {handleLetterClick("w"); setButtonActive("w")}} className={`rounded-full ${buttonActive === "w" ? 'bg-green-500 text-white' : 'bg-green-300 text-green-500'} font-semibold w-8 text-lg`}>W</button>
                <button onClick={() => {handleLetterClick("x"); setButtonActive("x")}} className={`rounded-full ${buttonActive === "x" ? 'bg-orange-500 text-white' : 'bg-orange-300 text-orange-500'} font-semibold w-8 text-lg`}>X</button>
                <button onClick={() => {handleLetterClick("y"); setButtonActive("y")}} className={`rounded-full ${buttonActive === "y" ? 'bg-green-500 text-white' : 'bg-green-300 text-green-500'} font-semibold w-8 text-lg`}>Y</button>
                <button onClick={() => {handleLetterClick("z"); setButtonActive("z")}} className={`rounded-full ${buttonActive === "z" ? 'bg-orange-500 text-white' : 'bg-orange-300 text-orange-500'} font-semibold w-8 text-lg`}>Z</button>
            </div>
            <div>
                <div className='grid laptop:grid-cols-5 tablet:grid-cols-4 grid-cols-2 gap-3'>
                    {Array.isArray(meals) && meals.slice(0,10).map((meal) => (
                        <div key={meal.idMeal} className='relative cursor-pointer' onClick={() => handleMealsClick(meal.idMeal)}>
                            <img src={meal.strMealThumb} alt="" className='rounded-3xl'/>
                            <p className='absolute bottom-0 left-0 right-0 laptop:px-4 px-2 laptop:py-2 py-1 bg-gray-500 bg-opacity-80 text-center rounded-b-3xl text-white laptop:text-lg text-sm'>{meal.strMeal}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div name='ingredients' className='w-full min-h-screen py-10'>
            <div className='text-center mb-16 px-20'>
                <p className='laptop:text-5xl text-3xl font-bold text-orange-500'>Maximize Ingredients
                    <span className='text-green-600'> in Your Kitchen</span>
                </p>
            </div>
            <div className='flex px-6'>
                <BsFillArrowLeftCircleFill onClick={handleClickPrev} size={100} className='my-auto text-green-500 cursor-pointer'/>
                <div className='grid laptop:grid-cols-5 tablet:grid-cols-4 grid-cols-2 gap-3 mx-4'>
                    {Array.isArray(ingredients) && ingredients.slice(startIndex, startIndex + 10).map((ingredient) => (
                        <div key={ingredient.idIngredient} className='relative'>
                            <img src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`} alt="" className='rounded-3xl'/>
                            <p className='absolute bottom-0 left-0 right-0 px-2 laptop:px-4 py-1 laptop:py-2 bg-gray-500 bg-opacity-80 text-center rounded-3xl text-white laptop:text-lg text-sm'>{ingredient.strIngredient}</p>
                        </div>
                    ))}
                </div>
                <BsFillArrowRightCircleFill onClick={handleClickNext} size={100} className='my-auto text-orange-500 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default DashboardPages