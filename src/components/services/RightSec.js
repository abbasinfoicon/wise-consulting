import React from 'react'
import { Link } from 'react-router-dom'
import { useGetAllServiceQuery } from '../../services/service'

const RightSec = (props) => {
    const { data, isLoading, isError } = useGetAllServiceQuery();
    // console.log("Data ", data);

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>An error occured {data.error.error}</div>

    return (
        <div className="col-lg-4">
            <ul className="page-nav-vertical mb-50">
                {
                    data.map((list) => {
                        return (
                            <li className={props.class === list.slug ? 'active' : ''} key={list.id}><Link to={`/${list.slug}`}>{list.name}</Link></li>
                        )
                    })
                }
            </ul>

            <div className="addd mb-50">
                <div className="contact-icon"> <i className="fa fa-phone"></i></div>
                <h2 className="title white-color">Have any Questions? <br /> Call us Today!</h2>
                <div className="contact white">
                    <a href="tel:702-513-3882">702-513-3882</a>
                </div>
            </div>

            <div className="brochures">
                <h3 className="title mb-20">Brochures</h3>
                <p className="desc mb-30">Lorem ipsum dolor sit amet consectetur adipisicing  doloremque aliquid enim. Dicta enim delectus non laudantium aperiam saepe iste.</p>
                <div className="dual-btn modify">
                    <div className="dual-btn-wrap">
                        <Link className="btn-left" to="/"><span>Download</span></Link>
                        <span className="connector"> Or </span>
                    </div>
                    <div className="dual-btn-wrap">
                        <Link className="btn-right" to="/contact"><span>Discover</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSec