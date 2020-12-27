import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Container from '../components/Container'
import HeroMedia from '../components/HeroMedia'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <HeroMedia />
    <Container>
      <h1>Homepage</h1>
    </Container>
  </Layout>
)

export default IndexPage
