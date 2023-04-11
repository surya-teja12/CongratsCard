const element = (
  <div className="main-container">
    <h1 className="main-heading">Congratulations</h1>
    <div className="profile-container">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        alt="person-image"
      />
      <h1 className="profile-name">Kiran V</h1>
      <p className="profile-info">
        Vishnu Institution of Computer Education and Technology, Bhimavaram
      </p>
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        alt="Watch-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
