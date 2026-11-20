
import { useState, useEffect } from 'react';
import './Gallery.css';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

function Gallery({
  images = [],
  className = '',
  width = '100%',
  height = 'auto',
  radius = '4px',
  showThumbs = false,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((current) =>
        (current + 1) % images.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) {
    return null;
  }

  
  const previousImage = () => {
    setCurrentIndex((index) => Math.max(0, index - 1));
  };

  
  const nextImage = () => {
    setCurrentIndex((index) =>
      Math.min(images.length - 1, index + 1)
    );
  };

  return (
    <div
      className={`gallery ${className}`}
      style={{ width, maxWidth: '100%' }}
    >
      <div
        className="gallery-main"
        style={{ height, borderRadius: radius }}
      >
        <div
          className="gallery-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              className="gallery-slide"
              key={`${image.src}-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt || `Imagem ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="gallery-arrow gallery-arrow-left"
              onClick={previousImage}
              disabled={currentIndex === 0}
              aria-label="Imagem anterior"
            >
              <img src={arrowLeft} alt="" />
            </button>

            <button
              type="button"
              className="gallery-arrow gallery-arrow-right"
              onClick={nextImage}
              disabled={currentIndex === images.length - 1}
              aria-label="Próxima imagem"
            >
              <img src={arrowRight} alt="" />
            </button>
          </>
        )}
      </div>

      {showThumbs && (
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <button
              type="button"
              key={`${image.src}-${index}`}
              className={`gallery-thumbnail ${
                index === currentIndex ? 'active' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Selecionar imagem ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : undefined}
            >
              <img src={image.src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
