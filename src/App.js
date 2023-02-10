import React from "react";
import "./App.scss";
import Particles from "react-tsparticles";
import { Landing } from "./Pages";
import { loadStarsPreset } from "tsparticles-preset-stars";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

const App = () => {
  const options = {
    preset: "stars",
    particles: {
      size: {
        value: 1, // change the value property to reduce the size of the stars
        random: false,
        anim: {
          enable: false,
        },
      },
      number: {
        value: 300, // increase the value to add more stars
      }, 
    },

    Animation: {
      enable: true,
      speed: 30,
      minimumValue: 0.1,
      sync: false,
    },

    background: {
      color: {
        value: "#231e43",
      },
    },
  };

  const initialize = (instance) => {
    loadStarsPreset(instance);
  };

  return (
    <div className="App">
      <div className="components-containter">
        <ErrorBoundary>
          {/* <Routing /> */}
          <Landing />
        </ErrorBoundary>
      </div>

      <div className="particles-container">
        <Particles id="tsparticles" options={options} init={initialize} />
      </div>
    </div>
  );
};

export default App;
