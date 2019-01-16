import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">
            &copy; Gatsby Starter - Dimension. Design: <a href="https://html5up.net">HTML5 UP</a>
        </p>
        <p className="copyright">
            Icons made by <a href="https://www.freepik.com/">Freepik</a> from <a href="https://www.flaticon.com/">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/">CC 3.0</a>
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
