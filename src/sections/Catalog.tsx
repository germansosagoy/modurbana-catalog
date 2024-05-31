import React,{ useState, useEffect, Suspense } from "react";
import { ClipLoader } from "react-spinners";
import resourceData from "@data/resource.json";
import CatalogImage from "@assets/images/hero-image-3.webp";

const LazySlider = React.lazy(() => import('react-slick'));
const LazyCard = React.lazy(() => import('@components/Card'));

interface Item {
  imageSrc: string;
  title: string;
  description: string;
  card: string;
}

interface CatalogProps {
  resources: Item[];
}

const settings = {
  dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    lazyload: 'ondemand',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

const Catalog: React.FC<CatalogProps> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [resources, setResources] = useState<Item[]>([]);

  useEffect(() => {
    const transformedResources = resourceData.resources.map((item) => ({
      ...item,
      imageSrc: `/images-products/${item.imageSrc}`,
    }));
      setResources(transformedResources);
      setIsLoading(false);
    },[]);

  return (
    <section className="w-full h-screen bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${CatalogImage})` }}>
    <div className="relative z-10 flex flex-col items-center justify-center py-6 lg:py-12 pt-20 pb-20 animate-fade">
      <Suspense fallback={<ClipLoader color="#000000" size={50} />}>
      {isLoading ? (
        <ClipLoader color="#000000" size={50} />
      ) : (
        <LazySlider {...settings} className="w-full bg-white/20 backdrop-blur-sm py-6 lg:py-12">
          {resources.map((item, i) => (
            <div key={i} className="px-2"> 
              <LazyCard item={{ ...item, id: i.toString() }} />
            </div>
          ))}
        </LazySlider>
      )}
      </Suspense>
    </div>
  </section>
  );
};

export default Catalog;
