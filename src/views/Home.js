import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Footer from "../components/Footer/Footer";
import Navbar2 from "../components/Navbar/Navbar2";
import { Carousel } from "react-bootstrap";
import Hero4 from "../../src/assets/img/hero4-min.jpg";
import Hero3 from "../../src/assets/img/hero3-min.jpg";
import Hero2 from "../../src/assets/img/hero2-min.jpg";
export default function Home() {
  return (
    <>
      <div className="App">
        <Navbar2 />
        <>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 h-75"
                src={Hero4}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Hero3} alt="Second slide" />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Hero2} alt="Third slide" />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </>
        <ItemListContainer></ItemListContainer>
        <Footer />
      </div>
    </>
  );
}
