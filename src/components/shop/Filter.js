import React from 'react'


const Filter = () => {

    return (
        <div className="row y-middle mb-60 md-mb-50">
            <div className="col-sm-6 col-12 xs-mb-30">
                <p className="mb-0">Showing 0 - 6 of 16 results</p>
            </div>
            <div className="col-sm-6 col-12">
                <div className="select-option">
                    <select className="from-control">
                        <option>Default sorting</option>
                        <option>Sort by popularity</option>
                        <option>Sort by average rating</option>
                        <option>Sort by lates</option>
                        <option>Sort by price: low to high</option>
                        <option>Sort by price: high to low</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filter