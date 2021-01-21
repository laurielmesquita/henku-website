import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
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
      heroTitle='Conteúdo mais importante aqui'
      heroInfo='Aqui um texto de apoio, descritivo que fortaleça o título e convide o
      usuário para navegar'
      heroBtnTitle='Fale com um especialista'
      slug='#contact'
      srcMedia={video}
    />
    <div className='container verticalSpacer'>
      <div className='row'>
        <Heading
          headingTitle='Um título sobre os dois serviços aqui'
          headingInfo='Aqui um texto que reforce a ideia sobre os dois serviços ambiguamente'
        />
        <DarkBox />
      </div>
    </div>
    <div className='gradientHenku'>
      <div className='container verticalSpacer'>
        <div className='row'>
          <Heading
            headingTitle='Conteúdo de relevância secundária'
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
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
