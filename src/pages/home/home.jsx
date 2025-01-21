import React from "react";
import { FaPlus } from "react-icons/fa"; // Import the Plus icon from react-icons
import './home.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-text">
          <h1>Explore the beauty of Kibera</h1>
          <p>Kibera is a beautiful place</p>
          <button className="learn-more-btn">
            Learn More <FaPlus />
          </button>
        </div>
        <div className="home-banner">
          <img src="https://images.unsplash.com/photo-1594376510523-80c07a8821ce?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Kibera Banner" />
        </div>
      </div>
      {/* New Top Picks of the Week Section */}
      <section className="top-picks-section">
        <h2>Top Picks of the Week</h2>
        <div className="top-picks-container">
          <div className="top-pick-card">
            <img src="https://images.unsplash.com/photo-1664353990857-213c7cccee96?q=80&w=2185&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pick 1" />
            <h3>Pick 1</h3>
            <p>This is an exciting pick for the week.</p>
          </div>
          <div className="top-pick-card">
            <img src="https://images.unsplash.com/photo-1723740558288-fd2b53c3f41e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pick 2" />
            <h3>Pick 2</h3>
            <p>Don't miss out on this one!</p>
          </div>
          <div className="top-pick-card">
            <img src="https://images.unsplash.com/photo-1602138234443-0ba9030cc1d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNsdW18ZW58MHx8MHx8fDA%3D" alt="Pick 3" />
            <h3>Pick 3</h3>
            <p>Another amazing selection to explore!</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
