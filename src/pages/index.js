import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Free Libra Coin" keywords={[`libra`, `free libra`, `libra price`, `libra coin`, `calibra wallet`, `facebook coin`]} />
    <LandingBio />
  </Layout>
)

export default IndexPage
