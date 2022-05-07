import React from 'react'
import SocialLinks from './SocialLinks'

const CopyRight = () => {
  return (
    <div className="footer-bottom">
        <div className="row y-middle">
            <div className="col-lg-6 col-md-8 sm-mb-21">
                <div className="copyright">
                    <p>© Copyright 2022 Wise Consulting & Investments. All Rights Reserved.</p>
                </div>
            </div>
            <div className="col-lg-6 col-md-4 text-right sm-text-center">
                <div className="footer-social">
                    <SocialLinks />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CopyRight