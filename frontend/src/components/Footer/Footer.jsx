import "./Footer.css"
import { VscGithub } from 'react-icons/vsc'
import { FiLinkedin } from 'react-icons/fi'

function Footer(props) {
  return (
    <footer className="foot-container">
      <div className="links">
        <a
          className="git-link"
          href="https://github.com/KaleChip24"
          target="_blank"
          rel="noreferrer">
          <strong>
            <VscGithub></VscGithub>
          </strong>
        </a>
        <a
          className="linked-link"
          href="https://www.linkedin.com/in/oharakale/"
          target="_blank"
          rel="noreferrer">
          <FiLinkedin></FiLinkedin>
        </a>
      </div>
      <div className="copyright-yr">
        <small>&copy;2022</small>
      </div>

    </footer>
  );
}

export default Footer;