import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

function Boxed() {
  return (
    <section className="box container boxed">
      <div className="wrapper-box">
        <h2 className="title mb-6">Benefits of Odigo</h2>
        <div className="columns">
          <div className="column">
            <div className="logo">
                <StaticImage src="../images/benefit-icon-01.png" alt="Logo Odigo" className="mb-3" />
                <p className="my-3">Welcome to Odigo</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem culpa obcaecati esse sint mollitia id hic distinctio reiciendis!</p>
            </div>
          </div>
          <div className="column">
            <div className="logo">
                <StaticImage src="../images/benefit-icon-02.png" alt="Logo Odigo" className="mb-3" />
                <p className="my-3">Welcome to Odigo</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem culpa obcaecati esse sint mollitia id hic distinctio reiciendis!</p>
            </div>
          </div>
          <div className="column">
            <div className="logo">
                <StaticImage src="../images/benefit-icon-03.png" alt="Logo Odigo" className="mb-3" />
                <p className="my-3">Welcome to Odigo</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem culpa obcaecati esse sint mollitia id hic distinctio reiciendis!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Boxed
