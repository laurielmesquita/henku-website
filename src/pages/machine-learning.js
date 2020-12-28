import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import Container from '../components/Container'
import HeroMedia from '../components/HeroMedia'

import video from '../images/henku-machine-learning.mp4'

const MachineLearningPage = () => (
  <Layout>
    <SEO title='Machine Learning' />
    <HeroMedia
      heroTitle='Machine Learning'
      heroInfo='Subtítulo descritivo e elusivo sobre Machine Learning'
      heroBtnTitle='Fale com um especialista'
      slug='#contact'
      srcMedia={video}
    />
    <Container>
      <h1>Machine Learning</h1>
    </Container>
  </Layout>
)

export default MachineLearningPage
