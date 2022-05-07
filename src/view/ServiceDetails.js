import React from 'react'
import Freequote from '../components/about/Freequote'
import RightSec from '../components/services/RightSec'
import Breadcrumbs from '../lib/Breadcrumbs'
import { useParams } from "react-router-dom";
import { useGetSingleServiceQuery } from '../services/service'
import CounterUp from '../lib/CounterUp';

const ServiceDetails = () => {
    let params = useParams();
    // console.log("Service Details ", params);
    const { data, isLoading, isError } = useGetSingleServiceQuery(params.slug);
    // console.log("Data: ", data);

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>An error occured {data.error.error}</div>

    return (

        <div className="main-content">
            {
                data.map((data) => {
                    return (
                        <>
                            <Breadcrumbs title={data.name} bg_img={data.bg_img} />

                            <div id="rs-services" key={data.id} className="rs-services single pt-100 pb-100 md-pt-80 md-pb-80">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8 pr-40 md-pr-15 md-mb-50">
                                            <img className="mb-39" src={data.img} alt={data.slug} />
                                            <h2>{data.name} Service</h2>
                                            <p><strong>{data.title}</strong></p>
                                            <p className="desc mb-31">{data.desc}</p>

                                            <ul className="listing-style regular2 pl-10 sm-pl-0">
                                                <li>Sed ut perspiciatis unde omnis iste natus error</li>
                                                <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur</li>
                                                <li>Accusamus et iusto odio dignissimos ducimus qui blanditiis</li>
                                                <li>Nam libero tempore, cum soluta nobis est eligendi optio cumque</li>
                                            </ul>

                                            <div className="rs-skillbar style3 pt-52 pb-55">
                                                <div className="row gutter-20">
                                                    <div className="col-md-4 sm-mb-30">
                                                        <div className="content-part">
                                                            <div className="rs-pie-content">
                                                                <div className="rs-pie2" data-percent="89">
                                                                    <CounterUp className="rspie-value" end={89} />
                                                                    <canvas height="130" width="130"></canvas>
                                                                </div>
                                                            </div>
                                                            <div className="pie-title">Strategy</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 sm-mb-30">
                                                        <div className="content-part">
                                                            <div className="rs-pie-content">
                                                                <div className="rs-pie2" data-percent="75">
                                                                    <CounterUp className="rspie-value" end={75} />
                                                                    <canvas height="130" width="130"></canvas>
                                                                </div>
                                                            </div>
                                                            <div className="pie-title">Strategy</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="content-part">
                                                            <div className="rs-pie-content">
                                                                <div className="rs-pie2" data-percent="98">
                                                                    <CounterUp className="rspie-value" end={98} />
                                                                    <canvas height="130" width="130"></canvas>
                                                                </div>
                                                            </div>
                                                            <div className="pie-title">Strategy</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="desc mb-53">{data.desc}</p>

                                            <div className="row gutter-20">
                                                <div className="col-6">
                                                    <img className="bdru-4" src={data.img_2} alt="" />
                                                </div>
                                                <div className="col-6">
                                                    <img className="bdru-4" src={data.img_3} alt="" />
                                                </div>
                                            </div>

                                            <div className="rs-testimonial style6 mt-60">
                                                <div className="testi-wrap">
                                                    <div className="icon-part">
                                                        <img src="assets/images/testimonial/sign.png" alt="" />
                                                    </div>
                                                    <p className="desc">{data.author_desc}</p>
                                                    <div className="detail-part">
                                                        <div className="avatar">
                                                            <img src={data.autor_img} alt="" />
                                                        </div>
                                                        <div className="info">
                                                            <div className="name">{data.author}</div>
                                                            <span className="designation">{data.designation}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <RightSec class={data.slug} />
                                    </div>
                                </div>
                            </div>

                            <Freequote bg="style1" />
                        </>
                    )
                })
            }


        </div>
    )
}

export default ServiceDetails