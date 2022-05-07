import React from 'react'
import TitleSec from '../../lib/TitleSec'
import { Link } from 'react-router-dom'
import { useGetAllServiceQuery } from '../../services/service'

const Services = () => {
    const res = useGetAllServiceQuery();
    // console.log("Data ", res.data);

    if (res.isLoading) return <div>Loading...</div>
    if (res.isError) return <div>An error occured {res.error.error}</div>

    return (
        <div className="rs-services style13 bg23 pt-108 pb-90 md-pt-72 md-pb-50">
            <div className="container">
                <TitleSec title="Latest Services" subtitle="Our Latest Services" desc="Number of Services and customers isn’t as key as value of projects, over $1.5B, and extent of the projects which are worldwide." />
                <br />
                <div className="row">
                    {
                        res.data.map((ser) => {
                            return (
                                <div className="col-lg-3 mb-30" key={ser.id}>
                                    <div className="service-wrap">
                                        <div className="img-part">
                                            <img src={ser.img} alt="" />
                                            <div className="icon-part">
                                                <i className={"fa fa-" + ser.iocn}></i>
                                            </div>
                                        </div>

                                        <div className="content-part">
                                            <h4 className="title"><Link to={"/" + ser.slug}>{ser.name}</Link></h4>
                                            <div className="desc">{ser.title}</div>
                                            <div className="btn-part">
                                                <Link to={"/" + ser.slug}><i className="fa fa-plus"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Services