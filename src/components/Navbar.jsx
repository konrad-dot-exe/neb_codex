const Navbar = () => {
    
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

    return(
        <>
        <div id="hamburger-menu" className="hamburger-menu">
            <div className = "hamburger-link-container" >
            <a href="#enemies" onClick={toggleHamburger}>ENEMIES</a>
            <a href="#guitars" onClick={toggleHamburger}>GUITARS</a>
            <a href="#masks" onClick={toggleHamburger}>MASKS</a> 
            <a href="#items" onClick={toggleHamburger}>ITEMS</a>
            <a href="#worldmap" onClick={toggleHamburger}>WORLDMAP</a>
            </div>
        </div>
            
        <nav className="top-nav">
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

        <div className="black-rect" id="black-rect">
        </div>

        <div className ="darken-overlay" id="darken-overlay"></div>

        </>
    )
}

export default Navbar;
