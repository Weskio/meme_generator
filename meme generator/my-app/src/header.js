import React from 'react';
import logo from './Troll Face.png';
import './App.css';

export default function Header(){
    return(
    <div className='header'>
    <img src={logo} alt='Troll Face' id='logo'/>
    <h1 id='title'>Meme Generator</h1>
    <p id='project'>React Course - Project 5</p>
    </div>
    )
}