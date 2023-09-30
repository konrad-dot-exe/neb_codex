import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'

import { enemyData } from './data'
import { guitarData } from './data'
import { maskData } from './data'
import { pickupData } from './data'

function App() {
  const [count, setCount] = useState(0)

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
            <div className="label"> <h4> HP </h4> </div>
            <div className="name"> <h4>{hp}</h4> </div>
          </div>
          <div className = "enemy-stat">
            <div className="label"> <h4> PTS </h4> </div>
            <div className="name"> <h4> {pts} </h4> </div>
          </div>
          <div className = "enemy-stat">
            <div className="label"> <h4>DNGR </h4>  </div>
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

    </>
  )
}

export default App
