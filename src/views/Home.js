import React from 'react'
import { Login } from '../components/Login'
import "../styles/home.css";
import { Footer } from '../components/Footer';


export const Home = () => {
    return (
        <>
            <div className=" container mt-4">
                <section className="row">
                <div className="col-6">
                <div className="box1 mt-3">Box1</div>
                <div className="box2 mt-3">Box2</div>
                </div>
                <div className=" col-6 d-flex align-items-center">
                <Login/>
                </div>
                <Footer/> 
                </section>
            </div>

        </>
    )
}

