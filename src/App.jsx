
import { useEffect, useRef } from 'react';

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


  
let hamburger = document.getElementById('hamburger-menu');
let darkenOverlay = document.getElementById('darken-overlay');
let hamburgerOpen = false;

// open the side menu
    function toggleHamburger(){
        if (!hamburgerOpen){
            hamburger = document.getElementById('hamburger-menu');
            darkenOverlay = document.getElementById('darken-overlay');
            
            hamburger.style.top = "17vh";
            darkenOverlay.style.opacity = "100%";
            
            hamburgerOpen = true;
        
        } else{
            hamburger = document.getElementById('hamburger-menu');
            hamburger.style.top = "-100%";
            darkenOverlay.style.opacity = "0%";
            hamburgerOpen = false;
        }
        console.log("toggle");
    } 

  let hideInfoCard; // Declare hideInfoCard in the outer scope
  let showMessage;

  showMessage = function(){
    console.log("it worked!");
  } 


useEffect(() => {

  const mapContainer = document.getElementById('map-container');
  const map = document.getElementById('imgContainer');
  
  // Calculate the maximum possible scroll values
  let maxScrollLeft = mapContainer.scrollWidth - mapContainer.clientWidth;
  let maxScrollTop = mapContainer.scrollHeight - mapContainer.clientHeight;

  // Store the initial zoom level.
  let zoomLevel = 95;
  let maxZoomOutLevel = 95;

  // Function to update max scroll values and reset zoom values
  function updateMaxScrollValues() {

      maxScrollLeft = mapContainer.scrollWidth - mapContainer.clientWidth;
      maxScrollTop = mapContainer.scrollHeight - mapContainer.clientHeight;

      if (window.matchMedia('(max-width: 700px)').matches) {
        maxZoomOutLevel = 225;
        zoomLevel = 225;
        if (zoomLevel < maxZoomOutLevel){
          zoomLevel = maxZoomOutLevel;
        }

      }else{
        maxZoomOutLevel = 95;
        zoomLevel = 95;
        if (zoomLevel < maxZoomOutLevel){
          zoomLevel = maxZoomOutLevel;
        }
      }

      map.style.width = `${zoomLevel}%`;
    
    }

  // Function to update current scroll values
  function updateCurrentScrollValues() {
      maxScrollLeft = mapContainer.scrollWidth - mapContainer.clientWidth;
      maxScrollTop = mapContainer.scrollHeight - mapContainer.clientHeight;
  }

  // Update them on window resize
  window.addEventListener('resize', updateMaxScrollValues);
  
  // Update current scroll values on mouse over
  mapContainer.addEventListener('mouseover', updateCurrentScrollValues);

  // Initial calculation
  updateMaxScrollValues();
  // for some reason I need to delay height calculation...
  setTimeout(()=>{

    // Initial calculation
    updateMaxScrollValues();

    // calculate 50% of the content's width and height
    mapContainer.scrollLeft = mapContainer.scrollWidth * 0.5 - mapContainer.clientWidth * 0.5;
    mapContainer.scrollTop = mapContainer.scrollHeight * 0.5 - mapContainer.clientHeight * 0.5;

  }, 250); 

// ZOOMING

// Set breakpoint for desktop / mobile
if (window.matchMedia('(max-width: 700px)').matches) {
  zoomLevel = 225;
  maxZoomOutLevel = 225;
  console.log("max zoom-out level set at " + maxZoomOutLevel)
}else{
  zoomLevel = 95;
  maxZoomOutLevel = 95;
}

// handle zoom button clicks

document.getElementById('zoom-in').addEventListener('click', () => {
  
  // Record the center of the current view.
    const centerX = (mapContainer.scrollLeft + mapContainer.clientWidth / 2) / mapContainer.scrollWidth;
    const centerY = (mapContainer.scrollTop + mapContainer.clientHeight / 2) / mapContainer.scrollHeight;

    // Increase the zoom level.
    zoomLevel += 25;
    console.log("zoom level =" + zoomLevel);

    // Apply the new zoom level.
    map.style.width = `${zoomLevel}%`;

    // Update the scroll position to keep the view centered.
    mapContainer.scrollLeft = centerX * mapContainer.scrollWidth - mapContainer.clientWidth / 2;
    mapContainer.scrollTop = centerY * mapContainer.scrollHeight - mapContainer.clientHeight / 2;
});


document.getElementById('zoom-out').addEventListener('click', () => {
  
    console.log("zoomLevel = " + zoomLevel);
    console.log("maxZoomOutLevel = " + maxZoomOutLevel);

  // Prevent zooming out past the original size.
    if (zoomLevel <= maxZoomOutLevel) return;

    // Record the center of the current view.
    const centerX = (mapContainer.scrollLeft + mapContainer.clientWidth / 2) / mapContainer.scrollWidth;
    const centerY = (mapContainer.scrollTop + mapContainer.clientHeight / 2) / mapContainer.scrollHeight;

    // Decrease the zoom level.
    zoomLevel -= 25;

    // Apply the new zoom level.
    map.style.width = `${zoomLevel}%`;

    // Update the scroll position to keep the view centered.
    mapContainer.scrollLeft = centerX * mapContainer.scrollWidth - mapContainer.clientWidth / 2;
    mapContainer.scrollTop = centerY * mapContainer.scrollHeight - mapContainer.clientHeight / 2;
});
    
  //   // debug
  // setInterval(() => {
      
  //   // Calculate the maximum possible scroll values
  //   let maxScrollLeft = mapContainer.scrollWidth - mapContainer.clientWidth;
  //   let maxScrollTop = mapContainer.scrollHeight - mapContainer.clientHeight;

  //   // Calculate scrollLeftPercentage and handle division by zero
  //   if (maxScrollLeft === 0) {
  //       scrollLeftPercentage = 0;
  //   } else {
  //       scrollLeftPercentage = (mapContainer.scrollLeft / maxScrollLeft) * 100;
  //   }

  //   // Calculate scrollTopPercentage and handle division by zero
  //   if (maxScrollTop === 0) {
  //       scrollTopPercentage = 0;
  //   } else {
  //       scrollTopPercentage = (mapContainer.scrollTop / maxScrollTop) * 100;
  //   }

  //   // Additional checks to handle NaN values
  //   if (isNaN(scrollLeftPercentage)) {
  //       scrollLeftPercentage = 0;
  //   }

  //   if (isNaN(scrollTopPercentage)) {
  //       scrollTopPercentage = 0;
  //   }

  //   console.log("scrollLeft% =", scrollLeftPercentage);
  //   console.log("scrollTop% =", scrollTopPercentage);

  //     // updateMaxScrollValues();
  //     // scrollLeftPercentage = (mapContainer.scrollLeft / maxScrollLeft) * 100;
  //     // scrollTopPercentage = (mapContainer.scrollTop / maxScrollTop) * 100;

  //     // Log the individual values to understand what’s happening
  //     // console.log('maxScrollTop:', maxScrollTop);
  //     // console.log('mapContainer.scrollTop:', mapContainer.scrollTop);
  //     // console.log('mapContainer.scrollHeight:', mapContainer.scrollHeight);
  //     // console.log('mapContainer.clientHeight:', mapContainer.clientHeight);
      
  //     //  console.log('maxScrollLeft:', maxScrollLeft);
  //     //  console.log('mapContainer.scrollLeft:', mapContainer.scrollLeft);
  //     //  console.log('mapContainer.scrollWidth:', mapContainer.scrollWidth);
  //     //  console.log('mapContainer.clientWidth:', mapContainer.clientWidth);

  // }, 1000);  

    function setMarker(marker){
    
      var infocard = document.getElementById("map-infocard");
      var infocardName = document.getElementById("infocard-name");
      var infocardDesc = document.getElementById("infocard-description");
      var infocardDifficulty = document.getElementById("infocard-difficulty");
      var infocardImage = document.getElementById("infocard-image");
      var infocardOK = document.getElementById("infocard-OK");
      var infocardDarkenOverlay = document.getElementById("infocard-darken-overlay");
      var header = document.getElementById("header");
      var topNav = document.getElementById("top-nav");

      function showInfoCard(event, method){

          marker.style.opacity = "100%";

            if (method == "mouse"){
              return;
            }

          const map = document.getElementById('imgContainer');

          //document.documentElement.classList.add('no-scroll');
          // header.style.marginRight ="25px";
          // topNav.style.marginRight ="25px";

          infocardDarkenOverlay.style.pointerEvents = "all";
          infocardDarkenOverlay.style.opacity = "50%";
          infocard.style.top= "17vh";

          let levelName = marker.getAttribute('levelname');
          let levelDesc = marker.getAttribute('leveldesc');
          let levelDifficulty = marker.getAttribute('leveldifficulty');
          let levelImage = marker.getAttribute('image');
          
          infocardName.textContent = levelName;
          infocardDesc.innerHTML = levelDesc;
          infocardDifficulty.textContent = "Difficulty: " + levelDifficulty;
          if (infocardDifficulty.textContent == "Difficulty: N/A"){
            infocardDifficulty.style.display = "none";
            infocardImage.style.marginBottom = "1rem";

          }else{
            infocardDifficulty.style.display = "block";
            infocardImage.style.marginBottom = "0px";
          }
          infocardImage.src = levelImage;
    
      }

      function hideInfoCard(event, method, marker){
        
        const map = document.getElementById('imgContainer');

        console.log('marker = ' + marker);

        marker.style.opacity = "0%";


            if (method == "mouse"){
              return;
            }
        
        document.documentElement.classList.remove('no-scroll');
        header.style.marginRight ="8px";
        topNav.style.marginRight ="8px";
        infocardDarkenOverlay.style.pointerEvents = "none";
        infocardDarkenOverlay.style.opacity = "0%";
        infocard.style.top= "-100%";
      }

      marker.addEventListener('mouseenter', (event) => {
        showInfoCard(event, "mouse");
      });

      marker.addEventListener('touchstart', (event) => {
        showInfoCard(event, "tap");
      });

       marker.addEventListener('click', (event) => {
        showInfoCard(event, "tap");
      });
      
      marker.addEventListener('mouseleave', (event) => {
        hideInfoCard(event, "mouse", marker);
      });

       infocardOK.addEventListener('click', (event) => {
        hideInfoCard(event, "tap", marker);
      });

      infocardOK.addEventListener('touchstart', (event) => {
        hideInfoCard(event, "tap", marker);
      });

       document.addEventListener('click', function(e) {
        if (e.target.classList.contains('infocard-link')) {
            hideInfoCard(e, "tap", marker);
        }
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
  var asteroidVoid3 = document.getElementById('asteroid-void-3');
  var buboidCavern = document.getElementById('buboid-cavern');
    var warpgatePurple = document.getElementById('warpgate-purple');

  setMarker(fluviousFalls);
  setMarker(blokoCavern);
  setMarker(gnarnia);
    setMarker(guitarBlue);
    setMarker(warpgateBlue);
  setMarker(buboidCavern);
  setMarker(asteroidVoid3);
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
    var start = document.getElementById('start');

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
    setMarker(start);

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

 });

  return (
    <>
      
      <header id="header">
        <a href ="#"><h1>NEBULAR CODEX</h1></a>
      </header>

              <div id="hamburger-menu" className="hamburger-menu">
            <div className = "hamburger-link-container" >
            <a href="#enemies" onClick={toggleHamburger}>ENEMIES</a>
            <a href="#guitars" onClick={toggleHamburger}>GUITARS</a>
            <a href="#masks" onClick={toggleHamburger}>MASKS</a> 
            <a href="#items" onClick={toggleHamburger}>ITEMS</a>
            <a href="#worldmap" onClick={toggleHamburger}>WORLDMAP</a>
            </div>
        </div>
            
        <nav className="top-nav" id="top-nav">
                <div> <a href="#enemies" >ENEMIES</a> </div>
                <div> <a href="#guitars" >GUITARS</a> </div>
                <div> <a href="#masks" >MASKS</a> </div>
                <div> <a href="#items" >ITEMS</a> </div>
                <div> <a href="#worldmap" >WORLDMAP</a> </div>
           
                <div onClick={toggleHamburger} className = "hamburger-icon"> 
                    <svg width="30" height="30">                          
                        <path d="M0,8 30,8" stroke="var(--clr-nebular-purple-500)" strokeWidth="3"/>    
                        <path d="M0,16 30,16" stroke="var(--clr-nebular-purple-500)" strokeWidth="3"/>
                        <path d="M0,24 30,24" stroke="var(--clr-nebular-purple-500)" strokeWidth="3"/>
                    </svg>
                </div>
              
        </nav>

        <div className="black-rect" id="black-rect"></div>

        <div className ="darken-overlay" id="darken-overlay"></div>

        {/* <Navbar/> */}

      <div className="hero"> 
      
        <div className="hero-text-container" >
          <h2> Welcome to the <span className="hero-accent">Nebular Codex!</span> Here you can study all of the secrets of Nebular Crush and level up from noob-ular to nebular!</h2> 
          <button onClick={ () => window.location.href = "https://store.steampowered.com/app/1706550/Nebular_Crush/"}> What the heck is<br/>Nebular Crush? </button>
        
        </div>
        <div className="hero-image-container"> <img className="wizzy-hero" id="wizzy-hero" src={wizzy}></img> </div>
      
      </div>

      <div className="section-header" id="enemies"><h1>ENEMIES</h1></div>

      <div className="grid enemy-grid"> 

        {enemyData.map((enemy) => {
          const{ id, image, name, hp, pts, dngr, desc} = enemy;
          return(
            <div key={id} className="enemy-card" id={id}>
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
          <div key={id} className="enemy-card guitar-card" id= {id}>
          <div className = "enemy-image guitar-image"  > <img src = {image} ></img>  </div>
            
          <div className = "bullet-image"> <img src = {bulletImage}></img>  </div>

          <div className = " enemy-name guitar-name"> 
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

          <div key={id} className="enemy-card" id={id}>
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

      <div className="section-header" id="items"><h1>ITEMS</h1></div>

       <div className="grid guitar-grid"> 
      
       {pickupData.map((pickup) => {
          const{ id, image, imageAlt, name, pts, desc} = pickup;
          return(

          <div key={id} className="enemy-card" id={id}>
          <div className = "enemy-image "> <img src = {image}></img>  </div>

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

       <div className="section-header" ><h1>WORLD MAP</h1>
        <h4>Click on a node for information.</h4></div>

  

       <div className="map-app-container" id="worldmap">

       <div className="map-container" id="map-container">
        <div className="img-magnifier-container" id="imgContainer" >
          <img id="myimage" src={worldmap} width="100%"/>
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
            </div>
          ))}
      
        </div>

        </div>

          <div className="map-control-container">
            <button id="zoom-in" >+</button>
            <button id="zoom-out" >-</button>
          </div>

       </div>

       <div className="infocard-container">
        <div className="map-infocard" id="map-infocard">
            <h2 className="infocard-name" id="infocard-name">SHREDONIA</h2>
            <div className="infocard-content-arrange">
              <div>
                <img  src={screenshot} className="infocard-image" id="infocard-image"/>
              </div>
                <div className="infocard-text-content">
                  <div className="difficulty"><p id="infocard-difficulty"> Difficulty: <span className="hard" >HARD</span></p></div>
                  <div className="infocard-description" ><p id="infocard-description"> Description goes here. </p></div>
                  <button id="infocard-OK"> OK </button>
                </div>
            </div>
            
        </div>
        <div className ="infocard-darken-overlay" id="infocard-darken-overlay"></div>
        </div> 
       
    </>

  )

}

export default App
