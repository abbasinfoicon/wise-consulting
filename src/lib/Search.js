import React from 'react'

const Search = () => {
    return (
        <div className="sidebar-search sidebar-grid shadow mb-50">
            <form className="search-bar">
                <input type="text" placeholder="Search..." />
                <span>
                    <button type="submit"><i className="flaticon-search"></i></button>
                </span>
            </form>
        </div>
    )
}

export default Search