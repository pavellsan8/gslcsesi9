import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import guitarImage1 from "../../../asset/yamaha-fg800.jpg";
import guitarImage2 from "../../../asset/ephiphone-dr-100.jpg";
import guitarImage3 from "../../../asset/taylor-110e.jpg";
import guitarBg from "../../../asset/guitarBg.jpg";
import "./homeContent.css";
import { Button } from "react-bootstrap";

function CarouselImage(props) {
  return <img src={props.src} alt={props.text} className="img-fluid" />;
}

const style = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${guitarBg})`,
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
};

function HomeContent() {
  return (
    <div className="home-page">
      <div style={style}>
        <h1 className="title-home">
          The Perfect Spot To Improve Your Performance
        </h1>
        <h3 className="subtitle-home">Learn to get your guitar here</h3>
        <Button variant="light" className="btn-start">
          Get Started
        </Button>
      </div>
      <div>
        <p className="title-product">Check Out Our Product</p>
        <div className="container-fluid w-50 mt-5 border border-1 rounded-3">
          <Carousel data-bs-theme="dark" b>
            <Carousel.Item className="p-5">
              <CarouselImage src={guitarImage1} text="First slide" />
              <Carousel.Caption>
                <h3>Yamaha FG800</h3>
                <p>A perfect guitar at the price point and the tone produced is outstanding.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="p-5">
              <CarouselImage src={guitarImage2} text="Second slide" />
              <Carousel.Caption>
                <h3>Ephiphone DR100</h3>
                <p>One of the an entry-level acoustic with the feel of something far more prestigious.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="p-5">
              <CarouselImage src={guitarImage3} text="Third slide" />
              <Carousel.Caption>
                <h3>Taylor 110e</h3>
                <p>Guitar with delivering some signature of best tone and feel Taylor is known for public.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
