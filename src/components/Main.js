import React from 'react'
import PropTypes from 'prop-types'

import blueHummingbird from '../images/blue_hummingbird.jpg'
import greenHummingbird from '../images/green_hummingbird.png'
import danni from '../images/danni_blue_hat.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <p>Hummingbirds are the smallest bird, but they are also the fastest birds and can fly at speeds of 60 mph (faster than a fighter jet!) and migrate 3,000 miles across the World. They are also so beautiful. </p>
          <p>I am inspired by the beauty and power of such a small being. I want to help those that may feel underrepresented in tech spaces, especially women and artists.</p>
          <span className="image main"><img src={blueHummingbird} alt="" /></span>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <p>I can help you build a website, come up with a powerful UX design and answer any other questions you may have.</p>
          <span className="image main"><img src={greenHummingbird} alt="" /></span>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <p>Hi! I have 3 years of experience working as a fullstack engineer at a fast growing startup. I worked at WeWork from 2015 until 2019 as the tech team grew from 40 to about 500. I have also worked as a Product Manager and closely with design during my time at WeWork.</p>
          <p>I am especially passionate about helping women and artists, as I know how challenging navigating the tech space can be. Let me know if you have any questions or projects and would like to work together!</p>
          <span className="image main"><img src={danni} alt="" /></span>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form
            action="https://formspree.io/grayhummingbirdtech@gmail.com"
            method="POST"
          >
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" onClick={() => {this.props.onCloseArticle()}} />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://twitter.com/grayhummingbird" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/grayhummingbirdtech/" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/grayhummingbirdtech/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/dannibaxter" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main