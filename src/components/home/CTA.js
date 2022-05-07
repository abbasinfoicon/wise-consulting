import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <div className="rs-cta style2 pt-100 pb-100 md-pt-80 md-pb-80">
        <div className="cta-wrap text-center">
            <h2 className="title">Let's Start Your Next Project With Us</h2>
            <div className="btn-part">
                <Link className="readon" to="/contact">Contact Now</Link>
            </div>
        </div>
    </div>
  )
}

export default CTA