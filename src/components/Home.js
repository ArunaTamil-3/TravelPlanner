import React from "react";
import "../assets/style/home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigator = useNavigate();
  const handleClick = () => {
    navigator("/login");
  };
  return (
    <>
      <div className="main">
          <div className="navbar">
              <div className="icon">
                <h2 className="home-logo">TraVel PlaNner</h2>
              </div>

              <div className="search">
                <button class="btn-home" onClick={handleClick}>
                  login
                </button>
              </div>
          </div>

        <div className="content">
          <h1>
            You'll never <br />
            <span> travel without our trip </span>
            <br /> planner again
          </h1>
          <p class="title-3">
            Build, organize, and map your itineraries <br /> in a free travel
            app designed for vacations & road trips
          </p>
          <button class="cn">
            <a href="#">Join us</a>
          </button>
        </div>

      </div>
    </>
  );
};
export default Home;
