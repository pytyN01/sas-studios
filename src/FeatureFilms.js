import React from "react";

const slides = [
  {
    title: "X-Men",
    subtitle: "2000",
    description: "Director: Bryan Singer",
    image: "/XM.jpg",
  },
  {
    title: "Star Trek: Into Darkness",
    subtitle: "2013",
    description: "Director: J.J. Abrams",
    image: "/ST.jpg",
  },
  {
    title: "Solaris",
    subtitle: "1972",
    description: "Director: Andrei Tarkovsky",
    image: "/S.jpg",
  },
  {
    title: "Resident Evil: Retribution",
    subtitle: "2012",
    description: "Director: Paul W. S. Anderson",
    image: "/RER.jpg",
  },
  {
    title: "Men In Black",
    subtitle: "1997",
    description: "Director: Barry Sonnenfeld; F. Gary Gray",
    image: "/MIB.jpg",
  },
  {
    title: "Mission Impossible 3",
    subtitle: "2006",
    description: "Director: J.J. Abrams",
    image: "/MI3.jpg",
  },
  {
    title: "Ironman 3",
    subtitle: "2013",
    description: "Director: Shane Black",
    image: "/IM3.jpg",
  },
  {
    title: "The Dark Knight",
    subtitle: "2008",
    description: "Director: Christopher Nolan",
    image: "/DK.jpg",
  },
  {
    title: "Angeles & Demons",
    subtitle: "2009",
    description: "Director: Ron Howard",
    image: "/A&D.jpg",
  },
  {
    title: "Avatar",
    subtitle: "2008",
    description: "Director: James Cameron",
    image: "/A.jpg",
  },
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: slides.length - 1,
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function FeatureFilms() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="slides">
      <button
        className="slideBTN leftBTN"
        onClick={() => dispatch({ type: "PREV" })}
      >
        ‹
      </button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}

      <button
        className="slideBTN rightBTN"
        onClick={() => dispatch({ type: "NEXT" })}
      >
        ›
      </button>
    </div>
  );
}
