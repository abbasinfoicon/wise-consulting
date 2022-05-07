import React from 'react'
import Freequote from '../components/about/Freequote'
import AllServices from '../components/services/AllServices'
import PlanPorject from '../components/services/PlanPorject'
import Breadcrumbs from '../lib/Breadcrumbs'
import TitleSec from '../lib/TitleSec'

const Services = () => {
    return (
        <div className="main-content">
            <Breadcrumbs title="Services" classbg="bg-2" bg_img={ 'assets/images/breadcrumbs/2.jpg' } />

            <div id="rs-services" className="rs-services style2 gray-bg2 pt-100 pb-70 md-pt-80 md-pb-50 sm-pt-72">
                <div className="container">
                    <TitleSec rightText="right-text" 
                    title="Premium Services" 
                    subtitle="Our Latest Services" 
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Duis at dictum risus, non suscip it arcu. Quisque aliquam posuere tortor aliquam posuere tortor develop database." />
                    
                    <AllServices />
                </div>
            </div>
            <PlanPorject />

            <Freequote bg="style1"/>

        </div>
    )
}

export default Services