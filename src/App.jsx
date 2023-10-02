import { useState } from 'react'
import { useEffect } from 'react';

import './App.css'

import Navbar from './components/Navbar'

import { enemyData } from './data'
import { guitarData } from './data'
import { maskData } from './data'
import { pickupData } from './data'

import worldmap from './assets/Worldmap.jpg'
import screenshot from './assets/screenshot.png'

import {markersData} from './data'


function App() {
  const [count, setCount] = useState(0)

  function magnify(imgID, zoom) {
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);
    /*create magnifier glass:*/
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
    /*insert magnifier glass:*/
    img.parentElement.insertBefore(glass, img);
    /*set background properties for the magnifier glass:*/
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    glass.style.opacity = "10%";
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

    var imgContainer = document.getElementById('imgContainer');
    
    if (imgContainer) {
        imgContainer.addEventListener('mouseenter', function() {
            glass.style.opacity = "100%";
        });

        imgContainer.addEventListener('mouseleave', function() {
            glass.style.opacity = "0%";
        });

        // ... rest of your code that depends on the DOM
    } else {
        console.error('imgContainer not found');
    }

    /*execute a function when someone moves the magnifier glass over the image:*/
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /*prevent the magnifier glass from being positioned outside the image:*/
      if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}
      /*set the position of the magnifier glass:*/
      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";
      /*display what the magnifier glass "sees":*/
      glass.style.backgroundPosition = "-" + ((x * zoom) - w) + "px -" + ((y * zoom) - h) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }

  //useEffect(() => {
  //  magnify("myimage", 3);
  //}, []);  // The empty array means this useEffect runs once after initial render

  window.onload = (event) => {
    
    function setMarker(marker){
    
      var infocard = document.getElementById("map-infocard");
      var infocardName = document.getElementById("infocard-name");
      var infocardDesc = document.getElementById("infocard-description");
      var infocardDifficulty = document.getElementById("infocard-difficulty");
      var infocardImage = document.getElementById("infocard-image");


      marker.addEventListener('mouseenter', function() {
          marker.style.opacity = "100%";
          infocard.style.opacity = "100%";
          
          console.log(infocardImage.src);

          let levelName = marker.getAttribute('levelname');
          let levelDesc = marker.getAttribute('leveldesc');
          let levelDifficulty = marker.getAttribute('leveldifficulty');
          let levelImage = marker.getAttribute('image');
          
          infocardName.textContent = levelName;
          infocardDesc.textContent = levelDesc;
          infocardDifficulty.textContent = "Difficulty: " + levelDifficulty;
          infocardImage.src = levelImage;
          
      });

      marker.addEventListener('mouseleave', function() {
          marker.style.opacity = "0%";
          infocard.style.opacity = "0%";
      });

    }

  var shredonia = document.getElementById('shredonia');
  var warpgateYellow = document.getElementById('warpgate-yellow');
  var shrineChrono = document.getElementById('shrine-chrono');
  
  var astroidVoid1 = document.getElementById('astroid-void-1');
  
  var fluviousFalls = document.getElementById('fluvious-falls');
  //var blokoCavern = document.getElementById('bloko-cavern');
  //var sawtoothCave = document.getElementById('sawtooth-cave');
  //var guitarShrineBlue = document.getElementById('guitar-shrine-blue');
  //var warpgateBlue = document.getElementById('warpgate-blue');

  setMarker(shredonia);
  setMarker(warpgateYellow);
  setMarker(shrineChrono);

  setMarker(astroidVoid1);
  
  setMarker(fluviousFalls);
  //setMarker(blokoCavern);
  //setMarker(sawtoothCave);
  //setMarker(guitarShrineBlue);
  //setMarker(warpgateBlue);
  
};

  return (
    <>
      <div className="black-rect">
      </div>
      
      <header>
        <h1>NEBULAR CODEX</h1>
      </header>

        <Navbar/>

      <div className="section-header first" id="enemies"><h1>ENEMIES</h1></div>

      <div className="grid enemy-grid"> 

        {enemyData.map((enemy) => {
          const{ id, image, name, hp, pts, dngr, desc} = enemy;
          return(
            <div key={id} className="enemy-card">
          <div className = "enemy-image"> <img src = {image}></img>  </div>
            
          <div className = "enemy-name"> 
            <div className="label"> <h4> NAME: </h4> </div>
            <div className="name"> <h4> {name} </h4> </div>
          
          </div>
          <div className = "enemy-stat">
            <div className="label"> <h4> HP: </h4> </div>
            <div className="name"> <h4>{hp}</h4> </div>
          </div>
          <div className = "enemy-stat">
            <div className="label"> <h4> PTS: </h4> </div>
            <div className="name"> <h4> {pts} </h4> </div>
          </div>
          <div className = "enemy-stat">
            <div className="label"> <h4>DNGR: </h4>  </div>
            <div className="name"> <h4> {dngr} </h4> </div>
          </div>
          <div className = "enemy-desrciption">
            <h4> {desc}
            </h4>
          </div>
        </div>
          );
       })}

      </div>

       <div className="section-header" id="guitars"><h1>GUITARS</h1></div>

      <div className="grid guitar-grid"> 

       {guitarData.map((guitar) => {
          const{ id, image, bulletImage, name, dmg, rate, ammo, desc} = guitar;
          return(
          <div key={id} className="enemy-card">
          <div className = "enemy-image"> <img src = {image}></img>  </div>
            
          <div className = "bullet-image"> <img src = {bulletImage}></img>  </div>

          <div className = "guitar-name"> 
            <div className="label"> <h4> NAME: </h4> </div>
            <div className="name"> <h4> {name} </h4> </div>
          
          </div>
          <div className = "enemy-stat">
            <div className="label"> <h4> DMG: </h4> </div>
            <div className="name"> <h4> {dmg} </h4> </div>
          </div>
          <div className = "enemy-stat">
            <div className="label"> <h4> RATE: </h4> </div>
            <div className="name"> <h4> {rate} </h4> </div>
          </div>
          <div className = "enemy-stat">
            <div className="label"> <h4> AMMO: </h4>  </div>
            <div className="name"> <h4> {ammo} </h4> </div>
          </div>
          <div className = "enemy-desrciption">
            <h4> {desc}
            </h4>
          </div>
        </div>
            );
       })}
    

      </div>

       <div className="section-header" id="masks"><h1>MASKS</h1></div>

       <div className="grid guitar-grid"> 
      
       {maskData.map((mask) => {
          const{ id, image, name, manaUsage, desc} = mask;
          return(

          <div key={id} className="enemy-card">
          <div className = "enemy-image"> <img src = {image}></img>  </div>

          <div className = "enemy-name"> 
            <div className="label"> <h4> NAME: </h4> </div>
            <div className="name"> <h4> {name} </h4> </div>
          
          </div>
          <div className = "mana-usage">
            <div className="label"> <h4> MANA USAGE: </h4> </div>
            <div className="name"> <h4> {manaUsage} </h4> </div>
          </div>
 
          <div className = "enemy-desrciption">
            <h4>{desc}  
            </h4>
          </div>
        </div>
          );
       })}

       </div>

      <div className="section-header" id="pickups"><h1>PICKUPS</h1></div>

       <div className="grid guitar-grid"> 
      
       {pickupData.map((pickup) => {
          const{ id, image, name, pts, desc} = pickup;
          return(

          <div key={id} className="enemy-card">
          <div className = "enemy-image"> <img src = {image}></img>  </div>

          <div className = "enemy-name"> 
            <div className="label"> <h4> NAME: </h4> </div>
            <div className="name"> <h4> {name} </h4> </div>
          
          </div>
          <div className = "mana-usage pickup-points">
            <div className="label"> <h4> PTS: </h4> </div>
            <div className="name"> <h4> {pts} </h4> </div>
          </div>
 
          <div className = "enemy-desrciption">
            <h4>{desc} 
            </h4>
          </div>
        </div>

         );
       })}

       </div>

       <div className="section-header" id="worldmap"><h1>WORLD MAP</h1></div>

       <div className="map-infocard" id="map-infocard">
        <h2 id="infocard-name">SHREDONIA</h2>
        <img  src={screenshot} className="infocard-image" id="infocard-image"/>
        <div className="difficulty"><p id="infocard-difficulty"> Difficulty: <span className="hard" >HARD</span></p></div>
        <div className="infocard-description" ><p id="infocard-description"> This level is a totally mysterious enigma.</p></div>

      </div>

       <div className="map-container">

        <div className="img-magnifier-container" id="imgContainer">
          <img id="myimage" src={worldmap} width="100%"/>
        </div>

    
        {markersData.map(marker => (
          <div 
            key={marker.id}
            className={`map-marker ${marker.size}`} 
            id={marker.id} 
            levelname={marker.name} 
            style={{ left: marker.left, top: marker.top }}
            image= {marker.image}
            leveldifficulty = {marker.leveldifficulty}
            leveldesc = {marker.leveldesc}
          >
            <h4>{marker.name}</h4>
            {/*... additional elements or attributes can be added based on the data in each marker object*/}
          </div>
        ))}

        {/*

       <div className="map-marker large" id="fluvious-falls" style={{left: 40.5 + '%', top: 31 + '%'}} > <h4> FLUVIOUS FALLS </h4> </div>
       <div className="map-marker large" id="bloko-cavern" style={{left: 47.25 + '%', top: 36 + '%'}} > <h4> BLOKO CAVERN </h4> </div>
       <div className="map-marker large" id="sawtooth-cave" style={{left: 55.25 + '%', top: 26.5 + '%'}} > <h4> SAWTOOTH CAVE </h4> </div>
       <div className="map-marker" id="warpgate-blue" style={{left: 45.5 + '%', top: 26.5 + '%'}} > <h4> BLUE WARPGATE </h4> </div>
       <div className="map-marker" id="guitar-shrine-blue" style={{left: 51.5 + '%', top: 25.75 + '%'}} > <h4> BLUE GUITAR </h4> </div>

       */}

       </div>

    </>

  )


}



export default App
