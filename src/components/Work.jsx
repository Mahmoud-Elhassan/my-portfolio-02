import sass from "../images/sass-original.svg";
import react from "../images/react-original.svg";
import rwd from "../images/responsive-design.svg";
import next from "../images/nextjs-original-wordmark.svg";
import fb from "../images/firebase-icon.svg";
import tw from "../images/tailwind-css-icon.svg";

const Work = () => (
  <section id="work">
    <h1 className="reveal-list">02. Recent Projects</h1>
    <a
      href="https://social-web-topaz.vercel.app/login"
      className="card reveal-list"
      rel="noreferrer"
      target="_blank"
    >
      <img
        className="card-img"
        src="https://i.postimg.cc/kggvJjRw/pexels-tim-samuel-5838215-6-1.jpg"
        alt=""
      />
      <footer>
        <div className="brief">
          <p>SociaWeb:</p>
          <div className="skills-used">
            <img src={next} alt="" className="skill one"></img>
            <img src={fb} alt="" className="skill two"></img>
            <img src={rwd} alt="" className="skill three"></img>
          </div>
        </div>
        <p>
          Social media web application. With the ability to create an account,
          post, like, comment, delete and more.
        </p>
      </footer>
    </a>
    <a
      href="https://google-clone-smoky-beta.vercel.app/"
      className="card reveal-list"
      rel="noreferrer"
      target="_blank"
    >
      <img
        className="card-img"
        src="https://i.postimg.cc/mkRpd33f/pexels-sarah-blocksidge-13628541-min.jpg"
        alt=""
      />
      <footer>
        <div className="brief">
          <p>Google Clone:</p>
          <div className="skills-used">
            <img src={next} alt="" className="skill one"></img>
            <img src={tw} alt="" className="skill two"></img>
            <img src={rwd} alt="" className="skill three"></img>
          </div>
        </div>
        <p>
          Google Clone is a web application that allows you to search for
          content, including images, by using a search bar. It is built using
          Next.js 13.
        </p>
      </footer>
    </a>

    <a
      href="https://cryptocurrency-live-tracker.netlify.app/"
      className="card reveal-list"
      rel="noreferrer"
      target="_blank"
    >
      <img
        className="card-img"
        src="https://i.postimg.cc/FFT2DSZd/cryptocurrency.jpg"
        alt=""
      />
      <footer>
        <div className="brief">
          <p>Cryptocurrency tracker:</p>
          <div className="skills-used">
            <img src={react} alt="" className="skill one"></img>
            <img src={sass} alt="" className="skill two"></img>
            <img src={rwd} alt="" className="skill three"></img>
          </div>
        </div>
        <p>
          A cryptocurrency website allows you to search and track the prices of
          various cryptocurrencies in real-time.
        </p>
      </footer>
    </a>
  </section>
);

export default Work;
