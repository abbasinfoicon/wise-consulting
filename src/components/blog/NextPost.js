import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useGetPostByIdQuery, useGetAllBlogQuery } from '../../services/service'

const NextPost = (props) => {
    // console.log("NextPost id: ", props.nextid);

    const totalBlog = useGetAllBlogQuery();
    const totalBlogLength = totalBlog.data.length;
    // console.log("NextPost Data: ", totalBlogLength);
    const [post, getPost] = useState(props.nextid);

    useEffect(() => {
        if (totalBlogLength > post) {
            getPost((post) => post + 1);
        }else {
            getPost((post) => post = 1);
        }
    }, [])

    const { data, isError, isLoading } = useGetPostByIdQuery(post);
    // console.log("if-NextPost Length: ", data);

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>An error occured {data.error.error}</div>

    return (
        <div className="article-nav">
            <ul>
                <li className="next">
                    <Link to={"/blog/" + data.slug}>
                        <span className="next-link">Next <i className="flaticon-next"></i></span>
                        <span className="link-text">{data.title}</span>
                    </Link>
                </li>
            </ul>
            <div className="clearfix"></div>
        </div>
    )
}

export default NextPost
