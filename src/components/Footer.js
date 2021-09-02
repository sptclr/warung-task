import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrap container has-text-centered">
        <StaticImage src="../images/odigo-logo-images.png" alt="Logo Odigo" />
      </div>
    </footer>
  )
}

export default Footer
