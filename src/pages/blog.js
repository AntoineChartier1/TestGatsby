// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const BlogPage = () => {
  return (

    <Layout pageTitle="my blog post">    
      <p>My cool post wil go in here</p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="blog page" />
// Step 3: Export your component
export default BlogPage