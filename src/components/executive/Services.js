import React from 'react'

const Services = (props) => {
    return (
        <>
            <div className="col-lg-3 col-sm-6 mb-16">
                <div className="service-wrap">
                    <div className="icon-part">
                        <img src={props.img} alt="" />
                    </div>
                    <div className="content-part">
                        <h5 className="title"><a href="#">{props.title}</a></h5>
                        <div className="desc">{props.des}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services