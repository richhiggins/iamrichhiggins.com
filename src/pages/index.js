import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import photo from "../images/rich-pic.jpg";

const IndexPage = () => (

  <Layout>

    <h1>About me</h1>

    <p><img src={photo} alt="Photograph of Rich" style={{float:'right',width:'33.3333%',margin:'0 0 1em 1em'}} />I’m Rich, a consultant web developer based in Manchester, England.</p>

    <p>I work with direct clients, leading agencies and large organisations helping deliver digital projects.</p>

    <p>On the front-end side of things I’m an advocate of the JAMstack approach to building websites, using software and services like Jekyll, GatsbyJS, Contentful, Algolia and Netlify.</p>

    <p>I also develop in PHP if that’s your bag, and have lots of experience working with WordPress and crafting custom applications with the CakePHP framework.</p>

    <p>You can drop me a line at <a href="mailto:hello@iamrichhiggins.com">hello@iamrichhiggins.com</a></p>
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
