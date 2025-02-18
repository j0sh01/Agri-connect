import { produceList } from './produce'; // Import the produce list from the produce API route

let purchases = [];

export default async function handler(req, res) {
  // const session = await getSession({ req });

  // if (!session) {
  //   console.log('Unauthorized access attempt');
  //   return res.status(401).json({ message: 'Unauthorized' });
  // }

  switch (req.method) {
    case 'POST':
      const { produceId, quantity } = req.body;
      console.log(`Received purchase request for produceId: ${produceId} and quantity: ${quantity}`);

      const produce = produceList.find((item) => item.id === produceId);
      console.log(`Found produce: ${JSON.stringify(produce)}`);

      if (!produce || produce.quantity < quantity) {
        console.log('Produce not available or insufficient quantity');
        return res.status(400).json({ message: 'Produce not available or insufficient quantity' });
      }

      // Simulate purchase
      produce.quantity -= quantity;
      const newPurchase = { id: Date.now().toString(), produceId, quantity, farmerId: produce.farmerId, total: quantity * produce.price };
      purchases.push(newPurchase);

      console.log('Purchase successful:', newPurchase);
      return res.status(201).json(newPurchase);

    case 'GET':
      res.status(200).json(purchases);
      break;

    default:
      console.log('Method not allowed');
      return res.status(405).json({ message: 'Method not allowed' });
  }
}
