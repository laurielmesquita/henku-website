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
          headingTitle='Fale com a Henku'
          headingInfo='Mande-nos uma mensagem por e-mail ou pelas redes sociais'
        />
        <FooterNav>
          <SocialLinksFooter />
        </FooterNav>
        <Copyright>
          <img src={brandImageFooter} alt='Henku Logo' />
          <small>&copy; Copyright 2020, Henku Corporation</small>
        </Copyright>
      </div>
    </div>
  </FooterWrapper>
)

export default Footer
