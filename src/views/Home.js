import React from 'react';
import { Login } from '../components/Login';
import "../styles/home.css";
import colegioImagen from '../img/colegio.png';
import { Footer } from '../components/Footer';

export const Home = () => {
    return (
        <>
            <div className="container box mt-4 mb-4">

                <div className='d-flex flex-column-reverse flex-md-row'>

                    <div className='col-12 col-md-6 d-flex flex-column justify-content-center align-items-center'>
                        <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                            <img src={colegioImagen} className="img-thumbnail" alt="..." />
                        </div>
                    </div>
                    <div className='col-12 col-md-6 d-flex flex-column justify-content-center p-3'>
                        <Login />
                    </div>
                </div>
                    <Footer />
            </div>
        </>
    )
}

