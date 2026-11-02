
import "./Slideshow.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import anthony from "../player/images/anthony.png";
import victorw from "../player/images/victorw.png";
import sga from "../player/images/sga.png";

const slides = [
    {
        name: "ANTHONY EDWARDS",
        team: "MINNESOTA TIMBERWOLVES",
        image: anthony,
        link: "/players/anthony"
    },
    {
        name: "VICTOR WEMBANYAMA",
        team: "SAN ANTONIO SPURS",
        image: victorw,
        link: "/players/victorw"
    },
    {
        name: "SHAI GILGEOUS-ALEXANDER",
        team: "OKLAHOMA CITY THUNDER",
        image: sga,
        link: "/players/sga"
    }
];

const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return;

        const interval = setInterval(() => {
            setCurrentSlide((previous) => (previous + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [paused]);

    const nextSlide = () => {
        setCurrentSlide((previous) => (previous + 1) % slides.length);
    };

    const previousSlide = () => {
        setCurrentSlide((previous) =>
            (previous - 1 + slides.length) % slides.length
        );
    };

    const slide = slides[currentSlide];

    return (
        <section
            id="featured-slideshow"
            aria-label="Featured NBA players"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                    setPaused(false);
                }
            }}
        >
            <p className="slideshow-label">AROUND THE LEAGUE</p>
            <h2>FEATURED PLAYERS</h2>

            <div className="slideshow-content">
                <button
                    className="slide-arrow"
                    onClick={previousSlide}
                    aria-label="Previous player"
                    type="button"
                >
                    &#10094;
                </button>

                <div className="slide-player">
                    <img src={slide.image} alt={slide.name} />

                    <div className="slide-info">
                        <h3>{slide.name}</h3>
                        <p>{slide.team}</p>
                        <Link to={slide.link} className="slide-link">
                            VIEW STATS
                        </Link>
                    </div>
                </div>

                <button
                    className="slide-arrow"
                    onClick={nextSlide}
                    aria-label="Next player"
                    type="button"
                >
                    &#10095;
                </button>
            </div>

            <div className="slide-dots">
                {slides.map((item, index) => (
                    <button
                        key={item.name}
                        type="button"
                        className={`slide-dot ${
                            currentSlide === index ? "active" : ""
                        }`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Show ${item.name}`}
                        aria-current={currentSlide === index ? "true" : undefined}
                    />
                ))}
            </div>
        </section>
    );
};

export default Slideshow;
