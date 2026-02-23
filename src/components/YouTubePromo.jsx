// src/components/YouTubePromo.jsx
const YouTubePromo = () => {
  return (
    <section className="w-full py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          See TerraFit Parks in Action
        </h2>
        <p className="text-lg text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Watch how we develop, build, and operate treetop and adrenaline parks across Africa.
        </p>
        <div className="relative aspect-video max-w-4xl mx-auto shadow-2xl rounded-xl overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/aC6YsuCpkfI"
            title="TerraFit Parks Promo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default YouTubePromo;
