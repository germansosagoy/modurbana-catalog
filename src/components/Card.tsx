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
    <div className="bg-[#f8f8f8] rounded-md shadow overflow-hidden cursor-pointer transition-transform hover:-translate-y-[5px] mx-3">
    <div className="w-full h-64 lg:w-64 lg:h-64 overflow-hidden p-4">
      <img src={item.imageSrc} alt={item.title} className="w-full h-full object-cover rounded-xl" />
    </div>
    <div className='p-2'>
    <h2 className="text-sm font-semibold font-sans tracking-wide text-slate-900">{item.title}</h2>
    <div className="border-t border-slate-200 mx-2" />
    <div className='mt-2 mb-1'>
      <p className="text-gray-700 text-xs font-sans">{item.description}</p>
    </div>
  </div>
  </div>
  );
};
export default Card;
