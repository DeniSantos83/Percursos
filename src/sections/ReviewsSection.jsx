import { useEffect, useRef, useState } from "react";
import RevealOnScroll from "../components/RevealOnScroll";

const googleReviewsUrl =
  "https://www.google.com/search?sca_esv=31fa6de42034ce83&sxsrf=APpeQnsl6oRT-HIXSTkWMcryHK2fQY41OQ:1789561529904&kgmid=/g/11tmqk01h3&q=Taise+Brasil&shem=dlvs1,epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/uni/m1/1&kgs=5cbf6d30c03ad103&utm_source=dlvs1,epsd1,ltae,rimspwouoe,sh/x/loc/uni/m1/1#lrd=0x71ab373723231ef:0x70e0dee73355d3c9,1,,,,";

const reviews = [
  {
    name: "Larissa Souza Bomfim",
    initials: "LS",
    time: "2 anos atrás",
    text: "Uma profissional ímpar e iluminada. Através da metodologia terapêutica da Dra. Taíse, pude sentir melhoras significativas na minha filha, que demonstrava grandes sinais de ansiedade infantil.",
  },
  {
    name: "Felipe Freitas",
    initials: "FF",
    time: "3 anos atrás",
    text: "Minha experiência tem sido muito boa! Me sinto bem no ambiente e o apoio profissional tem me deixado mais reflexivo e ponderado!",
  },
  {
    name: "Filipe Crespo",
    initials: "FC",
    time: "3 anos atrás",
    text: "Excelente profissional, transcende a essência humana, tem um perfil colaborativo a nos ajudar a melhorar como profissional e pessoa. Graças à Dra. Taise, melhorei muito como pessoa. Super indico.",
  },
  {
    name: "Rafaela Santana",
    initials: "RS",
    time: "2 anos atrás",
    text: "Hoje, digo que é de extrema importância o tratamento psicológico em minha vida e tem me ajudado bastante a lidar com a perda e frustrações da vida.",
  },
  {
    name: "Diogo Santana",
    initials: "DS",
    time: "2 anos atrás",
    text: "Eu estou gostando bastante do tratamento desenvolvido pela Taise Brasil!",
  },
  {
    name: "Andreza Silva",
    initials: "AS",
    time: "5 dias atrás",
    text: "Uma profissional excelente! Oferece um acolhimento ao paciente da forma mais acolhedora e humana possível!",
  },
  {
    name: "Carlos Nunes",
    initials: "CN",
    time: "5 dias atrás",
    text: "É uma referência em terapia e saúde mental. Profissional altamente qualificada, pautada na escuta clínica qualificada. Recomendo!",
  },
  {
    name: "Nando Gama",
    initials: "NG",
    time: "5 dias atrás",
    text: "A Taise Brasil é uma profissional fantástica! Desde o início do acompanhamento, sempre me senti acolhido e respeitado em um espaço de escuta, confiança e ausência de julgamentos.",
  },
];

export default function ReviewsSection() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToReview = (index) => {
    const track = trackRef.current;
    const target = track?.querySelector(`[data-review-index="${index}"]`);

    if (!track || !target) return;

    track.scrollTo({
      left: target.offsetLeft - track.offsetLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const moveCarousel = (direction) => {
    const nextIndex =
      direction === "next"
        ? (activeIndex + 1) % reviews.length
        : (activeIndex - 1 + reviews.length) % reviews.length;

    goToReview(nextIndex);
  };

  const handleCarouselKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveCarousel("next");
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveCarousel("previous");
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    let frameId;

    const updateActiveReview = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const slides = [...track.querySelectorAll("[data-review-index]")];
        const closest = slides.reduce(
          (current, slide, index) => {
            const distance = Math.abs(slide.offsetLeft - track.offsetLeft - track.scrollLeft);
            return distance < current.distance ? { index, distance } : current;
          },
          { index: 0, distance: Number.POSITIVE_INFINITY },
        );

        setActiveIndex(closest.index);
      });
    };

    track.addEventListener("scroll", updateActiveReview, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      track.removeEventListener("scroll", updateActiveReview);
    };
  }, []);

  return (
    <section id="avaliacoes" className="section reviews-section">
      <div className="container">
        <RevealOnScroll delay={0} duration={800} distance={28}>
          <div className="reviews-heading">
            <div>
              <p className="badge">avaliações no Google</p>
              <h2 className="title-lg">O que dizem sobre o atendimento</h2>
              <p className="text reviews-intro">
                Experiências compartilhadas por pessoas que passaram pelo processo terapêutico.
              </p>
            </div>

            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="google-rating"
              aria-label="Ver todas as avaliações de Taise Brasil no Google"
            >
              <span className="google-rating-score">5,0</span>
              <span>
                <span className="review-stars" aria-label="5 de 5 estrelas">★★★★★</span>
                <small>8 avaliações no Google</small>
              </span>
            </a>
          </div>
        </RevealOnScroll>

        <div className="reviews-carousel">
          <div
            ref={trackRef}
            className="reviews-track"
            aria-label="Carrossel de avaliações"
            tabIndex={0}
            onKeyDown={handleCarouselKeyDown}
          >
            {reviews.map((review, index) => (
              <div
                key={review.name}
                className="review-slide"
                data-review-index={index}
              >
                <RevealOnScroll
                  delay={(index % 3) * 90}
                  duration={700}
                  distance={22}
                >
                  <article className="review-card">
                    <div className="review-card-top">
                      <span className={`review-avatar review-avatar-${(index % 4) + 1}`} aria-hidden="true">
                        {review.initials}
                      </span>
                      <div>
                        <h3>{review.name}</h3>
                        <p>{review.time}</p>
                      </div>
                      <span className="google-mark" aria-label="Google">G</span>
                    </div>

                    <div className="review-stars" aria-label="5 de 5 estrelas">★★★★★</div>
                    <p className="review-text">“{review.text}”</p>
                  </article>
                </RevealOnScroll>
              </div>
            ))}
          </div>

          <div className="carousel-controls">
            <div className="carousel-arrows">
              <button
                type="button"
                className="carousel-arrow"
                onClick={() => moveCarousel("previous")}
                aria-label="Avaliação anterior"
              >
                ←
              </button>
              <button
                type="button"
                className="carousel-arrow"
                onClick={() => moveCarousel("next")}
                aria-label="Próxima avaliação"
              >
                →
              </button>
            </div>

            <div className="carousel-dots" aria-label="Selecionar avaliação">
              {reviews.map((review, index) => (
                <button
                  key={review.name}
                  type="button"
                  className={`carousel-dot ${activeIndex === index ? "carousel-dot-active" : ""}`}
                  onClick={() => goToReview(index)}
                  aria-label={`Ir para a avaliação ${index + 1}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        </div>

        <RevealOnScroll delay={120} duration={750} distance={20}>
          <div className="reviews-action">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              Ver todas as avaliações no Google
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
