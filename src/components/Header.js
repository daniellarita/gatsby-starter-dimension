import React from 'react'
import PropTypes from 'prop-types'

import hummingbird from '../images/hummingbird_image_whitespace.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <img
            style={{
                borderRadius: '50%',
            }}
            src={hummingbird}
            alt=""
            height="75"
            width="75" />
        <div className="content">
            <div className="inner">
                <h1>Gray Hummingbird</h1>
                <p>Come to us for all of your tech needs. Advice. Websites. Interesting conversations. We can help.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
