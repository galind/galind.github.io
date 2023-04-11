window.onload = function() {
  Particles.init({
    selector: '.background',
    maxParticles: 450,
    sizeVariations: 2,
    speed: 0.1,
    color: '#ffffff',
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 200
        }
      }, {
        breakpoint: 425,
        options: {
          maxParticles: 100
        }
      }, {
        breakpoint: 320,
        options: {
          maxParticles: 0
        }
      }
    ]
  });
};
