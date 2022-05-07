import React from 'react'
import { Link } from 'react-router-dom';
import { useGetAllBlogQuery } from '../../services/service'

const PopularPost = (props) => {
    // console.log(props.id);
    const { data, isError, isLoading } = useGetAllBlogQuery();
    const sliceData = data.slice();
    sliceData.splice(props.id-1, 1);
    // console.log("PopulerPost Data: ", sliceData);

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>An error occured {data.error.error}</div>

    return (
        <div className="sidebar-popular-post sidebar-grid shadow mb-50">
            <div className="sidebar-title">
                <h3 className="title semi-bold mb-20">Recent Post</h3>
            </div>
            {
                sliceData.slice(0,5).map(({ id, img, title, slug }) => {
                    return (
                        <div className="single-post mb-20" key={id}>
                            <div className="post-image">
                                <Link to={`/blog/${slug}`}><img src={window.location.origin + "/" + img} alt="post image" /></Link>
                            </div>
                            <div className="post-desc">
                                <div className="post-title">
                                    <h5 className="margin-0"><Link to={`/blog/${slug}`}>{title}</Link></h5>
                                </div>
                                <ul>
                                    <li><i className="fa fa-calendar"></i> 28 June, 2019</li>
                                </ul>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PopularPost