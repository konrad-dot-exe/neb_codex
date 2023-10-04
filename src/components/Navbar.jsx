const Navbar = () => {
    
    let hamburger = document.getElementById('hamburger-menu');
    let hamburgerOpen = false;

    // open the side menu
    function toggleHamburger(){
        if (!hamburgerOpen){
            hamburger = document.getElementById('hamburger-menu');
            hamburger.style.top = "17vh";
            
            hamburgerOpen = true;
        
        } else{
            hamburger = document.getElementById('hamburger-menu');
            hamburger.style.top = "-33vh";
            hamburgerOpen = false;
        }
        console.log("toggle");
    }

    return(
        <>
        <div id="hamburger-menu" className="hamburger-menu">
           <a href="#enemies" onClick={toggleHamburger}>ENEMIES</a>
           <a href="#guitars" onClick={toggleHamburger}>GUITARS</a>
           <a href="#masks" onClick={toggleHamburger}>MASKS</a> 
           <a href="#items" onClick={toggleHamburger}>ITEMS</a>
           <a href="#worldmap" onClick={toggleHamburger}>WORLDMAP</a>
        </div>
            
        <nav className="top-nav">
                <div> <a href="#enemies" >ENEMIES</a> </div>
                <div> <a href="#guitars" >GUITARS</a> </div>
                <div> <a href="#masks" >MASKS</a> </div>
                <div> <a href="#items" >ITEMS</a> </div>
                <div> <a href="#worldmap" >WORLDMAP</a> </div>
           
                <div onClick={toggleHamburger} className = "hamburger-icon"> 
                    <svg width="30" height="30">                          
                        <path d="M0,5 30,5" stroke="var(--clr-nebular-purple-500)" strokeWidth="3"/>    
                        <path d="M0,14 30,14" stroke="var(--clr-nebular-purple-500)" strokeWidth="3"/>
                        <path d="M0,23 30,23" stroke="var(--clr-nebular-purple-500)" strokeWidth="3"/>
                    </svg>
                </div>
              
        </nav>

        </>
    )
}

export default Navbar;
