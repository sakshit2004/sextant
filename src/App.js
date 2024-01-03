import React from 'react';
import './App.css';

function Banner() {
  return (
    <div className="Banner">
      <h1 style={{ margin: 0 }}>Sextant Dashboard</h1>
    </div>
  );
}

function Card({ title, content }) {
  return (
    <div className="Card">
      <h3 className="CardTitle">{title}</h3>
      <div>{content}</div>
    </div>
  );
}

function Exhibit() {
  return (
    <div className="Exhibit">
      <h2>Network Metrics</h2>
      <div className="ExhibitContent">
        <Card title="Data Point 1" content="Visualization or data here" />
        <Card title="Data Point 2" content="Visualization or data here" />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit />
      <p class="Intro">
        Hello and welcome to react website by Sakshit Sharma. <code>This is my very first react website</code>.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
