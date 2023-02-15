import roundDoodleBG from '../assets/images/doodles-bg.svg';
import squiglyArrow from '../assets/images/squigly-arrow.svg';

const LandingPage = () => {
  return (
    <section className="landing-page-section">
      <div className="intro-text">
       <div className="text-arrow">
            <h1>
              <img src={squiglyArrow} alt="➡️" />
              Creative Web <span className="cyan-text">Developer</span>
            </h1>
          <div className="hire-buttons">
            <button className="bg-cyan" type="button">Hire Me</button>
            <button className="bg-dark" type="button">Download CV <i className="bi bi-download"></i></button>
          </div>
       </div>
      </div>
      <div className="landing-illustration">
        <img className="img-fluid" src={roundDoodleBG} alt="🧑🏽‍💻" />
      </div>
    </section>
  );
};

export default LandingPage;
