import React from "react";

function OttoProtocol() {
  // Define the image paths and video path
  const items = [
    { type: "image", src: "/assets/imgs/Working all together.png" },
    { type: "image", src: "/assets/imgs/Adrian on the pushers .png" },
    { type: "image", src: "/assets/imgs/thumbnail_IMG_0230.png" },
    { type: "video", src: "/assets/imgs/IMG_0179.mp4" }, // Add your video path here
  ];

  return (
    <section className="w-full text-white mt-24 py-28">
      <div className="bg-transparent text-5xl text-bold text-center mx-auto sm:w-2/3 w-11/12 mb-12">
        Some pictures of the adventure
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        {items.map((item, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`Adventure ${index + 1}`}
                className="object-cover w-full h-full"
              />
            ) : (
              <video controls className="object-cover w-full h-full">
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default OttoProtocol;
