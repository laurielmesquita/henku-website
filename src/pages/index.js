import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Container from '../components/Container'
import HeroMedia from '../components/HeroMedia'
import Heading from '../components/Heading'
import video from '../images/henku-home.mp4'
import DarkBox from '../components/DarkBox'
import ThreeColumnsGrid from '../components/ThreeColumnsGrid'
import Button from '../components/Button'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <HeroMedia
      heroTitle='Conteúdo mais importante em uma chamada aqui'
      heroInfo='Aqui um texto de apoio, descritivo que fortaleça o título e convide o
      usuário para navegar'
      heroBtnTitle='Fale com um especialista'
      slug='#contact'
      srcMedia={video}
    />
    <Container nameOfClass='verticalSpacer'>
      <Heading
        headingTitle='Um título que menciona rapidamente os dois serviços em duas linhas'
        headingInfo='Aqui um texto que reforce a ideia sobre os dois serviços ambiguamente'
      />
      <DarkBox />
    </Container>
    <div className='gradientHenku'>
      <Container nameOfClass='verticalSpacer'>
        <Heading
          headingTitle='Conteúdo de relevância secundária aqui'
          headingInfo='Aqui um texto de apoio, descritivo que fortaleça o título e convide o usuário para navegar'
        />
        <ThreeColumnsGrid contentId='home' />
        <p className='textCenter mgTop-100'>
          <Button
            slug='/about'
            buttonClass='buttonLight'
            buttonTitle='Saiba mais sobre a Henku'
          >
            Saiba mais sobre a Henku
          </Button>
        </p>
      </Container>
    </div>
  </Layout>
)

export default IndexPage
