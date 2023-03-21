import React from "react";

function About () {
    return (
        <div className="About">
            <div className="container">
            <div className="common">
                <h1 className="about-title">About Me</h1>
                <div className="underline-border"></div>
            </div>
                <div className="row h-650 alignCenter">
                    <div className="col-6">
                        <div className="about__img">
                            <img src="./img/yo.jpeg" alt=""/>
                        </div>
                    </div>

                     <div className="col-6">
                        <div className="about__info">
                        <h1>Creative Front-End Developer <br/> based in Maracaibo, Venezuela</h1>
                        <div className="about__info">
                            <p>I am a Front-End developer, dedicated and passionate about <br/> my work. With one year of experience as a web developer.
                               I <br/> have acquired the skills and tools to build your proje
                            </p>
                            <div className="about__buttons">
                                <a href="#about" className="btn btn-outline">
                                Download CV
                                </a>
                            </div>
                        </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default About;