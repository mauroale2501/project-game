import slide1 from "../assets/slide1.jpeg";
import slide2 from "../assets/slide2.jpeg";
import slide3 from "../assets/slide3.jpeg";

import { Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomeSimpleTest.css";

const HomeSimple = () => {
  const heroData = [
    {
      id: 1,
      image: slide1,
      title: "Welcome to Logic-Lab",
      description: "Think out of the box",
    },
    {
      id: 2,
      image: slide2,
      title: "Welcome to Logic-Lab",
      description: "Accelerate Your Hiring Process with Smart Choices",
    },
    {
      id: 3,
      image: slide3,
      title: "Welcome to Logic-Lab",
      description: "Transform Your Hiring Practices with Us",
    },
  ];

  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <CarouselItem key={hero.id}>
              <img
                className="d-block w-100"
                src={hero.image}
                alt={"hero slide: " + hero.id}
              />
              <CarouselCaption>
                <h1>{hero.title}</h1>
                <h3>{hero.description}</h3>
                <a href="/Home" className="btn btn-primary">
                  Start
                </a>
              </CarouselCaption>
            </CarouselItem>
          );
        })}
      </Carousel>
    </section>
  );
};

export default HomeSimple;
