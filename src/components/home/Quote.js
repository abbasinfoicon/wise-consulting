import React from 'react'

const Quote = () => {
  return (
    <div className="rs-quote style2 pt-160 pb-161 md-pt-122 md-pb-124 sm-pt-80 sm-pb-80">
        <div className="container relative">
            <div className="row">
                <div className="offset-lg-5"></div>
                <div className="col-lg-7 pr-55 lg-pr-15">
                    <form className="quote-form">
                        <div className="sec-title mb-34">
                            <div className="sub-title red-color2">Quick Contact</div>
                            <h2 className="title mb-0">Request For Proposal</h2>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 mb-30">
                                <input type="text" name="name" placeholder="Name" required />
                            </div>
                            <div className="col-sm-6 mb-30">
                                <input type="email" name="email" placeholder="E-mail" required />
                            </div>
                            <div className="col-sm-6 mb-30">
                                <input type="text" name="phone" placeholder="Phone Number" required />
                            </div>
                            <div className="col-sm-6 mb-30">
                                <input type="text" name="subject" placeholder="Subject" required />
                            </div>
                            <div className="col-sm-12 mb-38">
                                <textarea placeholder="Your Message Here"></textarea>
                            </div>
                            <div className="col-sm-12">
                                <div className="submit-btn">
                                    <button type="submit">Submit Now</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="left-img">
                <img src="assets/images/quote/left-img11.png" alt=""/>
                <div className="morphin"></div>
            </div>
        </div>
    </div>
  )
}

export default Quote