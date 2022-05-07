import React from 'react'
import { Link } from 'react-router-dom'
import { useGetAllServiceQuery } from '../../services/service'

const Category = () => {
    const { data, isError, isLoading } = useGetAllServiceQuery();
    // console.log("Category Data: ", data);

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>An error occured {data.error.error}</div>

        
    return (
        <div className="sidebar-grid sidebar-categories shadow mb-50">
            <div className="sidebar-title">
                <h3 className="title semi-bold mb-20">Categories</h3>
            </div>
            <ul>
                {
                    data.map((list) => {
                        return (
                            <li key={list.id}><Link to={`/${list.slug}`}>{list.name}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Category