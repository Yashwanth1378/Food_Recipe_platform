import React from 'react'
import foodRecipe2 from '../assets/foodRecipe2.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeItems from '../components/RecipeItems'; 




export default function Home() {
  return (
    <>
    
    <section className='home'>
        <div className='left'>
            <h1>Food Recipe</h1>
            <h5>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</h5>
                <button>Share your recipe</button>
        </div>
        <div className='right'></div>
        <img src={foodRecipe2} width="320px" height="300px"></img>

    </section>
    <div className='bg'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f6efd4" fill-Opacity="1" d="M0,64L34.3,90.7C68.6,117,137,171,206,186.7C274.3,203,343,181,411,170.7C480,160,549,160,617,170.7C685.7,181,754,203,823,213.3C891.4,224,960,224,1029,208C1097.1,192,1166,160,1234,170.7C1302.9,181,1371,235,1406,261.3L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
    </div>

    <div className='recipe'>
      <RecipeItems/>
    </div>
  
    
    </>
  )
}
