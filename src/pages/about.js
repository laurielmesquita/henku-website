import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import Container from '../components/Container'
import HeroMedia from '../components/HeroMedia'
import Heading from '../components/Heading'
import ThreeColumnsGrid from '../components/ThreeColumnsGrid'

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
    <div className='gradientHenku inverse'>
      <Container nameOfClass='verticalSpacer'>
        <Heading
          headingTitle='Saiba um pouco sobre a nossa história'
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
        headingTitle='Nossos valores'
        headingInfo='Aqui um texto de apoio, descritivo que fortaleça o título e convide o usuário para navegar'
      />
      <ThreeColumnsGrid contentId='about' />
    </Container>
  </Layout>
)

export default AboutPage
