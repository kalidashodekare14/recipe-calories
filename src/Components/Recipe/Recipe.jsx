import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
const Recipe = ({ recipe, handleRecipesCart }) => {
    // console.log(recipe)
    const { recipe_name, recipe_image, short_description, ingredients, time, calories } = recipe
    return (
        <div>
            <div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img className="h-[50vh] w-[100%] rounded-2xl" src={recipe_image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h1 className="text-2xl font-semibold">{recipe_name}</h1>
                        <p className="text-[16px] font-[500] text-[#000000ab]">{short_description.slice(0, 40)}</p>
                        <hr />
                        <p className="text-[22px] font-[500]">Ingredients: {ingredients.length}</p>
                        <ul className="list-disc ml-5">
                            <li className="font-[500] text-[#000000ab]">{ingredients[0]}</li>
                            <li className="font-[500] text-[#000000ab]">{ingredients[1]}</li>
                            <li className="font-[500] text-[#000000ab]">{ingredients[2]}</li>
                            <li className="font-[500] text-[#000000ab]">{ingredients[3]}</li>
                        </ul>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-3 items-center">
                                <CiClock2 />
                                <p className="font-[400] text-[#000000ab]">{time} minutes</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <FaFire />
                                <p className="font-[400] text-[#000000ab]">{calories} calories</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={()=> handleRecipesCart(recipe)} className="btn text-[18px] text-[#000000d2] font-bold rounded-full bg-[#0BE58A]">Want to Cook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;