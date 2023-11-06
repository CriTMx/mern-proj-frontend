import React from 'react'
import './css/footer.css'
import FooterList1 from './footer-components/FooterList1'
import FooterList2 from './footer-components/FooterList2'
import FooterList3 from './footer-components/FooterList3'
import { BrowserRouter } from 'react-router-dom'
import FooterList4 from './footer-components/FooterList4'
import FooterSeparator from './footer-components/FooterSeparator'
import FooterBottom from './footer-components/FooterBottom'

function Footer() {
  return (
    <div className='footer'>
      <BrowserRouter>
        <div className='container footer-container'>
          <div className='row'>
            <FooterList1 />
            <FooterList2 />
            <FooterList3 />
            <FooterList4 />
            <FooterSeparator />
            <FooterBottom />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Footer