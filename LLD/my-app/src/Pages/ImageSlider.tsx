import { Icon } from "@iconify/react";
import { useState } from "react";

interface SliderImageData {
  id: number;
  image: string;
  alt: string;
}

const sliderImages: SliderImageData[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=70&w=800",
    alt: "Workspace setup"
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=70&w=800",
    alt: "Team collaboration"
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=70&w=800",
    alt: "Creative design"
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=70&w=800",
    alt: "Technology concept"
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=70&w=800",
    alt: "Office environment"
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=70&w=800",
    alt: "Coding workspace"
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=70&w=800",
    alt: "Laptop work"
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=70&w=800",
    alt: "Remote work"
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=70&w=800",
    alt: "Startup team"
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=70&w=800",
    alt: "Development environment"
  }
];

const ImageSlider = () => {
  const [activeImage, setActiveImage] = useState(0);


  const handleNextArrow = () => {
    setActiveImage(prev => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  const handlePrevArrow = () => {
    setActiveImage(prev => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  console.log("translateX :", activeImage * 100)

  return (
    <div className="max-w-[70%] m-auto py-16">
      <div className="flex items-center gap-2">
        <button className="cursor-pointer px-2" onClick={handlePrevArrow}>
          <Icon
            icon="material-symbols-light:arrow-back-ios-new-rounded"
            width="44"
            height="44"
          />
        </button>
        {/* <div className="aspect-8/4 w-full">
          <img
            src={image}
            alt={alt}
            className="object-center object-cover w-full h-full"
          />
        </div> */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeImage * 100}%)`
            }}
          >
            {sliderImages.map(item =>
              <div key={item.id} className="min-w-full aspect-8/4">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>

        <button className="cursor-pointer px-2" onClick={handleNextArrow}>
          <Icon
            icon="material-symbols-light:arrow-forward-ios-rounded"
            width="44"
            height="44"
          />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
