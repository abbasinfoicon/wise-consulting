import React from 'react'
import About from '../components/executive/About'
import Collaboration from '../components/executive/Collaboration'
import Consultants from '../components/executive/Consultants'
import Project from '../components/executive/Project'
import Services from '../components/executive/Services'
import Breadcrumbs from '../lib/Breadcrumbs'

const ExecutiveLeadership = () => {
    return (
        <>
            <Breadcrumbs title="Executive Leadership" classbg="bg-3" bg_img={'assets/images/breadcrumbs/3.jpg'} />

            <About />

            <div className="rs-services style1 pt-100 pb-84 md-pt-80 md-pb-64">
                <div className="container">
                    <div className="row gutter-16">
                        <Services img="assets/images/services/icons/1.png" title="Solution Focused" des="lorem ipsum te dolor emit te dolor emit de ipsum lorem ipsum te dolor emit te dolor !" />
                        <Services img="assets/images/services/icons/2.png" title="Customer Oriented" des="Cras enim urna, interdum nec porttitor vitae, sollicitudin eu ipsum te eros."/>
                        <Services img="assets/images/services/icons/3.png" title="99.99% Success" des="Sed scelerisque, odio eu tempor pulvinar, lorem ipsum te magna tortor finibus"/>
                        <Services img="assets/images/services/icons/4.png" title="Decision Maker" des="Nam libero tempore, cum soluta nobis est eligendi optio cumque"/>
                    </div>
                </div>
            </div>

            <Consultants />

            <Collaboration />

            <div id="rs-project" className="rs-project style4 pt-100 pb-100 md-pt-70 md-pb-70">
                <div className="container">
                    <div className="row md-mb-20">
                        <div className="col-lg-6">
                            <div className="sec-title3 md-center mb-40 md-mb-20">
                                <span className="sub-title">~ <span className="title-upper">Our Projects</span> ~</span>
                                <h2 className="title">Our Latest Case Studies</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 text-right md-center pt-15 md-pt-0">
                            <div className="btn-part mb-40 md-mb-20">
                                <a className="readon2 get-new" href="about.html">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <Project />
            </div>
        </>
    )
}

export default ExecutiveLeadership