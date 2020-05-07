import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layouts/defaultLayout"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
    <SEO title={frontmatter.title} />
      <div className="docs-page">
        <h1>{frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="show-on-mobile toc">
          <h3>Table of Contents</h3>
          <ul className="horizontal">
            <li><Link to={'/getting-started'}>Getting Started</Link></li>
            <li><Link to={'/using-the-support-chat'}>Using the Chat</Link></li>
            <li><Link to={'/customizing-your-account'}>Account Customization</Link></li>
            <li><Link to={'/encryption'}>Encryption</Link></li>
            <li><Link to={'/troubleshooting'}>Troubleshooting</Link></li>
            <li><Link to={'/platform-customization'}>Platform Customization</Link></li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`