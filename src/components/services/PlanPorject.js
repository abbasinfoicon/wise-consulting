import React from 'react'
import { Link } from 'react-router-dom'

const PlanPorject = () => {
    return (
        <div className="rs-cta bg21 pt-90 pb-100 md-pt-68 md-pb-80">
            <div className="container">
                <div className="sec-title text-center">
                    <div className="sub-title modify white">Any plan to start a project</div>
                    <h2 className="title3 white-color">Our Experts always ready to work <br /> with you.</h2>
                    <div className="btn-part">
                        <Link className="readon banner-style" to="/contact">Get started</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanPorject