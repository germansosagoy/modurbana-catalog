import React from 'react';

interface CardProps {
  item: {
    id: string;
    imageSrc: string;
    title: string;
    description: string;
  };
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="bg-[#f8f8f8] rounded-xl shadow-xl overflow-hidden cursor-auto transition-transform hover:-translate-y-[5px] mx-auto">
      <img src={item.imageSrc} alt={item.title} className="lg:w-64 lg:h-64 w-44 h-44 object-cover" />
      <div className="p-2">
        <h2 className="text-sm font-bold tracking-normal leading-7 mb-1">{item.title}</h2>
        <p className="text-gray-700 text-xs tracking-normal leading-5">{item.description}</p>
      </div>
    </div>
  );
};
export default Card;
