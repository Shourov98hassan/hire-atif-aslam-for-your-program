import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const fetchServices = async () => {
            await fetch('services.json')
                .then(res => res.json())
                .then(data => setServices(data));
        }
        fetchServices()
    }, [])
    return (
        <div className='mt-5'>
            <h1 className='text-center p-5 mt-5 text-danger'>Services: {services.length}</h1>
            <div className='services-detail'>
                {
                    services?.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;