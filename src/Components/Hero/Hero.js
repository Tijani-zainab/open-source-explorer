import React from "react";
import "./Hero.scss";

const Hero = () => {
    return (
        <div className="hero">
            <div>
                <h1 className="hero--title text">OpenExplorer!</h1>
            </div>

            <p className="hero--subtitle">
                Discover the wonders of open source development. Built by developers, for developers.
                Explore top projects, contribute and learn with ease!
            </p>

            <div className="hero--buttons">
                <button className="btn hero--button">Explore Projects</button>
                <button className="btn hero--button">Filter Projects</button>
            </div>
        </div>
    );
};

export default Hero;