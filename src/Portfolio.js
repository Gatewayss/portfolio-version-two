const Portfolio = () => {

    return (
      <div class="portfolio">
          <h2>Retro Great!</h2>
          <a href="https://retro-great-1.herokuapp.com/">
            <img src={require("./assets/age-filter.gif")} alt="retro great portfolio" />
          </a>

          <h2>Trans History Quiz</h2>
          <a href="https://github.com/Gatewayss/gage-api-quiz">
            <img src={require("./assets/Gage's Quiz (1).gif")} alt="trans history quiz" />
          </a>

          <h2>Mixer</h2>
          <a href="https://paint-mixer.herokuapp.com/">
            <img src={require("./assets/home.png")} alt="Mixer homepage" />
          </a>
        </div>
    );
  }
   
  export default Portfolio;