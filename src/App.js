import React, { useState,useEffect } from "react";
import imageInSrc from './imageInSrc.jpeg';
import "./App.css";

export default function Person() {
  const [person, setPerson] = useState(false);

  const togglePerson = () => {
    setPerson(!person);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will run every second!');
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <button onClick={togglePerson} className="btn-person">
        shows
      </button>

      {person && (
        <div className="overlay">
          <div className="person">
            <div className="person-content">
             
              <div style={{border:"solid 1px black ", maxWidth:'100vw'}}>

       <h1>fullName:</h1>
       <h3>El Hadji Alassane Dieng</h3>
       <br/>
       <h1>bio:</h1>
       <h3>Doctor</h3>
       <br />
       <h1>profession:</h1>
       <h3>I am a ethical hacker</h3>
       <br />
       <h1> imgSrc:</h1>
      
        <img src={imageInSrc} className="App-logo" alt="imageInSrc" />

        <br />

    
        </div>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
}


