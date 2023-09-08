import Image from 'next/image';
import { useState } from 'react';
import seta_di from '../images/icons8-seta-direita-64.png'
import seta_es from '../images/icons8-seta-esquerda-64.png'
import style from '../components/css/ImageCarousel.module.css'

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    return (
        <div className={style.carousel_container}>
            <div className="carousel-slide">
                {images.map((image, index) => (
                    <Image
                        className={style.img}
                        key={index}
                        src={image}
                        alt={`Imagem ${index + 1}`}
                        style={{ display: index === currentIndex ? 'block' : 'none' }}
                    />
                ))}
            </div>
            {/* <button onClick={prevImage}>Anterior</button>
            <button onClick={nextImage}>Próxima</button> */}
            <div className={style.carousel_buttons}>
              <Image
                src={seta_es}
                alt="Anterior"
                className={style.nav_button}
                onClick={prevImage}
              />
              <Image
                src={seta_di}
                alt="Próxima"
                className={style.nav_button}
                onClick={nextImage}
              />
            </div>
        </div>
    );
};

export default ImageCarousel;
// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// const ImageCarousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Calcula o próximo índice da imagem
//       const nextIndex = (currentIndex + 1) % images.length;
//       setCurrentIndex(nextIndex);
//     }, 3000); // 3000 milissegundos = 3 segundos

//     // Limpar o intervalo quando o componente for desmontado
//     return () => clearInterval(interval);
//   }, [currentIndex, images]);

//   return (
//     <div>
//       <Image
//         src={images[currentIndex]}
//         alt={`carousel-image-${currentIndex}`}
//         width={400} // Ajuste a largura conforme necessário
//         height={300} // Ajuste a altura conforme necessário
//       />
//     </div>
//   );
// };

// export default ImageCarousel;
