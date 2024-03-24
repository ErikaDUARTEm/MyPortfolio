import { useState } from 'react';
import './Header.css';
import menu from '../../assets/menu.png';

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleToggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <header>
                <div className='logo' id="home">
                    <p className="great-vibes-regular"> Erika Duarte</p>
                </div>
                <input type="checkbox" id="menu-toggle" className="menu-toggle hidden-checkbox" checked={menuOpen} onChange={handleToggleMenu} />
                <nav className='nav-header'>
                    <ul className='nav-header-list'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#aboutme">About me</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className='container-menu-hamburger'>
                    <button onClick={handleToggleMenu}><img src={menu} alt="Menu" /></button>
                </div>
            </header>
        </>
    );
}
