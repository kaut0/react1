import "bootstrap/dist/css/bootstrap.min.css";
import { CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Header = ({ api }) => {
  return (
    <header>
      {api.results.map((pokemon) => (
        <div key={pokemon.id}>
          <Carousel variant="dark">
            <CarouselItem interval={2500}>
                <Carousel.Caption>
                    <h1>{pokemon.name}</h1>
                </Carousel.Caption>
            </CarouselItem>
          </Carousel>
        </div>
      ))}
    </header>
  );
};

export default Header;
