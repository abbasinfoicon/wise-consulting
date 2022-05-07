import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '../../components/shop/Pagination'
import { addToCart } from '../../features/CartSlice';
import { useGetAllProductQuery } from '../../services/service'

const Products = () => {
    const { items: products, status } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const history = useNavigate();

    const { data, error, isLoading } = useGetAllProductQuery();
    // console.log("Api", isLoading);

    const handleAddToCart = (pro) => {
        dispatch(addToCart(pro));
        // history({ pathname: '/shop/cart' });
    };



    const [counter, setCounter] = useState(1);
    const [showPerPage, setShowPerPage] = useState(6);
    const [pagination, setPagination] = useState({ start: 0, end: showPerPage });

    const onPaginationChange = (start, end) => {
        setPagination({
            start: start,
            end: end
        })
    };

    useEffect(() => {
        const value = showPerPage * counter;
        onPaginationChange(value - showPerPage, value)

    }, [counter])


    const pro = useGetAllProductQuery();
    // console.log("Data ", pro.data);

    const total = pro.data;
    // console.log("Data Length ", total);

    if (pro.isLoading) return <div>Loading...</div>
    if (pro.isError) return <div>An error occured {pro.error.error}</div>



    return (

        <>
            <div className="row">
                {
                    pro.data.slice(pagination.start, pagination.end).map((pro) => {
                        return (
                            <>
                                {status === "success" ? (
                                    <div className="col-lg-4 col-sm-6 mb-73 md-mb-43" key={pro.id}>
                                        <div className="product-list">
                                            <div className="image-product">
                                                <Link to={`/shop/${pro.id}`}><img src={"/" + pro.img} alt="" /></Link>
                                                <div className="overley">
                                                    <button onClick={() => handleAddToCart(pro)}><i className="flaticon-shopping-bag"></i></button>
                                                </div>
                                            </div>

                                            <div className="content-desc text-center">
                                                <h2 className="loop-product-title pt-19"><Link to={`/shop/${pro.id}`}>#{pro.id}-{pro.title}</Link></h2>
                                                <span className="price">${pro.price}.00</span>
                                            </div>
                                        </div>
                                    </div>
                                ) : status === "pending" ? (
                                    <p>Loading...</p>
                                ) : (
                                    <p>Unexpected error occured...</p>
                                )
                                }
                            </>
                        )
                    })
                }

            </div>

            <div className="pagenav-link text-center">
                <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={total.length} />
            </div>
        </>
    )
}

export default Products