
import './FooterInfo.css';

function FooterInfo({ title, informations = [] }) {
  return (
    <div className="footer-info">
      <h3>{title}</h3>

      <ul>
        {informations.map((information, index) => (
          <li key={`${information.text}-${index}`}>
            <a href={information.link}>
              {information.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterInfo;
