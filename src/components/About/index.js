import React from 'react';
import aboutImage from "../../assets/cover/jrc-family.jpg";

function About() {
    return (
        <section>
            <h1 id="about">About Me</h1>
            <img src={aboutImage} className="my-2" sytle={{ width: "100%" }} alt="cover" />
        </section>
    )
}

export default About;