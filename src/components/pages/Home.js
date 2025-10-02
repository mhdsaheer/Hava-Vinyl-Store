import React, { useEffect, useState } from 'react';
import './Home.css';
import heroImage1 from '../images/header-disk.svg';
import heroImage2 from '../images/hero-image2.jpg';
import heroImage3 from '../images/hero-image3.svg';

import retroImage from '../images/retro-vinyl-scene.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import products from './Products.js';
import ImageSlider from './imageSlider.js';

import { Link } from 'react-router-dom';


const carouselItems = [
  {
    id: 1,
    titleParts: ["Select a Genre which", "defines your BEING."],
    subtitle: "Flat 15% Discount!",
    price: "$29.99",
    buttonText: "Shop Now",
    image: heroImage1,
    textPosition: "left",
    animation: "fade-up"
  },
  {
    id: 2,
    titleParts: ["New Arrivals", "Just for You"],
    subtitle: "Summer Collection!",
    price: "$19.99",
    buttonText: "Explore",
    image: heroImage2,
    textPosition: "right",
    animation: "fade-left"
  },
  {
    id: 3,
    titleParts: ["Premium Quality At", "Affordable Prices"],
    subtitle: "Limited Time Offer!",
    price: "$24.99",
    buttonText: "View Deals",
    image: heroImage3,
    textPosition: "left",
    animation: "fade-right"
  }
];

const Home = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);
  const featuredProduct = products.filter(product => product.type === 'new');

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      startEvent: 'DOMContentLoaded'
    });


    const carousel = document.getElementById('heroCarousel');
    const handleSlideChange = () => {

      setTimeout(() => {
        AOS.refresh();
      }, 50);
    };

    if (carousel) {
      carousel.addEventListener('slid.bs.carousel', handleSlideChange);
    }


    setInitialLoad(false);

    return () => {
      if (carousel) {
        carousel.removeEventListener('slid.bs.carousel', handleSlideChange);
      }
    };
  }, []);

  useEffect(() => {
    if (!initialLoad) {
      AOS.refresh();
    }
  }, [initialLoad]);

  return (
    <>
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {carouselItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === activeIndex ? "active" : ""}
              aria-current={index === activeIndex ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-item ${index === activeIndex ? "active" : ""}`}
              data-bs-interval="5000"
            >
              <img src={item.image} className="d-block w-100" alt={`Slide ${index + 1}`} />
              <div className={`header-content ${item.textPosition === "right" ? "right-align" : ""}`}>
                <p data-aos="fade-up" data-aos-delay="100" >{item.subtitle}</p>
                <h1
                  data-aos="fade-up"
                  data-aos-delay="200"
                  
                >
                  {item.titleParts[0]}<br />{item.titleParts[1]}
                </h1>
                <h6
                  data-aos="fade-up"
                  data-aos-delay="300"
                  
                >
                  Starting from <span>{item.price}</span>
                </h6>
                <Link
                  to="/shop"
                  type="button"
                  className="btn btn-light"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  
                >
                  {item.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container second-container">
        <div className="row">
          <div className="col-lg-6 hover01" data-aos="fade-right" >
            <figure>
              <img src={retroImage} alt="Retro vinyl scene" className="img-fluid" />
            </figure>
          </div>
          <div className="col-lg-6 second-context"  >
            <p data-aos="fade-left"
              data-aos-delay="100">Welcome to hava. Store!</p>
            <h1 data-aos="fade-left"
              data-aos-delay="200">Our commitment to <br />keep this legacy alive.</h1>
            <h6 data-aos="fade-left"
              data-aos-delay="300">Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s,
              when an unknown printer</h6>
            <Link to="/shop" className="btn btn-dark" data-aos="fade-left"
              data-aos-delay="300">Shop Now</Link>
          </div>
        </div>
      </div>
      <div className="container featured-container">
        <h2 className="featured-title">FEATURED PRODUCTS</h2>
        <div className="row">
          {featuredProduct.map((product) => (
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3" key={product.id} data-aos="zoom-in">
              <div
                className="product-box"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >

                <div className="img-box">
                  <img
                    src={hoveredProduct === product.id ? product.hoverImage : product.image}
                    alt={product.name}
                    className="img-fluid product-image"
                  />
                </div>
                <div className="product-info">
                  <h5 className="product-title">{product.name}</h5>
                  <p className="product-price">${product.price}</p>
                  <Link to={`/product/${product.id}`} className="product-link">
                    <button className="btn btn-view-details">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='container-fluid explore-container'>
        <div className='explore-tile-title'><h2>Explore our <br /> <span>Collection</span></h2></div>
        <ImageSlider />
      </div>
      <div className="customised-container">
        <div className="customised-content" >
          <h2 data-aos="zoom-in"
              data-aos-delay="100">Get Your Customized Vinyl Disc</h2>
          <p data-aos="zoom-in"
              data-aos-delay="200">
            Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry.
            Lorem Ipsum has been the industry's standard dummy text <br /> ever since the 1500s
          </p>
          <a href="/" data-aos="zoom-in"
              data-aos-delay="300">Shop Vinyl</a>
        </div>

        <iframe
          width="860"
          height="510"
          src="https://www.youtube.com/embed/Yd2SW-Fys6I?controls=0&start=13&mute=1&autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        ></iframe>
      </div>

    </>
  );
};

export default Home;