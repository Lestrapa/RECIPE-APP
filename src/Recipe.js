import React from 'react';
import style from './recipe.module.css'; // menghubungkan ke recipe.module.css


const Recipe = ({title, calories, image, ingredients}) => { //! parameter Recipe(menangkapt data dari props)
    return (
      <div className={style.recipe}> {/* style.recipe | menggunakan style */}
        <h1>{title}</h1> 
        <p>{calories}</p>
        <ol>
          {ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
        <img className={style.image} src={image} alt="" />
      </div>
    );
}

export default Recipe;