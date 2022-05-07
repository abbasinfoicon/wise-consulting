import React from 'react'

const Newsletter = () => {
  return (
    <div className="footer-newsletter red-bg2">
        <div className="container">
            <div className="row y-middle">
                <div className="col-md-6 sm-mb-26 pl-50 lg-pl-15">
                    <h3 className="title mb-0 white-color">Newsletter Subscribe</h3>
                </div>
                <div className="col-md-6 pr-50 lg-pr-15">
                    <form className="newsletter-form">
                        <input type="email" name="email" placeholder="Your email address" required=""/>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter