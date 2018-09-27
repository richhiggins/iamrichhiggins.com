import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import linkIcon from "../images/noun_link_1797965.svg";
import prototype from "../images/search-course-pages-720p.mp4";
import idmlScript from "../images/gathercontent-idml-720p.mp4";

const RecentWorkPage = () => (
  <Layout>

    <h1>Recent work</h1>

    <h2 id="bristol"><a href="#bristol" style={{textDecoration:'none'}}>University of Bristol <img src={linkIcon} style={{height:'1em',verticalAlign:'middle',margin:0}}/></a></h2>
    <p>I’ve been working with The University of Bristol, helping develop a new digital publishing technical strategy.</p>
    <p>We have been using a JamStack architecture to prototype new approaches for digital publishing. The stack includes GatsbyJS, Contentful, GatherContent, Netlify and Algolia search.</p>

    <figure>
    <video controls style={{maxWidth:'100%'}}>
      <source type="video/mp4" src={prototype} />
    </video>
    <figcaption style={{textAlign:'center',fontSize:'16px',margin:0}}>GatsbyJS prototype fetching search results from Algolia and displaying a Contentful powered course page.</figcaption>
    </figure>

    <p>This has involved writing transformation scripts in NodeJS to read from and write to the various APIs involved in the stack. I also prototyped an approach to automating the production of Adobe InDesign files.</p>

    <figure>
      <video controls style={{maxWidth:'100%'}}>
        <source type="video/mp4" src={idmlScript} />
      </video>
    <figcaption style={{textAlign:'center',fontSize:'16px',margin:0}}>NodeJS script fetching entries from GatherContent and dynamically creating Adobe InDesign files.</figcaption>
    </figure>
    <hr style={{margin:'3em 0'}}/>

    <h2 id="co-op"><a href="#co-op" style={{textDecoration:'none'}}>Co-op Digital Team <img src={linkIcon} style={{height:'1em',verticalAlign:'middle',margin:0}}/></a></h2>
  <p>Between February 2016 and June 2018, I worked with Co-op Digital, helping overhaul their digital publishing service. </p>
    <p>We worked in a GDS structure agile cross-functional team and iteratively developed a highly performant, decoupled publishing platform which now underpins several of their live websites.</p>
    <p>Tech-wise we built progressivly enhanced web front-ends onto a Python/Django application powered by Contentful and deployed to AWS.</p>
    <hr style={{margin:'3em 0'}}/>

    <h2 id="vitesse"><a href="#vitesse" style={{textDecoration:'none'}}>Vitesse Global Payments <img src={linkIcon} style={{height:'1em',verticalAlign:'middle',margin:0}}/></a></h2>
    <p>Working alongside <a href="https://twitter.com/KatieBaxie">Katie Baxendale</a> and <a href="https://twitter.com/ruthersish">Graeme Rutherford</a> we designed, developed and delivered a new website for the global payments startup <a href="https://vitessepsp.com/">Vitesse</a>.</p>
    <p>Infrequent content changes were anticipated so I opted to use Jekyll, creating a static site which could be quickly and easily deployed to Azure.</p>
    <p>The site features some bespoke HTML5 video work and CSS/JavaScript based animations.</p>
  </Layout>
)

export default RecentWorkPage
