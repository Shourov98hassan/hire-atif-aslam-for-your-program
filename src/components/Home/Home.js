import React from 'react';
import atif1 from '../../atif1.jpg'
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
       <div className='mt-5'>
           <hr />
            <h1 className='text-center text-danger'>Crazy fan of Atif Aslam</h1>
            <hr />
            <div className='Container d-flex text-center '>
           
            <div className='w-50 mt-5 align-middle'>
              <h2>Atif Aslam</h2>
              <p>Muhammad Atif Aslam is a Pakistani playback singer, songwriter, composer and actor <br /> who is best known for his songs in the Pakistani and Indian film industries.</p>
              <button className='btn btn-danger'>Explore More!</button>
           </div>
           

           <div>
           <img className='w-25 mt-5' src={atif1} alt="" />
           </div>   
       </div>
       
       <Services></Services>

       </div>
    );
};

export default Home;