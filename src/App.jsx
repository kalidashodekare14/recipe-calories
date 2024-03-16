import './App.css'
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import Recipes from './Components/Recipes/Recipes';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {

  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)
  const [shows, setShows] = useState([])
  const [count2, setCount2] = useState(0)


  const handleRecipesCart = recipe => {
    console.log(recipe)
    const isExits = cart.find(item => item.id === recipe.id)
    if (!isExits) {
      const newCount = count + 1;
      setCount(newCount);
      setCart([...cart, recipe])
      toast.success("Cook Added");
    }
    else {
      toast.warning("Already exit");
    }
  }


  const handleDelete = (id, show) => {
    console.log(id)


    const cartDelete = cart.filter(item => item.id !== id.id);
    setCart(cartDelete);
    toast.success("Preparing Success");
    console.log(show)
    const mainus = count - 1
    setCount(mainus)
    const newCount2 = count2 + 1;
    setCount2(newCount2)
    const newShows = [...shows, show];
    setShows(newShows);

  }

  return (
    <>
      <div>
        <header className='lg:mx-10'>
          {/* Navbar */}
          <nav className='lg:-ml-8 lg:mr-5'>
            <div className="navbar bg-base-100 lg:m-5">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a className='font-[500] text-[15px] text-[#5B546A]' href="">Home</a></li>
                    <li><a className='font-[500] text-[15px] text-[#5B546A]' href="">Recipes</a></li>
                    <li><a className='font-[500] text-[15px] text-[#5B546A]' href="">About</a></li>
                    <li><a className='font-[500] text-[15px] text-[#5B546A]' href="">Search</a></li>
                  </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold">Recipe Calories</a>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  <li><a className='font-[500] text-[15px] text-[#5B546A]' href="">Home</a></li>
                  <li><a className='font-[500] text-[15px] text-[#5B546A]' href="">Recipes</a></li>
                  <li><a className='font-[500] text-[15px] text-[#5B546A]' href="">About</a></li>
                  <li><a className='font-[500] text-[15px] text-[#5B546A]' href="">Search</a></li>
                </ul>
              </div>
              <div className="navbar-end space-x-3">
                <div className='lg:flex justify-center items-center border pl-3 rounded-full hidden'>
                  <IoSearchOutline className='text-2xl' />
                  <input type="text" placeholder="Search" className="input rounded-full  w-60 max-w-xs" />
                </div>
                <a className='bg-[#0BE58A] p-2 rounded-full' href="#"><FaRegUserCircle className='text-4xl text-[#000000b7]' /></a>
              </div>
            </div>
          </nav>
          {/* Banner */}
          <div>
            <div className="bg-[url('./assets/Rectangle-1.png')] bg-center h-[80vh] bg-no-repeat rounded-2xl flex flex-col justify-center items-center text-white space-y-4">
              <h1 className='text-3xl lg:text-5xl lg:w-[60%] text-center font-semibold'>Discover an exceptional cooking class tailored for you!</h1>
              <p className='lg:w-[63%] text-center text-[#d9d8d8]'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
              <div className='flex lg:mr-5 gap-3'>
                <a href="">
                  <button className=' bg-[#0BE58A] border-0 font-bold text-[18px]  rounded-full w-44 h-[10vh] text-[#000000e7]'>Explore Now</button>
                </a>
                <a href="">
                  <button className=' text-[18px] font-semibold rounded-full w-44 h-[10vh] border '>Our Feedback</button>
                </a>
              </div>
            </div>
          </div>
        </header>
        <main className='mx- lg:mx-10'>
          <div className='flex flex-col justify-center items-center lg:w-[70%] text-center m-auto p-10 space-y-5'>
            <h1 className='text-4xl font-bold '>Our Recipes</h1>
            <p className='text-[18px] font-[500] text-[#050404ac] text-center'>A recipe is a formula of ingredients and a list of instructions for creating prepared foods. It is used to control quality, quantity, and food costs in a foodservice operation.</p>
          </div>
          {/* Cards */}
          <div className='flex flex-col lg:flex-row  justify-between'>
            <div className='lg:w-[60%] lg:mr-5'>
              <Recipes handleRecipesCart={handleRecipesCart}></Recipes>
            </div>
            <div className='lg:w-[40%]'>
              <Cart
                cart={cart}
                count={count}
                handleDelete={handleDelete}
                shows={shows}
                count2={count2}
              ></Cart>
            </div>
          </div>
        </main>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
