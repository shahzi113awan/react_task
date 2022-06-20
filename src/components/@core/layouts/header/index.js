import React from 'react'
import './header.css'
import Logo from '../../../../assets/icons/mouse_ico.svg'
export default function header() {
  return (
    <>
        <div className='header'>
            <ul className="unorder-list">
                <li className='list-item'>
                    <a href="#">uxirl.pl</a>
                </li>
                <li className='list-item'>
                    <a href="#">Czy to dla mnie?</a>
                </li>
                <li className='list-item'>
                    <a href="#">Jak wygląda badanie?</a>
                </li>
                <li className='list-item'>
                    <a href="#">Koszt badania</a>
                </li>
                <li className='list-item'>
                    <a href="#">uxirl.pl</a>
                </li>
                <button className='pomoc'>
                Pomoc
                </button>
                <button className='pomoc2'>
                    <img className='arrow-logo' src={Logo} alt=""/>
                Wykonaj test UX
                </button>
            </ul>
         </div>
    </>
  )
}
