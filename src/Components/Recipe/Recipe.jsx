import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
const Recipe = ({ recipe, handleRecipesCart }) => {
    // console.log(recipe)
    const { name, image_url, description, ingredients, time, calories } = recipe
    return (
        <div>
            <div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img className="h-[50vh] w-[100%] rounded-2xl" src={image_url} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h1 className="text-2xl font-semibold">{name}</h1>
                        <p className="text-[16px] font-[500] text-[#000000ab]">{description}</p>
                        <hr />
                        <p className="text-[22px] font-[500]">Ingredients: {ingredients.length}</p>
                        <ul className="list-disc ml-5">
                            <li className="font-[500] text-[#000000ab]">{ingredients[0]}</li>
                            <li className="font-[500] text-[#000000ab]">{ingredients[1]}</li>
                            <li className="font-[500] text-[#000000ab]">{ingredients[2]}</li>
                            <li className="font-[500] text-[#000000ab]">{ingredients[3]}</li>
                            <li className="font-[500] text-[#000000ab]">{ingredients[4]}</li>
                            <li className="font-[500] text-[#000000ab]">{ingredients[5]}</li>
                        </ul>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-3 items-center">
                                <CiClock2 />
                                <p className="font-[400] text-[#000000ab]">{time}</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <FaFire />
                                <p className="font-[400] text-[#000000ab]">{calories}</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={()=> handleRecipesCart(recipe)} className="btn text-[20px] font-semibold rounded-full bg-[#0BE58A]">Want to Cook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;