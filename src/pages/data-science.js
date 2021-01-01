import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import Container from '../components/Container'
import HeroMedia from '../components/HeroMedia'

import video from '../images/henku-data-science.mp4'

const DataSciencePage = () => (
  <Layout>
    <SEO title='Data Science' />
    <HeroMedia
      heroTitle='Data Science'
      heroInfo='Aqui um texto de apoio, descritivo que fortaleça o título e convide o usuário para navegar.'
      heroBtnTitle='Fale com um especialista'
      slug='#contact'
      srcMedia={video}
    />
    <Container>
      <h1>Data Science</h1>
    </Container>
  </Layout>
)

export default DataSciencePage
