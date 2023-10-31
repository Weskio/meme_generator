import React from "react";
//import frame from  './Meme Generator.png'
import { memesData } from "./memesData";
import { useState } from "react";


export default function Meme(){

    const [memeImage, setMemeImage] = useState({
        topText: '',
        bottomText:'',
        randomImage:"https://i.imgflip.com/30b1gx.jpg"
    })

    function getMemeImage(){
        //console.log(Math.random(memesData))
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage({topText:memeImage.topText,
               bottomText: memeImage.bottomText,
             randomImage: memesArray[randomNumber].url}) 
    }
 

    return(
        <div className="new-div">

         <div className="input">

            <input 
            form="input" 
            placeholder="Top Text" 
            value={memeImage.topText}
            onChange={(e) => {setMemeImage({...memeImage, topText: e.target.value})}}
            />

            <input form="input" 
             placeholder="Bottom Text" 
             value={memeImage.bottomText}
             onChange={(e) => {setMemeImage({...memeImage, bottomText: e.target.value})}}
             />

            </div>

            <button onClick={getMemeImage} >Get a new meme image 📷</button>

            <div className="image-block">
                <p className="top-text">{memeImage.topText}</p>
                 <img src={memeImage.randomImage} alt="frame"/>
                 <p className="bottom-text">{memeImage.bottomText}</p>
            </div>

        </div>

    )
}