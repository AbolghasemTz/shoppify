import slideOne from "../../assets/images/slideOne.webp";
import slideTwo from "../../assets/images/slideTwo.webp";

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide relative shadow-lg  md:h-[400px] mt-24"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <img
            src={slideOne}
            className="block h-[180px] md:h-[500px] w-full"
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-3xl text-gray-900 font-bold">
              Pure Water Quality
            </h5>
            <p className="text-2xl text-gray-700 font-bold">
              Some representative placeholder content for the second slide.
            </p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src={slideTwo}
            className="block h-[180px] md:h-[500px] w-full"
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-3xl text-gray-900 font-bold">
              Pure Water Quality
            </h5>
            <p className="text-2xl text-gray-700 font-bold">
              Some representative placeholder content for the second slide.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
