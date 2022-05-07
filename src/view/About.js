import React from 'react'
import { Link } from 'react-router-dom'
import Counter from '../components/about/Counter'
import Freequote from '../components/about/Freequote'
import Team from '../components/about/Team'
import Breadcrumbs from '../lib/Breadcrumbs'
import { useParams, useLocation, useState } from 'react-router-dom'


const About = () => {
  const location = useLocation();
  // console.log(location);
  return (
    <div className="main-content">

      <Breadcrumbs title="About" classbg="bg-1" bg_img={'assets/images/breadcrumbs/1.jpg'} />

      <div className="rs-about inner pt-100 lg-pt-92 md-pt-80 pb-100 md-pb-80">
        <div className="container">
          <div className="row y-middle mb-64 lg-mb-30 md-mb-0">
            <div className="col-lg-6 md-mb-95">
              <div className="image-part">
                <img src="assets/images/about/inner/1.png" alt="" />
                <div className="author-info">
                  <h3 className="name">David Wise</h3>
                  <span className="designation">CEO & Founder</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 pl-50 md-pl-15 pr-50 lg-pr-15">
              <div className="sec-title mb-25">
                <div className="sub-title primary">About</div>
                <h2 className="title mb-18">We Provides Best Advice For Your Business</h2>
                <div className="desc">Reobiz donec pulvinar magna id leoersi pellentesque impered dignissim rhoncus euismod euismod eros vitae.</div>
              </div>
              <ul className="listing-style2 mb-33">
                <li>lorem ipsum te dolor emit te dolor ipsum .</li>
                <li>lorem ipsum te dolor emit te dolor ipsum .</li>
                <li>lorem ipsum te dolor emit te dolor ipsum .</li>
                <li>lorem ipsum te dolor emit te dolor ipsum .</li>
                <li>lorem ipsum te dolor emit te dolor ipsum .</li>
              </ul>
              <div className="btn-part">
                <Link className="readon" to="/contact">Get in Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Counter />

      <Team />

      <Freequote bg="style1" />

    </div>
  )
}

export default About