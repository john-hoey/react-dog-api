import React, { useEffect, useState } from "react";
import "./App.css";
import ghlogo from "./images/github-logo.png";

function App() {
  let [dogImgURL, setdogImgURL] = useState("");
  let [dogsCount, setDogsCount] = useState(0);

  const fetchRandomDog = () => {
    const randomDogAPIEndpoint = "https://dog.ceo/api/breeds/image/random";
    fetch(randomDogAPIEndpoint)
      .then((response) => response.json())
      .then((data) => setdogImgURL(data.message))
      .catch(console.error);
  };

  const incrementCounter = () => {
    setDogsCount((dogsCount += 1));
  };
  const showDogInNewWindow = () => {
    window.open(dogImgURL);
  };
  useEffect(() => {
    fetchRandomDog();
  }, []);

  return (
    <main>
      <header className="header">The Great Dogsby</header>
      <section className="dog-section">
        <div className="dog-img-container">
          {dogImgURL && (
            <img
              src={dogImgURL}
              alt="random dog"
              className="dog-img"
              onLoad={incrementCounter}
            />
          )}
        </div>
        <div className="dog-count-container">
          <p className="dog-count-paragraph">
            You have looked at <span className="dog-count">{dogsCount}</span>{" "}
            good doggos!
          </p>
        </div>
        <div className="fetch-dog-btn-container">
          <button
            onClick={() => {
              fetchRandomDog();
            }}
            className="fetch-dog-btn"
          >
            Show Another Dog
          </button>
          <button onClick={showDogInNewWindow} className="open-org-dog-btn">
            Open Original Image in New Window
          </button>
        </div>
      </section>
      <a
        href="https://github.com/john-hoey/react-dog-api"
        target="_blank"
        rel="noreferrer"
        className="gh-link"
      >
        <img src={ghlogo} alt="github icon and link" />
        &nbsp;Browse the Source
      </a>
    </main>
  );
}

export default App;
