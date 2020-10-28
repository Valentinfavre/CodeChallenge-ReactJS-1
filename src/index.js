import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Valentin Favre ",
  location: "Pralognan La Vanoise",
  foodType: "Nearly Coffee and Bear ",
  age: 22,
  likes: "Coding / Playing with Aurora Team ",
  FBUsername: "vallenstriker",
  avatar:
    "https://scontent-mrs2-2.xx.fbcdn.net/v/t1.0-9/93842509_1075702839480034_3129954041115705344_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=JypzjQN_7ksAX-5Rbeh&_nc_ht=scontent-mrs2-2.xx&oh=9c5eb81337a94c6a9f26655975e91c13&oe=5FBD5502"
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
  const url = `https://www.facebook.com/profile.php?id=100011209832008`;

  return (
    <div className="App">
      {/* Show user data here */}
      <div className="user-deets">
        <img src={user.avatar} alt={user.name} />
        <h3>
          <a href={url}>{user.name}</a>
        </h3>
        <p>
          <strong>Location :</strong> {user.location}
        </p>
        <p>
          <strong>Eats</strong> {user.foodType}
        </p>
        <p>
          <strong>Age</strong> {user.age}
        </p>
        <p>
          <strong>Likes</strong> {user.likes}
        </p>
        <p>
          <strong>Faceook</strong> <a href={url}>@{user.FBUsername}</a>
        </p>
      </div>

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
