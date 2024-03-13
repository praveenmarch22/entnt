import { monthNames, names, statusOptions } from "./constants";
import allitems from "./productsMockData";

const getRandomProducts = (products) => {
  const numberOfProducts = Math.floor(Math.random() * 4) + 1;
  const shuffledProducts = products.sort(() => 0.5 - Math.random());
  return shuffledProducts.slice(0, numberOfProducts);
};

const getRandomDate = () => {
  const startDate = new Date(2024, 3, 1);
  const endDate = new Date("Thu May 29 2024");
  const randomTime =
    startDate.getTime() +
    Math.random() * (endDate.getTime() - startDate.getTime());
  const randomDate = new Date(randomTime);

  const day = randomDate.getDate();
  const monthIndex = randomDate.getMonth();
  const year = randomDate.getFullYear();

  return `${day} ${monthNames[monthIndex]} ${year}`;
};

const generateMockOrderData = () => {
  const numberOfOrders = 10;
  const mockOrders = [];

  for (let i = 1; i <= numberOfOrders; i++) {
    const randomProducts = getRandomProducts(allitems);
    const order = {
      orderId: i,
      customerName: names[Math.floor(Math.random() * names.length)],
      orderDate: getRandomDate(),
      status: statusOptions[Math.floor(Math.random() * statusOptions.length)],
      products: randomProducts.map((product) => ({
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
      })),
    };
    mockOrders.push(order);
  }

  return mockOrders;
};

const mockOrders = generateMockOrderData();
export default mockOrders;
