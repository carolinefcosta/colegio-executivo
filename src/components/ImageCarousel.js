// import Image from 'next/image';
// import { useState } from 'react';
// import seta_di from '../images/divisa-direita1.png'
// import seta_es from '../images/divisa-esquerda1.png'
// import style from '../components/css/ImageCarousel.module.css'

// const ImageCarousel = ({ images }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [showButtons, setShowButtons] = useState(false);

//     const prevImage = () => {
//         setCurrentIndex((currentIndex - 1 + images.length) % images.length);
//     };

//     const nextImage = () => {
//         setCurrentIndex((currentIndex + 1) % images.length);
//     };

//     return (
//         <div className={style.carousel_container}>
//             <div className="carousel-slide">
//                 {images.map((image, index) => (
//                     <Image
//                         className={style.img}
//                         key={index}
//                         src={image}
//                         alt={`Imagem ${index + 1}`}
//                         style={{ display: index === currentIndex ? 'block' : 'none' }}
//                         onMouseEnter={() => setShowButtons(true)}
//                         onMouseLeave={() => setShowButtons(false)}
//                     />
//                 ))}
//             </div>
//             {showButtons && (
//                 <div className={style.carousel_buttons}>
//                     <Image
//                         src={seta_es}
//                         alt="Anterior"
//                         className={style.nav_button}
//                         onClick={prevImage}
//                     />
//                     <Image
//                         src={seta_di}
//                         alt="Próxima"
//                         className={style.nav_button}
//                         onClick={nextImage}
//                     />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ImageCarousel;

// IMAGENS COM BOTOẼS DE CADA LADO

import Image from 'next/image';
import { useState } from 'react';
import seta_di from '../images/divisa-direita1.png'
import seta_es from '../images/divisa-esquerda1.png'
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
            <div className={style.carousel_buttons}>
                <Image
                    src={seta_es}
                    alt="Anterior"
                    className={style.nav_button}
                    onClick={prevImage}
                />
            </div>
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
            <div className={style.carousel_buttons}>
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

// IMAGECAROUSEL IMAGENS PASSANDO COM INTERVALO TEMPO DE 3 SEGUNDOS

// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// const ImageCarousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const nextIndex = (currentIndex + 1) % images.length;
//       setCurrentIndex(nextIndex);
//     }, 3000);

    
//     return () => clearInterval(interval);
//   }, [currentIndex, images]);

//   return (
//     <div>
//       <Image
//         src={images[currentIndex]}
//         alt={`carousel-image-${currentIndex}`}
//         width={400}
//         height={300}
//       />
//     </div>
//   );
// };

// export default ImageCarousel;
