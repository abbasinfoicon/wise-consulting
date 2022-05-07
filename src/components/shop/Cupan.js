import React from 'react'

const Cupan = () => {
    return (
        <div className="coupon-toggle">
            <div id="accordion" className="accordion">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <div className="card-title">
                            <span><i className="fa fa-window-maximize"></i> Have a coupon?</span>
                            <button className="accordion-toggle" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Click here to enter your code</button>
                        </div>
                    </div>
                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            <p>If you have a coupon code, please apply it below.</p>
                            <div className="coupon-code-input">
                                <input type="text" name="coupon_code" placeholder="Coupon code" required />
                            </div>
                            <button className="readon" type="submit">apply coupon</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cupan