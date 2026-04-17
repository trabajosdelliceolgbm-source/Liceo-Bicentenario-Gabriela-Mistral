import React from 'react';

function GalleryImage({ image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative overflow-hidden rounded-xl cursor-pointer group transition-all duration-300 hover:shadow-xl"
    >
      <img
        src={image.url}
        alt={image.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white font-semibold">{image.title}</p>
          <p className="text-white/80 text-sm">{image.category}</p>
        </div>
      </div>
    </div>
  );
}

export default GalleryImage;