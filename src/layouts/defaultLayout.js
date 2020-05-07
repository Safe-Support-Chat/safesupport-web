/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import nomadicLogo from "../images/nl-logo.png"
import "../styles/layout.css"
import "../styles/main.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryDocs {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 2rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer>
        <div className="d-flex">
          Created by&nbsp;<a href="https://www.nomadiclabs.ca" target="_blank" rel="noopener noreferrer">Nomadic Labs</a>
          <img src={nomadicLogo} alt="" className="logo" />
        </div>
        <div>
          If you have any questions, issues, or feedback please contact us at <a href="mailto:feedback@safesupport.chat">feedback@safesupport.chat</a>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
