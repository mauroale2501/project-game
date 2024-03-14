// import slide1 from "../assets/slide1.jpeg";
//import slide2 from "../assets/slide2.jpeg";
import slide3 from "../assets/slide3.jpeg";

import { Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomeSimple.css";

const HomeSimple = () => {
  const heroData = {
    id: 2,
    image: slide3,
    title: "Welcome to Logic-Lab",
    description: "Accelerate Your Hiring Process with Smart Choices",
  };
  return (
    <section id="home" className="hero-block">
      <Carousel>
        <CarouselItem key={heroData.id}>
          <img
            className="d-block w-100"
            src={heroData.image}
            alt={"hero slide: " + heroData.id}
          />
          <CarouselCaption>
            <h1>{heroData.title}</h1>
            <h3>{heroData.description}</h3>
            <a href="/Home" className="btn btn-primary">
              Start
            </a>
          </CarouselCaption>
        </CarouselItem>
      </Carousel>
    </section>
  );
};

export default HomeSimple;
