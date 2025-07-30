import type { Slides } from "./Slide.types";
// Criando com css modules para não ter conflitos com outras classes
import styles from "./Slide.module.css";
import React from "react";

const Slide = ({ slides }: Slides) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  // Sobre o position é relevante ter em mente que não
  // pode ser utilizado um tamanho fixo como parametro
  // para aumentar ou diminuir, pois o tamanho de tela é
  // bastante relativo e isso pode mudar de ambiente,
  // mobile, web, notebook, desktop, wide, e por ai vai.
  // para isso com o react conseguiramos isso com a referência do elemento
  // useRef() e com isso conseguiremos informações de tamanho e posicionamento

  React.useEffect(() => {
    // Esse método consegui obter tanto a posição do elemento referenciado quando o tamanho e etc...
    const width = contentRef?.current?.getBoundingClientRect()?.width;
    
    setPosition(-(active * (width || 0)));
  }, [active]);

  const slidePrev = () => {
    if (active > 0) setActive(active - 1);
  };

  const slideNext = () => {
    if(active < (slides.length - 1)) setActive(active + 1);
  };

  return (
    <section className={styles.container}>
      {/* transform: translateX - serve para mover um elemento no eixoX (Horizontal), aqui ele usa valores negativos para fazer essa modificação */}
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.item}>
            {slide.text}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Próximo</button>
      </nav>
    </section>
  );
};

export default Slide;
