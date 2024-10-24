import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types';

const Recipes = ({orderBtn}) => {
    const [recipeItems,setrecipeItems] =useState([]);
    useEffect(() => {
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setrecipeItems(data.recipes)
        )
    },[])
    
    return (
        <div className="md:w-2/3">
           {/* this is the recipe cards */}
           <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
             {
                recipeItems.map((recipe,idx) => <Recipe key={idx} recipe={recipe} orderBtn={orderBtn}></Recipe> )
             }
           </div>
        </div>
    );
};
Recipes.propTypes = {
    orderBtn :PropTypes.func
};
export default Recipes;