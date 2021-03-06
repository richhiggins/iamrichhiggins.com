import React from 'react'
import { Link } from 'gatsby'
import logo from "./richies-logo.png";

const Header = ({ siteTitle }) => (
  <div>
  <div
    style={{
      borderBottom:'1px solid #a8a8a8'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '.725rem',
      }}
    >

      <div class="h1" style={{margin:'.5em 0'}}>Rich Higgins /<br />Web Consultancy &amp; Development /</div>
    </div>

  </div>
          <nav style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1em .725rem',
      }}>
          <ul style={{padding:0,margin:0}}>
            <li style={{display:'inline-block'}}><Link to="/">About me</Link> |&nbsp;</li>
            <li style={{display:'inline-block'}}><Link to="/recent-work">Recent work</Link> |&nbsp;</li>
            <li style={{display:'inline-block'}}><Link to="/contact">Contact</Link></li>
          </ul>
          </nav>
          </div>
)

export default Header
