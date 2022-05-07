import React from 'react'
import Loader from './Loader'
import SocialLinks from './SocialLinks'
import MenuHeader from './MenuHeader'

const Header = () => {
    return (
        <>
            <Loader />

            <div className="full-width-header">
                <div className="toolbar-area hidden-md">
                    <div className="container">
                        <div className="row y-middle">
                            <div className="col-md-5">
                                <div className="toolbar-contact">
                                    <ul>
                                        <li><i className="flaticon-email"></i><a href="mailto:DrWise@wiseconsultingandinvestments.com">DrWise@wiseconsultingandinvestments.com</a></li>
                                        <li><i className="flaticon-call"></i><a href="tel:702-513-3882">702-513-3882</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="toolbar-sl-share d-flex justify-content-end">
                                    <SocialLinks />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <MenuHeader />
            </div>
        </>
    )
}

export default Header