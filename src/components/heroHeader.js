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
        <Link to='https://recycle.verde-tl.com' className="button -primary">Recycle and Community Project &rarr;</Link>
        <Link to='https://marketinng.verde-tl.com' className="button -primary">Marketing Project &rarr;</Link>
        <Link to='https://app.verde-tl.com' className="button -primary">Marketinng App &rarr;</Link>
        <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
      </div>
    )}
  />
)