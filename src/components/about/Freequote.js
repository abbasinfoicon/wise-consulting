import React from 'react'

const Freequote = ( props ) => {
    return (
        <div id="rs-freequote" className={ 'rs-freequote modify pt-80 pb-106 md-pt-72 md-pb-78 ' + props.bg }>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6 pl-65 md-pl-15">
                        <div id="form-messages" className="white-color"></div>
                        <form id="contact-form" className="quote-form" method="post" action="">
                            <div className="sec-title mb-53">
                                <div className="sub-title white-color">Let's Talk</div>
                                <h2 className="title white-color mb-0">Request a Free Quote</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" name="name" placeholder="Name" required="" />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" name="email" placeholder="E-mail" required="" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name="phone" placeholder="Phone Number" required="" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name="website" placeholder="Subject" required="" />
                                </div>
                                <div className="col-md-12">
                                    <textarea name="message" placeholder="Your Message Here" required=""></textarea>
                                </div>
                                <div className="col-md-12">
                                    <button type="submit" className="readon modify">Submit Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Freequote