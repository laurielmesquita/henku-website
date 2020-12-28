import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Container from '../components/Container'
import HeroMedia from '../components/HeroMedia'
import Button from '../components/Button'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <HeroMedia />
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
    </Container>
  </Layout>
)

export default IndexPage
