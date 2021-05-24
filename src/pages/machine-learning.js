import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import HeroMedia from '../components/HeroMedia'
import Heading from '../components/Heading'
import AltBoxes from '../components/AltBoxes'

import video from '../images/henku-machine-learning.mp4'

const MachineLearningPage = () => (
  <Layout>
    <SEO title='Machine Learning' />
    <HeroMedia
      heroTitle='Machine Learning'
      heroInfo="We produce reliable data analysis reports using ML techniques to process the data and determine which sets will be crucial in your business's success"
      heroBtnTitle="Let's talk"
      slug='#contact'
      srcMedia={video}
    />
    <div className='gradientHenku inverse'>
      <div className='container verticalSpacer'>
        <div className='row'>
          <Heading
            headingTitle='What is Machine Learning?'
            headingInfo='Machine learning (ML) enables computers to “think” and learn like humans, basing their conclusions and future predictions on historical data analysis and real-time data'
          />
          <p className='highlightInfo'>
            It is a rapidly developing technology that impacts almost every aspect of a business.
	    Machine learning consulting opens up several new opportunities for your company.
	    You can: personalize customer service, automate processes, implement solutions that will change the way customers interact with your product.
          </p>
        </div>
      </div>
    </div>
    <div className='container verticalSpacer'>
      <div className='row'>
        <Heading
          headingTitle='Machine Learning Consulting'
          headingInfo='We will help you enter the data-driven world and modernize your existing business analysis systems. We will help you extract insight from the collected data and turn it into profits and insights.'
        />
        <AltBoxes AltBoxesId='machine' />
      </div>
    </div>
  </Layout>
)

export default MachineLearningPage
