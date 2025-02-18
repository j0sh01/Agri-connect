// pages/api/products.js

// In-memory product list (replace with a database in production)
const products = [
    {
      id: '1',
      name: 'Organic Fertilizer',
      description: 'Boost your crop yield with our organic fertilizer.',
      price: 50,
      image: '/images/organic-fertilizer.jpg', // Ensure this image exists in public/images
    },
    {
      id: '2',
      name: 'Insecticide Spray',
      description: 'Protect your crops from pests with our effective insecticide.',
      price: 30,
      image: '/images/insecticide-spray.jpg',
    },
    // Add more products as needed
  ];
  
  export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json(products);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  }
  