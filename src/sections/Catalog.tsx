import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import ScrollCarousel from "scroll-carousel-react";
import Card from "../components/Card";
import resourceData from "../data/resource.json";
import CatalogImage from "../assets/images/hero-image-3.webp";

interface Item {
  imageSrc: string;
  title: string;
  description: string;
  card: string;
}

interface CatalogProps {
  resources: Item[];
}

const Catalog: React.FC<CatalogProps> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [resources, setResources] = useState<Item[]>([]);

  useEffect(() => {
    const transformedResources = resourceData.resources.map((item) => ({
      ...item,
      imageSrc: `/images-products/${item.imageSrc}`,
    }));
    setTimeout(() => {
      setResources(transformedResources);
      setIsLoading(false);
    }, 1000); // Simula carga de 1seg
  }, []);

  
  return (
    <section
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${CatalogImage})` }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center py-10 lg:py-12 pt-20 pb-20">
        {isLoading ? (
          <ClipLoader color="#000000" size={50} />
        ) : (
          <ScrollCarousel
            className="w-full bg-white/20 backdrop-blur-sm py-6 lg:py-12"
            autoplay
            autoplaySpeed={0.5}
            speed={0.5}
          >
            {resources.map((item, i) => (
              <Card key={i} item={{ ...item, id: i.toString() }} />
            ))}
          </ScrollCarousel>
        )}
      </div>
    </section>
  );
};

export default Catalog;
