
import './Section.css';

function Section({
  title,
  titleAlign = 'left',
  link,
  children,
}) {
  return (
    <section className="section-container">
      <div className={`section-heading section-heading-${titleAlign}`}>
        <h2>{title}</h2>

        {link && (
          <a href={link.href}>
            {link.text}
          </a>
        )}
      </div>

      <div className="section-content">
        {children}
      </div>
    </section>
  );
}

export default Section;
