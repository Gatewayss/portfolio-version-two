import { Icon } from './Icon';

const Footer = () => {

  return (
    <footer className="footer">
      <a href="https://github.com/Gatewayss" target="_blank" rel="noreferrer">
      <Icon
        iconName="Github"
        size={30}
        className="icons"
      />
      </a>
      <a href="https://www.linkedin.com/in/gage-norton-a3568725b/" target="_blank" rel="noreferrer">
      <Icon
        iconName="Linkedin"
        size={30}
        className="icons"
      />
      </a>
      <a href="https://www.instagram.com/gateway___/" target="_blank" rel="noreferrer">
      <Icon
        iconName="Instagram"
        size={30}
        className="icons"
      />
      </a>
      <p>click these!</p>
    </footer>
  );
}

export default Footer;