
import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types';

const Recipes = ({handleRecipesCart}) => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('Recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, [])

    return (
        <div>
            <div className="grid grid-cols- lg:grid-cols-2 gap-5">
                {
                    recipes.map(recipe => <Recipe 
                        key={recipe.id} 
                        recipe={recipe}
                        handleRecipesCart={handleRecipesCart}
                        ></Recipe>)
                }

            </div>
        </div>
    );
};


Recipes.PropTypes ={
    handleRecipesCart: PropTypes.func.isRequired
}

export default Recipes;