import React, { useEffect, useRef, useState } from 'react'

const Carrer = () => {
    const [state, getState] = useState("HI");
    const divElement = useRef();
    useEffect(() => {
        const data = divElement.current.offsetParent;
        
        console.log("Data: ", data);
    }, []);

    return (
        <div className='career-page mt-5 mb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                        <h1>Carrer Page</h1>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia neque quisquam, consectetur, eaque in,
                            similique maxime dolorum commodi vitae natus nam deserunt. Ipsum tempora unde laudantium beatae voluptatem id dicta.</p>


                        <div className="lorem" id='lorem' >
                            <div ref={divElement}>
                                <h2>What is Lorem Ipsum?</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>

                        <button className="btn btn-info">Add Data</button>

                        <p>Dyanamic Data: { state }</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrer