export function reveal(node) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    },
  };
}
