import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// importing images
import th2 from "../../../assets/Thumbnail/th2.jpg"
import th3 from "../../../assets/Thumbnail/th3.jpg"
import th4 from "../../../assets/Thumbnail/th4.jpg"
import th5 from "../../../assets/Thumbnail/th5.jpg"
import th6 from "../../../assets/Thumbnail/th6.jpg"
import th7 from "../../../assets/Thumbnail/th7.jpg"
import th8 from "../../../assets/Thumbnail/th8.jpg"
import th9 from "../../../assets/Thumbnail/th9.jpg"

const images = [
    { src: th2, alt: 'Image 2' },
    { src: th3, alt: 'Image 3' },
    { src: th4, alt: 'Image 4' },
    { src: th5, alt: 'Image 5' },
    { src: th6, alt: 'Image 6' },
    { src: th7, alt: 'Image 7' },
    { src: th8, alt: 'Image 8' },
    { src: th9, alt: 'Image 9' },
    { src: th6, alt: 'Image 6' },
    { src: img1, alt: 'Image 4' },
  ];

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import img1 from "../../../assets/Banner/banner2.jpg"


const Thumbnails = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className='container bg-gray-200 mx-auto mt-6 mb-6  '>
        <LightGallery
         onInit={onInit}
         speed={500}
         plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-1 gap-2  lg:grid-cols-5 lg:grid-rows-2 "
        >
            {images.map((image, index) => (
      <a key={index} href={image.src} data-src={image.src} className="col-span-1">
        <img
          src={image.src}
          alt={image.alt}
          className="h-48 md:h-80 w-full object-cover"
        />
      </a>
    ))}

        </LightGallery>

      

    </div>
    
    );
};

export default Thumbnails;