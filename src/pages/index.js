import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/homeLayout"
import SEO from "../components/seo"
import introImage from "../images/intro.jpg"
import chatboxImage from "../images/chatbox.jpg"
import riotImage from "../images/riot.jpg"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section id="intro">
      <header>
        <h1>Safe Support Chat</h1>
        <p>A secure and private chat service created for the Ontario Coalition of Rape Crisis Centres</p>
      </header>
      <div className="content">
        <div className="image">
          <img src={introImage} alt="Woman sitting at a table looking at her cell phone" />
        </div>
        <div className="image-caption"><small>Photo by Kev Costello on Unsplash</small></div>
      </div>
    </section>

    <section id="about">
      <header>
        <h2>About</h2>
      </header>
      <div className="content">
        <h3>Secure online support for survivors of sexual violence</h3>
        <p>
          Safe Support Chat is a private chat and text app designed specifically for the {' '}
          <a href="https://sexualassaultsupport.ca/">
            Ontario Coalition of Rape Crisis Centres (OCRCC)
          </a>{' '}and their 30 member centres.
        </p>
        <p>
          Informed by support seekers and frontline workers from
          sexual assault centres, this real time messaging chat service offers secure online
          support to survivors of sexual violence and harassment.
        </p>
      </div>
    </section>

    <section id="features">
      <header>
        <h2>Features</h2>
      </header>
      <div className="content">
        <ul>
          <li>
            <h3>Anonymous and secure communication</h3>
            <p>Using the open source, decentralized communication platform, <a href="https://matrix.org/">Matrix</a>, Safe Support Chat provides anonymous and end-to-end encrypted communication</p>
          </li>
          <li>
            <h3>Data privacy</h3>
            <p>Sexual assault centres maintain complete control over their own chat services and any data related to them.</p>
          </li>
          <li>
            <h3>Highly customizeable</h3>
            <p>Centres can configure many aspects of the chat service according to their preferences, such as the automated messaging, appearance, and availability schedule.</p>
          </li>
          <li>
            <h3>Accessible via web or SMS</h3>
            <p>Survivors can access the chat support service through an embedded chatbox on the sexual assault centre's website or via SMS messaging.</p>
          </li>
        </ul>
      </div>
    </section>

    <section id="acknowledgements">
      <header>
        <h2>Acknowledgements</h2>
      </header>
      <div className="content">
        <p>Safe Support Chat was developed and tested by a broad group of people committed to expanding access to sexual assault support including the core Project Team of <a href="https://primalglow.ca/">PRIMAL GLOW Communications</a>, <a href="https://www.nomadiclabs.ca/">Nomadic Labs</a> and Brent Edwards Consulting.</p>
        <p>The creation of Safe Support Chat has been funded through the “Using Technology to Better Support Survivors: Innovation in Frontline Settings” Innovation Fund Project through the <a href="https://www.ontario.ca/page/womens-issues">Ministry of Community and Social Services, Office of Women’s Issues.</a></p>
      </div>
    </section>

    <section id="contact">
      <header>
        <h2>Contact</h2>
      </header>
      <div className="content">
        <p>If you have any questions, issues, or feedback please contact us at <a href="mailto:feedback@safesupport.chat">feedback@safesupport.chat</a></p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
