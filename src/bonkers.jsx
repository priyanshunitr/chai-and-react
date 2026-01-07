import logoSvg from './assets/logo.svg';
import menu from './assets/menu.svg';
import close from './assets/close.svg';
import bonkers from './assets/bonkers.svg';

export default function Bonkers() {
  return (
<>


<header>
    <div class="header-left"> 
        <img src={logoSvg} class="logo" alt="Fridkay logo" />
        <div class = "divider hide-mobile"></div>
        <a href="#" class = "home hide-mobile">Home</a>
    </div>

    <nav>
        <a href="#">
        <img src={menu} class="menu hide-desktop" alt="Menu icon" />
        </a>

        <ul>
            <li>
                <a href="#">
                    <img src={close} alt="Close button" />
                </a>
            </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            
        </ul>
    </nav>
</header>

<main>
    <h1>Your Cat will go <img src={bonkers} alt="Bonkers" /></h1>

    <p>..for the world’s best testing cat food, sourced with only the finest ingredients. Made with love from the heart of Mississippi.</p>

    <button href="#" class = "Primary-CTA">Get Bonkers</button>
</main>

<div className="cat-container">
    
</div>




</>
)}
