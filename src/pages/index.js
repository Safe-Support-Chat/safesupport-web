import React from "react"
import Slider from "react-slick";

import Layout from "../layouts/homeLayout"
import SEO from "../components/seo"
import introImage from "../images/intro.jpg"
import image1 from "../images/chatbox-screenshot.png"
import image2 from "../images/sms-demo.png"
import image3 from "../images/chatbox-demo.gif"
import image4 from "../images/facilitator-chat.png"
import image5 from "../images/facilitator-invites.png"
import image6 from "../images/facilitator-sms-chat.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
};

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
            <h3>Private and secure communication</h3>
            <p>Using the open source, decentralized communication platform, <a href="https://matrix.org/">Matrix</a>, Safe Support Chat provides anonymous and end-to-end encrypted communication.</p>
          </li>
          <li>
            <h3>Data autonomy</h3>
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

    <div id="demo">
      <Slider {...settings}>
        <div>
          <div className="image-slide">
            <img src={image1} alt="Screenshot of the embedded Safe Support chatbox" />
          </div>
        </div>

        <div>
          <div className="image-slide">
            <img src={image2} alt="Mockup of an SMS chat conversation" />
          </div>
        </div>

        <div>
          <div className="image-slide">
            <img src={image3} alt="Animated GIF of the embedded chatbox as a chat session is initiated" />
          </div>
        </div>

        <div>
          <div className="image-slide">
            <img src={image4} alt="Screenshot of the facilitator's view of a chat session from the embedded chatbox" />
          </div>
        </div>

        <div>
          <div className="image-slide">
            <img src={image5} alt="Screenshot of the facilitators' chat invitations" />
          </div>
        </div>

        <div>
          <div className="image-slide">
            <img src={image6} alt="Screenshot of the facilitator's view of a chat session from SMS" />
          </div>
        </div>
      </Slider>
    </div>

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
