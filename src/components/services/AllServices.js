import React from 'react'
import { Link } from 'react-router-dom'
import { useGetAllServiceQuery } from '../../services/service'


const AllServices = () => {
    const { data, isLoading, isError } = useGetAllServiceQuery();
    // console.log("Data ", data);

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>An error occured {data.error.error}</div>

    return (
        <div className="row gutter-20">

            {
                data.map(({id, slug, img, name, title}) => {
                    return (
                        <div className="col-lg-6 col-md-6 mb-30" key={id}>
                            <div className="service-wrap">
                                <div className="image-part">
                                    <Link to={`/${slug}`}><img src={img} alt={name} /></Link>
                                </div>
                                <div className="content-part text-center">
                                    <h3 className="title"><Link to={`/${slug}`}>#{name}</Link></h3>
                                    <div className="desc">{title}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default AllServices