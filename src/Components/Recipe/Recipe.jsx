import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import '../../App.css'
const Recipe = ({ recipe, handleRecipesCart }) => {
    // console.log(recipe)
    const { name, image, description, ingredients, time, calories } = recipe
    return (
        <div>
            <div>
                <div className="card p-4 px-5 bg-base-100 shadow-xl">
                    <figure className=""><img className="h-[40vh] w-[100%] rounded-2xl" src={image} alt="Shoes" /></figure>
                    <div className="space-y-2 mt-3">
                        <h1 className="text-2xl font-semibold fonts-lexend">{name}</h1>
                        <p className="text-[15px] font-[600] text-[#00000087] fira-sans">{description.slice(0, 79)}</p>
                        <hr />
                        <p className="text-[20px] text-[#000000c0] font-[600] fonts-lexend">Ingredients: {ingredients.length}</p>
                        <ul className="list-disc ml-5">
                            <li className="font-[600] text-[#0000008f] fira-sans">{ingredients[0]}</li>
                            <li className="font-[600] text-[#0000008f] fira-sans">{ingredients[1]}</li>
                            <li className="font-[600] text-[#0000008f] fira-sans">{ingredients[2]}</li>
                            <li className="font-[600] text-[#0000008f] fira-sans">{ingredients[3]}</li>
                        </ul>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-3 items-center">
                                <CiClock2 />
                                <p className="font-[600] text-[#00000082] fira-sans">{time} minutes</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <FaFire />
                                <p className="font-[600] text-[#00000082] fira-sans">{calories} calories</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={()=> handleRecipesCart(recipe)} className="btn text-[18px] text-[#000000d2] font-bold rounded-full bg-[#0BE58A] fonts-lexend">Want to Cook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;