const Portfolio = () => {

    return (
      <div class="portfolio">
          <a href="https://retro-great-1.herokuapp.com/">
            <img src={require("./assets/age-filter.gif")} alt="retro great portfolio" />
          </a>

          <a href="https://github.com/Gatewayss/gage-api-quiz">
            <img src={require("./assets/Gage's Quiz (1).gif")} alt="trans history quiz" />
          </a>

          <a href="https://gatewayss.github.io/recipes-for-disaster/">
            <img src={require("./assets/Recipes for disaster.gif")} alt="Recipes for disaster tutorial" />
          </a>
        </div>
    );
  }
   
  export default Portfolio;