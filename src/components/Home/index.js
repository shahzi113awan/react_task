import React from 'react'
import './home.css'
import img from '../../assets/images/Rectangle.png'
// import Header from ''
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
                        <div className="image-div">
                            <img className="content-img" src={img} alt="" />
                            <span className='image-txt'>Zobacz przykładowy test</span>
                            <button className='image-button'>Odtwórz (2 min)</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
