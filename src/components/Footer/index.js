import React from 'react'

import Container from '../Container'
import Heading from '../Heading'

import { FooterWrapper, Copyright } from './style'

import brandImageFooter from '../../images/henku-brand-footer.svg'

const Footer = () => (
  <FooterWrapper>
    <Container>
      <Heading
        nameClass='dark'
        headingTitle='Fale com a Henku'
        headingInfo='Mande-nos uma mensagem por e-mail ou pelas redes sociais'
      />
      <Copyright>
        <img src={brandImageFooter} alt='Henku Logo' />
        <small>&copy; Copyright 2020, Henku Corporation</small>
      </Copyright>
    </Container>
  </FooterWrapper>
)

export default Footer
