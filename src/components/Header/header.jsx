import { Link } from 'react-router-dom'
import './header.css'
import logo from '../../assets/logo.png'


export function Header() {
      return (
            <header className='all'>
                  <Link to="/" draggable='false'><img src={logo} alt='Kasa' className='logo-kasa' draggable='false' />
                  </Link>

                  <nav className='wrapper-links'>
                        <Link to="/" className='accueil-link' draggable='false' >Accueil</Link>
                        <Link to="/propos" className='apropos-link' draggable='false' >A propos</Link>
                  </nav>
            </header>

      )
}