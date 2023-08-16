import React from 'react'
import Layout from '../components/Layout'
import HeroContact from '../components/sections/contact-us/HeroContact'
import Map from '../components/sections/contact-us/Map'
import ContactSection from '../components/sections/contact-us/ContactSection'
import CtaContact from '../components/sections/contact-us/CtaContact'
import Client from '../components/Client'
import Form from '../components/sections/contact-us/Form'

const Contact = () => {
  return (
    <Layout>
      <HeroContact />
      <Map />
      <ContactSection />
      <CtaContact />
      <Client />
      <Form />
    </Layout>
  )
}

export default Contact