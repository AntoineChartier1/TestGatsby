import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'



const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`)

  // je sauve netlify

  return (
    <div className={container} >
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <meta name="description" content="Your description" />
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link className={navLinkText} to="/">Home</Link></li>
          <li className={navLinkItem}><Link className={navLinkText} to="/about">About</Link></li>
          <li className={navLinkItem}><Link className={navLinkText} to="/blogs/">blog</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading} >{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}


export default Layout