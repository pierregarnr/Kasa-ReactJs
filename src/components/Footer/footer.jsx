import './footer.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo-footer.png'


export function Footer() {
      return (
            <footer className='footer-background'>

                  <Link to="/" draggable='false'><img src={logo} alt='Kasa' className='logo-footer' draggable='false' />
                  </Link>
                  <p className='text-footer'>© 2020 Kasa. All rights reserved</p>

            </footer>
      )
}