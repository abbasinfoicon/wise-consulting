import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import { useGetAllteamQuery } from '../../services/service'

const options = {
    margin: 30,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    dots: false,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        900: {
            items: 3,
        }
    },

}


const Team = () => {
    const team = useGetAllteamQuery();
    // console.log("Data ", team.data);

    if (team.isLoading) return <div>Loading...</div>
    if (team.isError) return <div>An error occured {team.error.error}</div>

    return (
        <div className="rs-team inner pt-100 pb-60 md-pt-80 md-pb-40">
            <div className="container">
                <OwlCarousel className="rs-carousel owl-carousel" {...options}>
                    {
                        team.data.map((item) => {
                            return (
                                <div className="team-item" key={item.id}>
                                    <div className="team-image">
                                        <img src={item.img} alt={item.name} />
                                    </div>
                                    <div className="text-bottom">
                                        <h3 className="person-name"><a href="#">{item.name}</a></h3>
                                        <span className="designation">{item.degination}</span>
                                        <div className="desc">{item.desc}</div>
                                        <div className="team-social">
                                            <ul>
                                                {
                                                    item.social.map((soc) => {
                                                        return (
                                                            <li key={soc.id}><a href={soc.link} target="_blank"><i className={"fa fa-" + soc.name}></i></a></li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Team