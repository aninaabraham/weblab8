import "bulma/css/bulma.css";
import { useState } from "react";
import Card from "./Card";
import Hotel1 from "./images/h1.jpeg";
import Hotel2 from "./images/h2.jpeg";
import Hotel3 from "./images/h3.jpeg";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p align="center" className="title">Hotels</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="card-wrapper">
            <Card
              title="Royals"
              feature="It is a beautiful Hotel to visit"
              image={Hotel1}
            />
            <Card
              title="Paris"
              feature="Make time to visit the most beautiful Hotel"
              image={Hotel2}
            />
            <Card
              title="Grand"
              feature="Visit the Grand, make your life grand"
              image={Hotel3}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
