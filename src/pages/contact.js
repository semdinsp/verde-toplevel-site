import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Get in Touch</h1>
          <p>Contact us to work with us further in our various projects especially recyclinng and marketing services.  We are always looking to explore partnerships. &rarr;</p>
        </div>
        <div>
          <form className="form-container" name="contact" data-netlify="true" method="POST">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name"/>
            </div>
            <div>
              <label htmlFor="sender">Email</label>
              <input type="email" name="sender" id="sender"/>
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" id="subject"/>
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <button type="submit" className="button -primary" style={{marginRight: 0}}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`