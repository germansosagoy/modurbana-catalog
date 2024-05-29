import React from "react";
import ShipImage from "../assets/images/hero-image.webp";

const Shipping: React.FC = () => {
  // const handleScrollToShip = () => {
  //   const element = document.getElementById("envios");
  //   if (shippingSection) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // }
  return (
    <section
    id="envios"
    className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative px-8 pt-16"
    style={{ backgroundImage: `url(${ShipImage})` }}
  >
    <div className="flex flex-col items-center justify-center">
      <span className="font-bold text-3xl text-white flex items-center justify-center text-6xl py-6 mb-5">
        ¿En dónde estás ubicado?
      </span>
      <div className="w-full max-w-6xl p-8 z-10 bg-white bg-opacity-30 backdrop-blur-md border-b border-white border-opacity-20 shadow-lg rounded-2xl">
        <span className="text-xl text-black font-medium p-2 mb-2 block">
          Hacemos envíos por Correo Argentino a:
        </span>
        <ul className="flex flex-col justify-center gap-4 pb-2 mt-5">
          <li>
            <span className="flex justify-between items-center px-8 py-2 bg-white/80 rounded-lg shadow hover:bg-gray-100 transition font-medium text-lg">
              Pinedo & Charata, Chaco.
            </span>
          </li>
          <li>
            <span className="flex justify-between items-center px-8 py-2 bg-white/80 rounded-lg shadow hover:bg-gray-100 transition font-medium text-lg">
              Las Breñas & Corzuela, Chaco.
            </span>
          </li>
          <li>
            <span className="flex justify-between items-center px-8 py-2 bg-white/80 rounded-lg shadow hover:bg-gray-100 transition font-medium text-lg">
              Campo Largo & Saenz Peña, Chaco.
            </span>
          </li>
          <li>
            <span className="flex justify-between items-center px-8 py-2 bg-white/80 rounded-lg shadow hover:bg-gray-100 transition font-medium text-lg">
              Quitilipí & Machagai, Chaco.
            </span>
          </li>
          <li>
            <span className="flex justify-between items-center px-8 py-2 bg-white/80 rounded-lg shadow hover:bg-gray-100 transition font-medium text-lg">
              Santa Sylvina & Chorotis, Chaco.
            </span>
          </li>
          <span className="text-sm font-normal tracking-normal leading-5 p-2">
            Si no encuentras tu ubicación, podés contactarte con{" "}
            <a
              href="https://wa.me/+543735463058"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 underline"
            >
              (+54)-3735-463058
            </a>{" "}
            para recibir más información.
          </span>
        </ul>
      </div>
    </div>
  </section>
  );
};

export default Shipping;
