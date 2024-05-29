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
      <div className="w-full lg:w-64 lg:h-64 overflow-hidden p-3">
        <img src={item.imageSrc} alt={item.title} className="w-full h-full object-cover rounded-2xl" />
      </div>
      <h2 className="text-sm font-semibold font-sans tracking-wide ml-2 mb-1">{item.title}</h2>
      <div className="border-t border-slate-200 mx-2"/>
      <div className='p-2'>
      <p className="text-gray-700 text-xs font-sans">{item.description}</p>
      </div>
    </div>
  );
};
export default Card;
