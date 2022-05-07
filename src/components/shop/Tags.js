import React from 'react'
import { Link } from 'react-router-dom'
import { useGetAllServiceQuery } from '../../services/service'

const Tags = () => {
    const { data, isError, isLoading } = useGetAllServiceQuery();

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>An error occured {data.error.error}</div>
    
    return (
        <div className="sidebar-grid sidebar-tags shadow">
            <div className="sidebar-title">
                <h3 className="title semi-bold mb-20">Filter by price</h3>
            </div>
            <div className="tagcloud">
                {
                    data.map((list) => {
                        return (
                            <Link to={`/${list.slug}`} key={list.id}>{list.name}</Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Tags