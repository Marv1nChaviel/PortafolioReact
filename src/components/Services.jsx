import React from "react";

function Services () {

const header = {
    mainHeader: "My Expertise",
    subHeading: "Provide Wide Range of Digital Services",
};

const state  = [
    {
        id: 1,
        icon: "/img/diseno-ux.png",
        heading: "Design UI/UX",
        text: "As a UI/UX Designer I seek to achieve the design of a product or service that works and meets the objectives with which it was created. Satisfy a need of a User"
    },
    {
        id: 2,
        icon: "/img/web.png",
        heading: "Design Web",
        text: "Use and Mastery of different tools that result in the creation of a complete website which satisfies the needs of my clients and gives the best performance"
    },
    {
        id: 3,
        icon: "/img/app.png",
        heading: "Design App Web",
        text: "Process of creating a website application that delivers a seamless user experience (UX) and meets users' core needs with a clear, compelling user interface (UI)"
    },
    {
        id: 4,
        icon: "/img/editor de video.png",
        heading: "video Editor",
        text: "Production of audiovisual or visual work from media that can be video files, photographs, graphics, or animations for any type of business or project    "
    },
    {
        id: 5,
        icon: "/img/logo interfaz user.png",
        heading: "Design of Interface of User",
        text: "Focus on anticipating what users might need to do and ensuring that the interface has elements that are easy to access, understand and use to facilitate those actions"
    }

    
]

    return (
        <div className="services">
            <div className="container">
                <div className="services__header">
                    <div className="common">
                        <h6 className="heading">"{header.mainHeader}</h6>
                        <h2 className="subheading">{header.subHeading}</h2>
                        <div className="commonBorder"></div>
                    </div>

                    <div className="row bgMain">
                        {state.map ((info) => (
                        <div className="col-4 bgMain">
                            <div className="services__box">
                                <img src = {info.icon} alt=""  className="commonIcons"/>
                                <h4 className="services__box-header">{info.heading}</h4>
                                <p className="services__box-p">{info.text}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
