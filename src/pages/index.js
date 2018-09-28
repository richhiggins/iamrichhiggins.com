import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image';
import Layout from '../components/layout'
import photo from "../images/rich-pic.jpg";

const IndexPage = props => (

  <Layout>

    <h1 class="h2">About me</h1>

    <p><div style={{float:'right',width:'40%',marginLeft:'.725rem'}}><Img fluid={props.data.imageOne.childImageSharp.fluid} /></div>

    I work with direct clients, leading agencies and large organisations helping deliver digital projects.</p>

  <p>On the front-end side of things I’m an advocate of the JAMstack approach to building websites, using software and services like React (GatsbyJS), Contentful, Algolia and Netlify.</p>

    <p>I also develop in PHP if that’s your bag, and have lots of experience working with WordPress and crafting custom applications with the CakePHP framework.</p>

    <p>You can drop me a line at <a href="mailto:hello@iamrichhiggins.com">hello@iamrichhiggins.com</a></p>
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "rich-pic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
