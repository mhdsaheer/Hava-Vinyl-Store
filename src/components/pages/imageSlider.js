import React, { useEffect, useRef } from 'react';
import './imageSlider.css';

const ImageSlider = () => {
    const scrollContainerRef = useRef(null);
    const sectionRef = useRef(null);
    const animationIdRef = useRef(null);
    const currentXRef = useRef(0);
    const targetXRef = useRef(0);
    const containerWidthRef = useRef(0);
    const config = {
        ease: 0.05,    
        scrollRatio: 0.4, 
        startOffset: 0.1,    
        endOffset: 0.9,      
        maxVisibleEnd: 0.8   
    };

    const imageUrls = [
        require('../images/slider1.jpg'),
        require('../images/slider2.jpg'),
        require('../images/slider3.jpg'),
        require('../images/slider4.jpg'),
        require('../images/slider5.jpg'),
        require('../images/slider6.jpg'),
        require('../images/slider7.jpg'),
        require('../images/slider8.jpg'),
        require('../images/slider9.jpg'),
        require('../images/slider10.jpg')
    ];

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        const section = sectionRef.current;
        const calculateContainerWidth = () => {
            const cards = scrollContainer.querySelectorAll('.card');
            const gap = window.innerWidth * 0.02;
            const width = Array.from(cards).reduce((total, card) => {
                return total + card.offsetWidth + gap;
            }, 0) - gap;
            containerWidthRef.current = width;
            scrollContainer.style.width = `${width}px`;
        };
        const animate = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const startScroll = sectionTop - windowHeight + (windowHeight * config.startOffset);
            const endScroll = sectionTop + (sectionHeight * config.endOffset);
            
            if (scrollY > startScroll && scrollY < endScroll) {
                const scrollProgress = (scrollY - startScroll) / (endScroll - startScroll);
                const maxScroll = containerWidthRef.current - (window.innerWidth * config.maxVisibleEnd);
                targetXRef.current = scrollProgress * maxScroll * config.scrollRatio;
            } else if (scrollY <= startScroll) {
                targetXRef.current = 0; 
            } else if (scrollY >= endScroll) {
                targetXRef.current = containerWidthRef.current - (window.innerWidth * config.maxVisibleEnd); // Snap to max position
            }
            
            currentXRef.current += (targetXRef.current - currentXRef.current) * config.ease;
            scrollContainer.style.transform = `translateX(${-currentXRef.current}px)`;
            
            animationIdRef.current = requestAnimationFrame(animate);
        };
        currentXRef.current = 0;
        calculateContainerWidth();
        scrollContainer.style.transform = `translateX(${-currentXRef.current}px)`;
        
        animate();

        const handleResize = () => {
            calculateContainerWidth();
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
            animate();
        };

        window.addEventListener('resize', handleResize);
        return () => {
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
            window.removeEventListener('resize', handleResize);
        };
    });

    return (
        <div className="horizontal-slider-container" >
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
            
            <section className="section" ref={sectionRef}>
                <div className="horizontal-scroll-wrapper" ref={scrollContainerRef}>
                    {imageUrls.map((url, index) => (
                        <div className="card" key={index}>
                            <img src={url} alt={`Project ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ImageSlider;