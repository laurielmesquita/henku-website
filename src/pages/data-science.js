import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import HeroMedia from '../components/HeroMedia'
import Heading from '../components/Heading'
import AltBoxes from '../components/AltBoxes'

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
    <div className='gradientHenku inverse'>
      <div className='container verticalSpacer'>
        <div className='row'>
          <Heading
            headingTitle='O que é o Data Science?'
            headingInfo='Aqui um texto que reforce a ideia sobre do título em uma linha'
          />
          <p className='highlightInfo'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et.
          </p>
        </div>
      </div>
    </div>
    <div className='container verticalSpacer'>
      <div className='row'>
        <Heading
          headingTitle='Benefícios do Data Science'
          headingInfo='Aqui um texto de apoio, descritivo que fortaleça o título e convide o usuário para navegar'
        />
        <AltBoxes AltBoxesId='data' />
      </div>
    </div>
  </Layout>
)

export default DataSciencePage
