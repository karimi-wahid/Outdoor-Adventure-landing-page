
const Gallery = ({slides}) => {
  return (
    <div className="flex min-h-screen items-center justify-center w-[90%] pl-1">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex [&:hover>div]:w-16 [&>div:hover]:w-[30rem]">
          {/* First Image Card */}
          <div className="group relative h-96 w-[20rem] cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
            <img
              className="h-full object-cover transition-all group-hover:scale-125"
              src={slides.imgSrc1}
              alt="image"
            />
          </div>
          
          {/* Second Image Card */}
          <div className="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
            <img
              className="h-full object-cover transition-all group-hover:scale-125"
              src={slides.imgSrc2 }
              alt="image"
            />
          </div>
          {/* Third Image Card */}
          <div className="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
            <img
              className="h-full object-cover transition-all group-hover:scale-125"
              src={slides.imgSrc3 }
              alt="image"
            />
          </div>
          {/* Fourth Image Card */}
          <div className="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
            <img
              className="h-full object-cover transition-all group-hover:scale-125"
              src={slides.imgSrc4 }
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
