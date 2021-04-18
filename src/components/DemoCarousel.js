import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React,{Component} from 'react'
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel className="Carousal">
                <div>
                    <img src="assets/images/image1.JPG" />
                    <p className="legend">Web Developer </p>
                </div>
                <div>
                    <img src="assets/images/image2.JPG" />
                    <p className="legend">Front End Developer  </p>
                </div>
                <div>
                    <img src="assets/images/image3.JPG" />
                    <p className="legend">React Js Dev</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel