import './Header.css';
import menu from '../../assets/menu.png';
export function Header () {

return(
<>
    <header>
        <div className='logo'>
            <p>Erika Duarte</p>
        </div>
        <div className='container-menu-hamburger'>
            <button><img src={menu}/></button>
        </div>
        <nav className='nav-header'>
            <menu>
                <li>Home</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Contacto</li>
            </menu>
        </nav>
        
    </header>
   
</>
)

}