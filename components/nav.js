import React from 'react'
import Link from 'next/link'

const links = [
  {href: '/quotes', label: 'Ron Swanson Quotes'},
  {href: '/contact', label: 'Contact'}
  ].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
          background: #A9A9A9
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-around;
      }
      nav > ul {
        padding: 0px 0px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: black;
        text-decoration: none;
        font-size: 18px;
        text-shadow: .75px .75px black;
        font-weight: bold;
      }
    `}</style>
  </nav>
)

export default Nav
