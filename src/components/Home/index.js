import React from 'react'
import './home.css'
import chiprha from '../../assets/images/Vector.png'
import img from '../../assets/images/Rectangle.png'
export default function index() {
    return (
        <>
            <div className="main">
                <div className="inner">
                    <div>
                        <span className="heading">Przeprowadź testy
                            z prawdziwymi
                            użytkownikami.</span>
                    </div>

                <div className="content">
                    <img className="content-img" src={img}></img>
                </div>
                </div>
            </div>
        </>
    )
}
