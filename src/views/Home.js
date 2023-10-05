import React from 'react'
import { Login } from '../components/Login'
import "../styles/home.css";
import { Footer } from '../components/Footer';


export const Home = () => {
    return (
        <>
            <div className=" container contenedor mt-4">

                <div className='d-flex flex-column-reverse flex-md-row'>

                    <div className='col-12 col-md-6 d-flex flex-column justify-content-center align-items-center'>
                        <div className="p-3">
                            <img src="https://picsum.photos/200" className="img-thumbnail" alt="..." />
                        </div>
                        <div className="p-3">
                            <img src="https://picsum.photos/200" className="img-thumbnail" alt="..." />
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

