import selectionFilter from "../../utils/selection-filter";

test("selectionFilter with legitimate data", () => {
  const series = [
    {
        id: "series-1x",
        title: "Great series...",
        description: "Great series...",
        genre: "documentaries",
        maturity: "15",
        slug: "best-series-ever",
    }
  ];

  const films = [
    {
      id: "film-1x",
      title: "The Prestige",
      description: "Great film...",
      genre: "drama",
      maturity: "15",
      slug: "the-prestige",
    },
  ];

  const slides = selectionFilter({ series, films });
  expect(slides.films[0].title).toBe("Drama");
  expect(slides.films[0].data[0].description).toBe("Great film...");
  expect(slides.films[0].data[0].genre).toBe("drama");
  expect(slides.films[0].data[0].maturity).toBe("15");
  expect(slides.films[0].data[0].slug).toBe("the-prestige");

  expect(slides.series[0].title).toBe("Documentaries");
  expect(slides.series[0].data[0].title).toBe("Great series...");
  expect(slides.series[0].data[0].description).toBe("Great series...");
  expect(slides.series[0].data[0].genre).toBe("documentaries");
  expect(slides.series[0].data[0].maturity).toBe("15");
  expect(slides.series[0].data[0].slug).toBe("best-series-ever");
});

test("selectionFilter with no data", () => {
  const slides = selectionFilter();
  expect(slides.series[0].title).toBe("Documentaries");
  expect(slides.films[0].title).toBe("Drama");
  expect(slides.series[0].data).toBe(undefined);
  expect(slides.films[0].data).toBe(undefined);
});
