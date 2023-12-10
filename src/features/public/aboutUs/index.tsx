import { IMBannerAboutUs } from 'assets'
import { AboutUs, Banner, RegisterPromotion } from 'components'
import React from 'react'
import { ThankCustomer } from './components'

const AboutUsPage = () => {
  return <div>
    <Banner title='Về chúng tôi' image={IMBannerAboutUs} />
    <AboutUs />
    <ThankCustomer />
    <RegisterPromotion />
  </div>
}

export default AboutUsPage
