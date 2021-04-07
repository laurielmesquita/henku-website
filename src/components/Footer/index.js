import React from 'react'

import Heading from '../Heading'
import SocialLinksFooter from '../SocialLinksFooter'

import { FooterWrapper, FooterNav, Copyright } from './style'

import brandImageFooter from '../../images/henku-brand-footer.svg'

const Footer = () => (
  <FooterWrapper>
    <div className='container'>
      <div className='row'>
        <Heading
          nameClass='dark'
          headingTitle="Let's talk"
          headingInfo='Please send us an email or contact us on the other networks'
        />
        <FooterNav>
          <SocialLinksFooter />
        </FooterNav>
        <Copyright>
          <img src={brandImageFooter} alt='Henku Logo' />
          <small>&copy; Copyright 2020, Henku</small>
        </Copyright>
      </div>
    </div>
  </FooterWrapper>
)

export default Footer
