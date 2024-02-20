// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (

    <Layout pageTitle="home page">
      
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage src="https://petkeen.com/wp-content/uploads/2021/05/grey-american-shorthair-cat_Cat-Box_Shutterstock.jpg" alt="A cat" />
      <StaticImage src="../images/chat.jpg" alt="A cat" />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home page" />
// Step 3: Export your component
export default IndexPage