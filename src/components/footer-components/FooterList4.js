import React from 'react'
import PlaystoreButton from '../media/playstore_button.png';
import AppstoreButton from '../media/appstore_button.png';
import { Link } from 'react-router-dom';

function FooterList4() {
  return (
    <div className='footer-list footer-list-4 col-md-3 col-6 mb-5'>
        <ul className='list-style-none text-white text-start'>
            <li className='list-group-item mb-md-5 mb-3'><b>Install App</b></li>
            <li className='list-group-item mb-md-4 mb-2'>
          <Link to=''><img src={PlaystoreButton} id='play-store-button' className='storefront-button'/></Link>
            </li>
            <li className='list-group-item mb-md-4 mb-2'>
          <Link to=''><img src={AppstoreButton} id='apple-store-button' className='storefront-button'/></Link>
            </li>
        </ul>
    </div>
  )
}

export default FooterList4