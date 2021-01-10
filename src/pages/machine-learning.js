import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import Container from '../components/Container'
import HeroMedia from '../components/HeroMedia'
import Heading from '../components/Heading'
import AltBoxes from '../components/AltBoxes'

import video from '../images/henku-machine-learning.mp4'

const MachineLearningPage = () => (
  <Layout>
    <SEO title='Machine Learning' />
    <HeroMedia
      heroTitle='Machine Learning'
      heroInfo='Aqui um texto de apoio, descritivo que fortaleça o título e convide o usuário para navegar.'
      heroBtnTitle='Fale com um especialista'
      slug='#contact'
      srcMedia={video}
    />
    <div className='gradientHenku inverse'>
      <Container nameOfClass='verticalSpacer'>
        <Heading
          headingTitle='O que é o Machine Learning?'
          headingInfo='Aqui um texto que reforce a ideia sobre do título em uma linha'
        />
        <p className='highlightInfo'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.
        </p>
      </Container>
    </div>
    <Container nameOfClass='verticalSpacer'>
      <Heading
        headingTitle='Benefícios do Machine Learning'
        headingInfo='Aqui um texto que reforce a ideia sobre do título em uma linha'
      />
      <AltBoxes />
    </Container>
  </Layout>
)

export default MachineLearningPage
