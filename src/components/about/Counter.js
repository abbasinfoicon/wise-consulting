import React from 'react'
import CounterUp from '../../lib/CounterUp'

const Counter = () => {
    return (
        <div className="rs-counter style1 modify bg21 pt-92 pb-100 md-pt-72 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-52 md-mb-29">
                    <div className="sub-title white-color">Fun Facts</div>
                    <h2 className="title mb-0 white-color">Facts For Choosing Us</h2>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
                        <div className="couter-part thousand">
                            <CounterUp end={100} start={0} timer={50} />
                            <h5 className="title">Happy Clients</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
                        <div className="couter-part plus">
                            <CounterUp end={260} />
                            <h5 className="title">Projects Done</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 xs-mb-30">
                        <div className="couter-part plus">
                            <CounterUp end={60} />
                            <h5 className="title">Expert People</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="couter-part thousand">
                            <CounterUp end={230} />
                            <h5 className="title">Portfolios</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter