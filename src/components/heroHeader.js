import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div 
          className="primary-content" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
        />
        <a href='https://recycle.verde-tl.com' className="button -primary">Recycle and Community Project &rarr;</a>
        <a href='https://marketing.verde-tl.com' className="button -primary">Marketing Project &rarr;</a>
        <a href='https://app.verde-tl.com' className="button -primary">Marketing App &rarr;</a>
        <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
      </div>
    )}
  />
)