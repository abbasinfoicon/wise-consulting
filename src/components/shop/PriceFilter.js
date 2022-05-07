import React from 'react'

const PriceFilter = () => {
    return (
        <div className="sidebar-grid sidebar-price-filter shadow mb-50">
            <div className="sidebar-title">
                <h3 className="title semi-bold mb-20">Filter by price</h3>
            </div>
            <div className="slidecontainer">
                <input type="range" min="5" max="80" defaultValue="65" step="5" className="slider" id="myrange" />
                <div className="bottom-part">
                    <div className="filter-btn">
                        <a href="#">Filter</a>
                    </div>
                    <p className="rangevalue mb-0">Price: $10 — <span id="rangevalue"></span>$</p>
                </div>
            </div>
        </div>
    )
}

export default PriceFilter