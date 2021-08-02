import React from 'react'

import Seo from '../components/Seo'
import Layout from '../components/Layout'
import HeroMedia from '../components/HeroMedia'
import Heading from '../components/Heading'

import video from '../images/henku-about.mp4'

const AboutPage = () => (
  <Layout>
    <Seo title='About' />
    <HeroMedia
      heroTitle='Henku'
      heroInfo='We are an intelligent consultancy with an efficient team in Machine Learning and Data Science. We develop Machine Learning, Data Engineering, and Business Intelligence solutions for companies and high-tech companies worldwide.'
      heroBtnTitle="Let's talk"
      slug='#contact'
      srcMedia={video}
    />
    <div className='gradientHenku inverse'>
      <div className='container verticalSpacer'>
        <div className='row'>
          <Heading
            headingTitle='Create machine learning and Big Data solutions with us'
            headingInfo='Here we focus on finding customized business solutions using machine learning and data science-oriented technologies.'
          />
          <p className='highlightInfo'>
            Our customers benefit from our team that develops practical tools
            that cooperate seamlessly with existing software. We build our
            solutions based on innovative technologies. We ensure that our
            products increase your company's results not only now, but also in
            the future, as it adapts to changes.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
