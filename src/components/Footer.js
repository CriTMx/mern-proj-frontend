import React from 'react'
import './css/footer.css'
import SocialTwitter from '../components/media/socialicon-twitter.png'
import SocialInstagram from '../components/media/socialicon-instagram.png'
import SocialGithub from '../components/media/socialicon-github.png'
import PlaystoreButton from "../components/media/playstore_button.png"
import AppstoreButton from "../components/media/appstore_button.png"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className='container footer-container'>
        <div className='row'>
          <div className='footer-list-1 footer-list col-md-3 col-6 mb-5'>
            <ul className='list-style-none text-white text-start'>
              <li className='list-group-item mb-md-5 mb-3'><b>Company</b></li>
              <li className='list-group-item mb-md-4 mb-2'>About</li>
              <li className='list-group-item mb-md-4 mb-2'>Jobs</li>
              <li className='list-group-item mb-md-4 mb-2'>For The Record</li>
            </ul>
          </div>
          <div className='footer-list-2 footer-list col-md-3 col-6 mb-5'>
            <ul className='list-style-none text-white text-start'>
              <li className='list-group-item mb-md-5 mb-3'><b>Communities</b></li>
              <li className='list-group-item mb-md-4 mb-2'>For Artists</li>
              <li className='list-group-item mb-md-4 mb-2'>Developers</li>
              <li className='list-group-item mb-md-4 mb-2'>Advertising</li>
              <li className='list-group-item mb-md-4 mb-2'>Investors</li>
              <li className='list-group-item mb-md-4 mb-2'>Vendors</li>
            </ul>
          </div>
          <div className='footer-list footer-list-3 col-md-3 col-6 mb-5'>
            <ul className='list-style-none text-white text-start'>
              <li className='list-group-item mb-md-5 mb-3'><b>Useful Links</b></li>
              <li className='list-group-item mb-md-4 mb-2'>Support</li>
              <li className='list-group-item mb-md-4 mb-2'>Free Mobile App</li>
            </ul>
          </div>
          <div className='footer-list footer-list-4 col-md-3 col-6 mb-5'>
            <ul className='list-style-none text-white text-start'>
              <li className='list-group-item mb-md-5 mb-3'><b>Install App</b></li>
              <li className='list-group-item mb-md-4 mb-2'>
                <Link to=''><img src={PlaystoreButton} id='play-store-button' className='storefront-button' /></Link>
              </li>
              <li className='list-group-item mb-md-4 mb-2'>
                <Link to=''><img src={AppstoreButton} id='apple-store-button' className='storefront-button' /></Link>
              </li>
            </ul>
          </div>
          <div>
            <hr className='hr text-white w-100 mb-4'></hr>
          </div>
          <div className='footer-bottom mb-4 text-start d-flex'>
            <span className='copyright-text text-white me-auto'>&copy; Copyright 2022, All Rights Reserved by <b>Rhythmix</b></span>
            <span className='social-icons text-end ms-auto'>
              <Link to='' className='social-icon-link'><img src={SocialTwitter} /></Link>
              <Link to='' className='social-icon-link'><img src={SocialInstagram} /></Link>
              <Link to='' className='social-icon-link'><img src={SocialGithub} /></Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer