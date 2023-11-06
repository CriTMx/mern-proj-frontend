import React from 'react'
import SocialTwitter from '../media/socialicon-twitter.png'
import SocialInstagram from '../media/socialicon-instagram.png'
import SocialGithub from '../media/socialicon-github.png'
import { Link } from 'react-router-dom'

function FooterBottom() {
  return (
    <div className='footer-bottom mb-4 text-start d-flex'>
        <span className='copyright-text text-white me-auto'>&copy; Copyright 2022, All Rights Reserved by <b>Rhythmix</b></span>
        <span className='social-icons text-end ms-auto'>
            <Link to='' className='social-icon-link'><img src={SocialTwitter} /></Link>
            <Link to='' className='social-icon-link'><img src={SocialInstagram} /></Link>
            <Link to='' className='social-icon-link'><img src={SocialGithub} /></Link>
        </span>
    </div>
  )
}

export default FooterBottom