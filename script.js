(() => {
  const orbitRadius = 350; // closer to center
  const bills = document.querySelectorAll('.bill');
  const total = bills.length;

  // Initialize each bill evenly spaced
  bills.forEach((bill, i) => {
    bill.angle = (360 / total) * i; // starting angle in degrees
  });

  function animate() {
    bills.forEach(bill => {
      bill.angle += 0.3; // fixed, normal speed
      const rad = bill.angle * (Math.PI/180);
      const x = Math.cos(rad) * orbitRadius;
      const y = Math.sin(rad) * orbitRadius;
      bill.style.transform = `translate(${x}px, ${y}px)`;
    });
    requestAnimationFrame(animate);
  }

  animate();

  // X logo link
  const xLink = document.getElementById('x-link');
  if (xLink) xLink.href = 'https://x.com/i/communities/1972087756521123954';
})();
