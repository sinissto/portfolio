import './Intro.scss';

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="/assets/man.png" alt="some man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Sinisa</h1>
          <h3>
            Freelance<span>Designer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="/assets/down.png" alt="arrow down" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
