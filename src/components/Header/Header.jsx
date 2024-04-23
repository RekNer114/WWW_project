import './Header.css'
import logo from '../../assets//images/logo.png'
import { useNavigate } from 'react-router-dom';

function Header(){

    //handle menu buttons
    
    const navigate = useNavigate();

    const handleMenu = (pageLink) => {
      navigate(pageLink);
    };

    //animation
    const closeOpen = () =>{
        var menu_button = document.getElementById('menu_button');
        var menu = document.getElementById("menu");

        menu_button.classList.toggle("change"); 

        //animation of appearing and disapearing
    if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.opacity = '0';
            menu.style.display = 'grid';
        setTimeout(function(){
            menu.style.opacity ='1';
        }, 100);
    } else {
            menu.style.opacity = '0';
        setTimeout(function () {
            menu.style.display = 'none';
        }, 500);
            }
    }



    return(

      <header>
        {/*<h1>Travel Explore</h1>*/}
        <div id='logo_container'>
        <img src= {logo} id="logo" />
        </div>
        <div id="menu_button" className= "menu_button" onClick={closeOpen}>
            
            <span className="bar" id="bar1"></span>
            <span className="bar" id="bar2"></span>
            <span className="bar" id="bar3"></span>
        </div>

        <nav id="menu">
        
        
            <button className= "menu_item" onClick={() => handleMenu('/home')}>Home</button>
           <button className="menu_item" onClick={() => handleMenu('/destinations')}>Destinations</button>
            <button className = "menu_item" onClick={() => handleMenu('/about')}>About us</button>
            
            
        </nav>

      </header>  
    );
}

export default Header;