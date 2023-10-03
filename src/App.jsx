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
import wizzy from './assets/Wizzy3.gif'

import {markersData} from './data'

function App() {
  const [count, setCount] = useState(0)

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
          infocard.style.right= "0px";
          
      });

      marker.addEventListener('mouseleave', function() {
          marker.style.opacity = "0%";
          infocard.style.opacity = "0%";

          infocard.style.right= "-30%";
      });

    }

  var shredonia = document.getElementById('shredonia');
  var warpgateYellow = document.getElementById('warpgate-yellow');
    var shrineChrono = document.getElementById('shrine-chrono');
  var astroidVoid1 = document.getElementById('astroid-void-1');
  
  setMarker(shredonia);
    setMarker(warpgateYellow);
    setMarker(shrineChrono);
  setMarker(astroidVoid1);

  var fluviousFalls = document.getElementById('fluvious-falls');
  var blokoCavern = document.getElementById('bloko-cavern');
  var gnarnia = document.getElementById('gnarnia');
    var guitarBlue = document.getElementById('guitar-blue');
    var warpgateBlue = document.getElementById('warpgate-blue');
  var buboidCavern = document.getElementById('buboid-cavern');
    var warpgatePurple = document.getElementById('warpgate-purple');

  setMarker(fluviousFalls);
  setMarker(blokoCavern);
  setMarker(gnarnia);
    setMarker(guitarBlue);
    setMarker(warpgateBlue);
  setMarker(buboidCavern);
    setMarker(warpgatePurple);

  var digitemple1 = document.getElementById('digitemple-1');
  var digitemple2 = document.getElementById('digitemple-2');
  var digitemple3 = document.getElementById('digitemple-3');
  var blokoReef = document.getElementById('bloko-reef');
  var nebularVoid = document.getElementById('nebular-void');
    var guitarYellow = document.getElementById('guitar-yellow');
    var guitarRed = document.getElementById('guitar-red');
    var shrineMonkey = document.getElementById('shrine-monkey');
    var shrineDragon = document.getElementById('shrine-dragon');
    var cybergate = document.getElementById('cybergate');

  setMarker(digitemple1);
  setMarker(digitemple2);
  setMarker(digitemple3);
  setMarker(blokoReef);
  setMarker(nebularVoid);
    setMarker(guitarRed);
    setMarker(guitarYellow);
    setMarker(shrineMonkey);
    setMarker(shrineDragon);
    setMarker(cybergate);

   var blokopolis1 = document.getElementById('blokopolis-1');
   var blokopolis2 = document.getElementById('blokopolis-2');
   var blokopolis3 = document.getElementById('blokopolis-3');
   var blokohub = document.getElementById('blokohub');
   var fractopolis = document.getElementById('fractopolis');
   var fractoplex = document.getElementById('fractoplex');
   var blokoplex = document.getElementById('blokoplex');
   var nucleus = document.getElementById('nucleus');
    var guitarGreen = document.getElementById('guitar-green');
    var warpgateGreen = document.getElementById('warpgate-green-bloko');
    var warpgateCyan = document.getElementById('warpgate-cyan');
  var astroidVoid2 = document.getElementById('astroid-void-2');
  var auroraDigitalis = document.getElementById('aurora-digitalis');
  var fractopolis2 = document.getElementById('fractopolis-2');
    var warpgateOrange = document.getElementById('warpgate-orange');
  
  setMarker(blokopolis1);
  setMarker(blokopolis2);
  setMarker(blokopolis3);
  setMarker(blokohub);
  setMarker(fractopolis);
  setMarker(fractoplex);
  setMarker(blokoplex);
  setMarker(nucleus);
    setMarker(guitarGreen);
    setMarker(warpgateGreen);
    setMarker(warpgateCyan);
  setMarker(astroidVoid2);
  setMarker(auroraDigitalis);
  setMarker(fractopolis2);
    setMarker(warpgateOrange);

  var buboidVoid = document.getElementById('buboid-void');
    var guitarPurple = document.getElementById('guitar-purple');    

  setMarker(buboidVoid);
    setMarker(guitarPurple);    

  var krystalZone1 = document.getElementById('krystal-zone-1');
  var krystalZone2 = document.getElementById('krystal-zone-2');
  var krystalZone3 = document.getElementById('krystal-zone-3');
  var krystoplex = document.getElementById('krystoplex');
  var krysallix = document.getElementById('krysallix');
    var shrinePaladin = document.getElementById('shrine-paladin');
    var warpgateGreenKrsytal = document.getElementById('warpgate-green-krystal');

  setMarker(krystalZone1);
  setMarker(krystalZone2);
  setMarker(krystalZone3);
  setMarker(krystoplex);
  setMarker(krysallix);
    setMarker(shrinePaladin);
    setMarker(warpgateGreenKrsytal);

  

  

  

  
  
};

  return (
    <>
      <div className="black-rect">
      </div>
      
      <header>
        <h1>NEBULAR CODEX</h1>
      </header>

        <Navbar/>

      <div className="hero"> 
      
        <div className="hero-text-container" >
          <h2> Welcome to the <span className="hero-accent">Nebular Codex!</span> Here you can study all of the secrets of Nebular Crush and level up from noob-ular to nebular!</h2> 
        </div>
        <div className="hero-image-container"> <img className="wizzy-hero" src={wizzy}></img> </div>
      
      </div>


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
        <h2 className="infocard-name" id="infocard-name">SHREDONIA</h2>
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

       <div className="map-marker" id="warpgate-blue" style={{left: 45.5 + '%', top: 26.5 + '%'}} > <h4> BLUE WARPGATE </h4> </div>
       <div className="map-marker" id="guitar-shrine-blue" style={{left: 51.5 + '%', top: 25.75 + '%'}} > <h4> BLUE GUITAR </h4> </div>

       */}

       </div>

    </>

  )


}



export default App
