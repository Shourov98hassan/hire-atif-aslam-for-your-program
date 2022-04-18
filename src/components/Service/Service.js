import React from 'react';
import {  useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const{name,id,price,img,description} = service;
    const navigate = useNavigate()
    const handleCheckOut =id=>{
        navigate(`/checkout/${id}`);


    }
    return (
        <div className='service-detail'>
            <img height={'200px'} width={'200px'} src={img} alt="" />
            <h2>Purpose: {name}</h2>
            <h4>{description}</h4>
            <h6>Price: {price}</h6>
            <button onClick={()=>handleCheckOut(id)} className='btn btn-danger'>Checkout</button>
            
        </div>
    );
};

export default Service;