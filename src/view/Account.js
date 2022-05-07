import React from 'react'
import LoginSection from '../components/contact/LoginSection'
import RegisterSection from '../components/contact/RegisterSection'
import Breadcrumbs from '../lib/Breadcrumbs'

const Account = () => {
    return (
        <div className="main-content">
            <Breadcrumbs title="My Account" classbg="bg-8" bg_img={ 'assets/images/breadcrumbs/8.jpg' } />

            <div id="rs-my-account" className="rs-my-account pt-100 pb-100 md-pt-57 md-pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <RegisterSection />
                        </div>

                        <div className="col-lg-5 md-order-first md-mb-40">
                            <LoginSection />
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Account