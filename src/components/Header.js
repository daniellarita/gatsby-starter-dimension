import React from 'react'
import PropTypes from 'prop-types'

import hummingbird from '../images/hummingbird.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
        {/* TODO: make the margin responsive */}
            <img style={{borderRadius: '50%', marginTop: '18px'}} src={hummingbird} alt="" height="50" width="50" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Gray Hummingbird</h1>
                <p>Come to us for all of your tech needs. Advice. Websites. Fun. We do it all.</p>
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
