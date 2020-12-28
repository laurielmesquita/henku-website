import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Container from '../components/Container'
import HeroMedia from '../components/HeroMedia'
import Button from '../components/Button'

import video from '../images/henku-home.mp4'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <HeroMedia
      heroTitle='Conteúdo mais importante Em uma chamada aqui'
      heroInfo='Aqui um texto de apoio, descritivo que fortaleça o título e convide o
      usuário para navegar'
      heroBtnTitle='Fale com um especialista'
      slug='#contact'
      srcMedia={video}
    />
    <Container>
      <h1>Homepage</h1>
      <p>
        <Button
          slug='/about'
          buttonClass='buttonLight'
          buttonTitle='Teste de botão'
        >
          Teste de botão
        </Button>
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam aliquam
        quam commodi ea illo soluta natus voluptatem cupiditate, a ab fugiat
        minima alias placeat accusantium? Cupiditate, sapiente fugit. Veniam,
        commodi.
      </p>
    </Container>
  </Layout>
)

export default IndexPage
