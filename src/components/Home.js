/* eslint-disable max-len */
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'react-external-link';
import Figure from '../Images/Figure.gif';

const Home = () => (
  <section className="home">
    <div className="homeImage">
      <h2 className="homeTitle">Welcome to our page</h2>
      <img className="figure" alt="homeimage" src={Figure} />
    </div>
    <div className="description">
      <p className="homePar">
        {' '}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam nulla culpa voluptate minus necessitatibus vitae, porro placeat ad assumenda rem eum repellat labore molestiae ipsum error. Harum soluta alias fugiat.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam nulla culpa voluptate minus necessitatibus vitae, porro placeat ad assumenda rem eum repellat labore molestiae ipsum error. Harum soluta alias fugiat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam nulla culpa voluptate minus necessitatibus vitae, porro placeat ad assumenda rem eum repellat labore molestiae ipsum error. Harum soluta alias fugiat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam nulla culpa voluptate minus necessitatibus vitae, porro placeat ad assumenda rem eum repellat labore molestiae ipsum error. Harum soluta alias fugiat.

      </p>

      <div className="btnContainer">
        <ExternalLink href="https://github.com/carreraprogrammer/math-magicians">
          <button type="button" className="sourceBtn">
            See Source
            {' '}
            <FaGithub />
          </button>
        </ExternalLink>
      </div>
    </div>
  </section>

);

export default Home;
