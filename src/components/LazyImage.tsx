import React, { useState, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderSrc?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, placeholderSrc }) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc || '');
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let didCancel = false;

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                !didCancel &&
                (entry.isIntersecting || entry.intersectionRatio > 0)
              ) {
                const newImage = new Image();
                newImage.src = src;
                newImage.onload = () => {
                  setImageSrc(src);
                };
                observer.unobserve(imageRef);
              }
            });
          },
          { threshold: 0.01, rootMargin: '75%' }
        );
        observer.observe(imageRef);
      } else {
        // Fallback for older browsers
        const newImage = new Image();
        newImage.src = src;
        newImage.onload = () => {
          setImageSrc(src);
        };
      }
    }
    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef!);
      }
    };
  }, [src, imageSrc, imageRef]);

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${imageSrc === placeholderSrc ? 'blur-md' : ''}`}
      style={{ transition: 'filter 0.3s ease-out' }}
    />
  );
};

export default LazyImage;
