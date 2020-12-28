import React from 'react'
import Container from '../components/Container'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import HeroMedia from '../components/HeroMedia'

import video from '../images/henku-about.mp4'

const AboutPage = () => (
  <Layout>
    <SEO title='Sobre Nós' />
    <HeroMedia
      heroTitle='Conheça a Henku'
      heroInfo='O nosso DNA é forjado no aprendizado continuo e constante'
      heroBtnTitle='Fale com um especialista'
      slug='#contact'
      srcMedia={video}
    />
    <Container>
      <h1>Sobre Nós</h1>
    </Container>
  </Layout>
)

export default AboutPage
