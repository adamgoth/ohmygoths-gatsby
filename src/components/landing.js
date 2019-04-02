import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import Post from "./post"

import "./landing.scss"

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          me: file(relativePath: { eq: "ohmygoths_logo_dark.png" }) {
            childImageSharp {
              fixed(width: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => (
        <React.Fragment>
          <div className="Landing">
            <Img
              className="Landing-image"
              critical={true}
              fadeIn={false}
              fixed={data.me.childImageSharp.fixed}
            />
            <p className="Landing-desc">home &amp; adventure</p>
          </div>
          <div className="Landing-postContainer">
            <Post />
          </div>
        </React.Fragment>
      )}
    />
  )
}
