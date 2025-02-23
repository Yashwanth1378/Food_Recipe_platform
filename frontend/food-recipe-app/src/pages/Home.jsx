import React from 'react';
import foodRecipe2 from '../assets/foodRecipe2.png';
import butterChicken from '../assets/Butter_chicken.png';
import mushroomCurry from '../assets/Mushroom_curry.png';
import chickenBiryani from '../assets/chicken_biryani.png';
import paneerBiryani from '../assets/panner_biryani.png';
import pizza from '../assets/pizza.png';
import burger from '../assets/burger.png';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <section className='home'>
        <div className='left'>
          <h1>Food Recipe</h1>
          <h5>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</h5>
          <button>Share your recipe</button>
        </div>
        <div className='right'>
          <img src={foodRecipe2} width="320px" height="300px" alt="Food Recipe"/>
        </div>
      </section>

      <section className="recipe-cards flex flex-col items-center my-6">
        <h2 className="text-center text-2xl font-bold mb-4">Popular Recipes</h2>

        <div className="card bg-white shadow-lg p-4 rounded-lg flex flex-col items-center w-16 my-4">
          <img src={butterChicken} alt="Butter Chicken" className="w-24 h-24"/>
          <h3 className="mt-2 font-semibold">Butter Chicken Masala</h3>
          <p>🕒 30 min</p>
        </div>

        <div className="card bg-white shadow-lg p-4 rounded-lg flex flex-col items-center w-80 my-4">
          <img src={mushroomCurry} alt="Mushroom Curry" className="w-24 h-24"/>
          <h3 className="mt-2 font-semibold">Mushroom Curry</h3>
          <p>🕒 30 min</p>
        </div>

        <div className="card bg-white shadow-lg p-4 rounded-lg flex flex-col items-center w-80 my-4">
          <img src={chickenBiryani} alt="Chicken Biryani" className="w-24 h-24"/>
          <h3 className="mt-2 font-semibold">Chicken Biryani</h3>
          <p>🕒 30 min</p>
        </div>

        <div className="card bg-white shadow-lg p-4 rounded-lg flex flex-col items-center w-80 my-4">
          <img src={paneerBiryani} alt="Paneer Biryani" className="w-24 h-24"/>
          <h3 className="mt-2 font-semibold">Paneer Biryani</h3>
          <p>🕒 30 min</p>
        </div>

        <div className="card bg-white shadow-lg p-4 rounded-lg flex flex-col items-center w-80 my-4">
          <img src={pizza} alt="Pizza" className="w-24 h-24"/>
          <h3 className="mt-2 font-semibold">Pizza</h3>
          <p>🕒 30 min</p>
        </div>

        <div className="card bg-white shadow-lg p-4 rounded-lg flex flex-col items-center w-80 my-4">
          <img src={burger} alt="Juicy Burger" className="w-24 h-24"/>
          <h3 className="mt-2 font-semibold">Juicy Burger</h3>
          <p>🕒 30 min</p>
        </div>
      </section>

      <div className='bg'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f6efd4" fillOpacity="1" d="M0,64L34.3,90.7C68.6,117,137,171,206,186.7C274.3,203,343,181,411,170.7C480,160,549,160,617,170.7C685.7,181,754,203,823,213.3C891.4,224,960,224,1029,208C1097.1,192,1166,160,1234,170.7C1302.9,181,1371,235,1406,261.3L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
      </div>
    </>
  );
}
