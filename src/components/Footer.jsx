
import './Footer.css';

import Logo from './Logo';
import FooterInfo from './FooterInfo';

import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';

const informationLinks = [
  { text: 'Sobre a Digital Store', link: '/about' },
  { text: 'Blog', link: '/blog' },
  { text: 'Trabalhe conosco', link: '/careers' },
  { text: 'Política de privacidade', link: '/privacy' },
];

const categoryLinks = [
  { text: 'Camisetas', link: '/categories/camisetas' },
  { text: 'Calças', link: '/categories/calcas' },
  { text: 'Bonés', link: '/categories/bones' },
  { text: 'Headphones', link: '/categories/headphones' },
  { text: 'Tênis', link: '/categories/tenis' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-main">

          <div className="footer-brand">
            <Logo variant="footer" />

            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="footer-social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <img src={facebook} alt="" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <img src={instagram} alt="" />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <img src={twitter} alt="" />
              </a>
            </div>
          </div>

          <div className="footer-information">
            <FooterInfo
              title="Informações"
              informations={informationLinks}
            />

            <FooterInfo
              title="Categorias"
              informations={categoryLinks}
            />
          </div>

        </div>

        <hr className="footer-divider" />

        <p className="footer-copyright">
          © {new Date().getFullYear()} Digital Store
        </p>

      </div>
    </footer>
  );
}

export default Footer;
