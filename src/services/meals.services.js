import axios from "axios";

export const getMealsByLetter = async (letter, callback) => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
    );
    callback(res.data.meals);
  } catch (error) {
    console.log(error);
  }
};

// export const getMealsByIngredient = async (ingredient, callback) => {
//   try {
//     const res = await axios.get(
//       `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
//     );
//     callback(res.data.meals);
//   } catch (error) {
//     console.log(error);
//   }
// }

export const getIngredients = async (callback) => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    callback(res.data.meals);
  } catch (error) {
    console.log(error);
  }
};
