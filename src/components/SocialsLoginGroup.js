import React from 'react'
import SocialGoogle from './media/social_google.png';
import SocialApple from './media/social_apple.png';

function SocialsLoginGroup() {
  return (
    <div className='socials-login mb-4'>
        <a href='#'><img src={SocialGoogle} className='social-login-img me-2'/></a>
        <a href='#'><img src={SocialApple} className='social-login-img'/></a>
    </div>
  )
}

export default SocialsLoginGroup;