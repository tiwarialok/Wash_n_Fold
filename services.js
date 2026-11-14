// Add future services here. The site creates a card for every entry automatically.
const services = [
  {
    name: "Wash & Fold",
    description: "Everyday washing and neat folding",
    price: 79,
    unit: "per kg",
  },
  {
    name: "Wash & Iron",
    description: "Washed, dried and professionally ironed",
    price: 99,
    unit: "per kg",
  },
  {
    name: "Steam Iron",
    description: "Steam ironing for a crisp finish",
    price: 79,
    unit: "per kg",
  },
  {
    name: "Express",
    description: "Priority service · approximately 24 hours",
    price: 199,
    unit: "per kg",
    badge: "24 hour service",
  },
  {
    name: "Premium",
    description: "Enhanced care for your garments",
    price: 225,
    unit: "per kg",
  },
  {
    name: "Premium Express",
    description: "Premium care with express turnaround",
    price: 299,
    unit: "per kg",
    badge: "24 hour service",
  },
];

const grid = document.querySelector("#service-grid");

grid.innerHTML = services
  .map(
    ({ name, description, price, unit, badge }) => `
      <article class="service-card">
        ${badge ? `<p class="service-card__badge">${badge}</p>` : ""}
        <h2>${name}</h2>
        <p class="service-card__description">${description}</p>
        <div class="price" aria-label="${name}, ${price} rupees ${unit}">
          <span class="price__amount">₹${price}</span>
          <span class="price__unit">${unit}</span>
        </div>
      </article>
    `,
  )
  .join("");

document.querySelector("#year").textContent = new Date().getFullYear();
