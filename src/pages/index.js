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
        <p>A secure and private chat service</p>
        <div className="align-btn">
          <Link to="getting-started" className="btn">Starter Guide</Link>
        </div>
      </header>
      <div className="content">
        <div className="image">
          <img src={introImage} alt="Woman sitting at a table looking at her cell phone" />
        </div>
        <div className="image-caption"><small>Photo by Kev Costello on Unsplash</small></div>
      </div>
    </section>

    <section id="platform">
      <header>
        <h2>Messaging Platform</h2>
      </header>
      <div className="content">
        <p><strong>Safe Support Chat</strong> is a chat app that crisis centres use to respond to online real-time support requests.</p>
        <p>The messaging platform is built using the <a href="https://matrix.org/" target="_blank" rel="noopener noreferrer">Matrix protocol</a> for secure, decentalized, instant messaging. The main messaging platform is a custom implementation of the <a href="https://about.riot.im/" target="_blank" rel="noopener noreferrer">Riot chat app</a>. It is a fully featured chat app that can be white-labelled for the host organization.</p>
        <div className="image">
          <img src={riotImage} alt="Screenshot of the messaging platform for facilitators" />
        </div>
      </div>
    </section>

    <section id="chatbox">
      <header>
        <h2>Embeddable Chatbox</h2>
      </header>
      <div className="content">
        <p><strong>The embeddable chatbox</strong> is what support seekers use to access the crisis centre's services via chat from the centre's website.</p>
        <p>The chatbox is anonymous, private, and secure. It uses end-to-end encryption when available and does not collect or save any data about the support seeker or the conversation.</p>
        <div className="image sm">
          <img src={chatboxImage} alt="Screenshot of the embedded chatbox with a short text conversation in the chat window" />
        </div>
        <p><strong>A bookmarklet</strong> is a special link that you can bookmark which will then add the chatbox to any website when clicked. To use it, make sure your bookmarks bar is visible, then drag the link below to your bookmarks bar. Then go to a new page and click on the bookmark. You should see the chatbox appear on the page.</p>
        <p><a id="bookmarklet" className="btn">Bookmarklet</a></p>
      </div>
    </section>

    <section id="docs">
      <header>
        <h2>Starter Guide & User Manual</h2>
      </header>
      <div className="content">
        <p>We have developed a <strong>Starter Guide</strong> presentation for crisis centre staff and volunteers using the Safe Support Chat.</p>
        <div className="iframe-container">
          <iframe title="Safe Support Chat Starter Guide" src="https://docs.google.com/presentation/d/e/2PACX-1vR-ZRIZFhgPsipxzEjkNEv6AvvmiOay9EtcpxhrSE64TCr7aBuQ7rnyYNboh-mcaQsdPtHTffATXI9A/embed?start=false&loop=false&delayms=5000" frameBorder="0" width="480" height="299" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </div>
        <p>For reference, the information in the Starter Guide comes from the user manual, which is accessible on this website. The table of contents is below:</p>
        <ul>
          <li><Link to={'/getting-started'}>Getting Started</Link></li>
          <li><Link to={'/using-the-support-chat'}>Using the Support Chat</Link></li>
          <li><Link to={'/customizing-your-account'}>Customizing your Account</Link></li>
          <li><Link to={'/encryption'}>Encryption</Link></li>
          <li><Link to={'/troubleshooting'}>Troubleshooting</Link></li>
          <li><Link to={'/platoform-customization'}>Platform Customization (for Admin)</Link></li>
        </ul>
      </div>
    </section>

    <section id="contact">
      <header>
        <h2>Contact</h2>
      </header>
      <div className="content">
        <Footer />
      </div>
    </section>
  </Layout>
)

export default IndexPage
