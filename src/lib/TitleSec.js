import React from 'react'

const TitleSec = (props) => {
    return (
        <div className="sec-title mb-40">
            <div className="row">
                <div className={'col-lg-5 pl-40 lg-pl-15 md-mb-18 ' + props.rightText}>
                    <div className="sub-title red-color2">{props.title}</div>
                    <h2 className="title mb-0">{props.subtitle}</h2>
                </div>
                <div className="col-lg-7 pr-40 lg-pr-15">
                    <div className="desc big">{props.desc}</div>
                </div>
            </div>
        </div>
    )
}

export default TitleSec