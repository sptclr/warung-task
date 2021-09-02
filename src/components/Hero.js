import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

function Hero() {
  return (
    <div className="hero container">
      <div className="columns is-dek p-0">
        <div className="column is-half">
          <div className="logo">
            <StaticImage src="../images/odigo-logo-images.png" alt="Logo Odigo" />
          </div>

          <div className="group">
            <h1 className="title is-1 is-capitalized has-text-white mb-6">Discover Amazing Posts in Japan</h1>
            <div className="subtitle has-text-white">lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odit, in inventore voluptatem laudantium perspiciatis quo cupiditate esse dignissimos, provident quis, mollitia expedita tempore. Nisi necessitatibus numquam quas iusto optio?
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
