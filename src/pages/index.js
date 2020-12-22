import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Container from '../components/Container'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Container>
      <h1>Olá Henku</h1>
    </Container>
  </Layout>
)

export default IndexPage
