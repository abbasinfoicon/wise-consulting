import React, { useEffect, useState } from 'react'

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
    const [counter, setCounter] = useState(1);
    const [noOfButton, setNoOfButton] = useState(Math.ceil(total / showPerPage));

    useEffect(() => {
        const value = showPerPage * counter;
        onPaginationChange(value - showPerPage, value)

    }, [counter])

    const onButtonClick = (type) => {
        if (type === "prev") {
            if (counter === 1) {
                setCounter(1);
            } else {
                setCounter(counter - 1);
            }

        } else if (type === "next") {
            if (noOfButton === counter) {
                setCounter(counter);
                
            } else {
                setCounter(counter + 1);
            }
        }
    }

    return (
        <ul>
            <li><a href={'#' + (counter)} onClick={() => onButtonClick("prev")}><i className="flaticon-back-1"></i></a></li>
            {
                new Array(noOfButton).fill("").map((el, index) => {
                    return (
                        <li className={`page-item ${index + 1 === counter ? "active" : ""}`} key={index}><a href={'#' + (index + 1)} onClick={() => setCounter(index + 1)}>{index + 1}</a></li>
                    )
                })
            }
            <li><a href={'#' + (counter)} onClick={() => onButtonClick("next")}><i className="flaticon-next"></i></a></li>
        </ul>
    )
}

export default Pagination