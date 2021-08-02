import React from 'react'

import Seo from '../components/Seo'
import Layout from '../components/Layout'
import HeroMedia from '../components/HeroMedia'
import Heading from '../components/Heading'
import AltBoxes from '../components/AltBoxes'

import video from '../images/henku-data-science.mp4'

const DataSciencePage = () => (
  <Layout>
    <Seo title='Data Science' />
    <HeroMedia
      heroTitle='Data Science'
      heroInfo='Through Data Science, we help your company automatically extract knowledge and insights from various significant data sources. No matter what sector your company operates in or your company profile, to make correct and effective business decisions, it would be best if you relied on reliable forecasts and insights.'
      heroBtnTitle="Let's talk"
      slug='#contact'
      srcMedia={video}
    />
    <div className='gradientHenku inverse'>
      <div className='container verticalSpacer'>
        <div className='row'>
          <Heading
            headingTitle='Why Data Science?'
            headingInfo='Data science and analysis related to operations are to take advantage of the data collected to determine new opportunities for business improvement and operations optimization.'
          />
          <p className='highlightInfo'>
            Data mining and statistical analysis focus on applying statistics in
            exploratory data analysis and predictive models. Its purpose is to
            determine trends and patterns in data when using existing data
            sources. The main opportunities arising from implementing this
            technology include enabling entrepreneurs to take a business
            problem, turn it into a data issue, create predictive models that
            answer that question, and obtain detailed information about the
            results.
          </p>
        </div>
      </div>
    </div>
    <div className='container verticalSpacer'>
      <div className='row'>
        <Heading
          headingTitle='Data Science consulting'
          headingInfo='Data science solutions are finally accessible to businesses and businesses of all sizes. Today, any organization that wants to take advantage of its data can now leverage data science solutions to extract hidden insights. Data science consulting offers a unique opportunity for your team and business - a unique source of accurate, high-quality information.'
        />
        <AltBoxes AltBoxesId='data' />
      </div>
    </div>
  </Layout>
)

export default DataSciencePage
