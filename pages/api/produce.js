// import { getSession } from 'next-auth/react';

// // In-memory storage for produce (replace with a database later)
// let produceList = [];

// export default async function handler(req, res) {
//   const session = await getSession({ req });

//   if (!session) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   switch (req.method) {
//     case 'GET':
//       // Fetch produce for the logged-in farmer
//       const farmerProduce = produceList.filter((p) => p.farmerId === session.user.id);
//       res.status(200).json(farmerProduce);
//       break;

//     case 'POST':
//       // Add new produce
//       const newProduce = { ...req.body, id: Date.now().toString() };
//       produceList.push(newProduce);
//       res.status(201).json(newProduce);
//       break;

//     case 'DELETE':
//       // Delete produce
//       const { id } = req.query;
//       produceList = produceList.filter((p) => p.id !== id);
//       res.status(200).json({ message: 'Produce deleted' });
//       break;

//     default:
//       res.status(405).json({ message: 'Method not allowed' });
//   }
// }

// import { getSession } from 'next-auth/react';

// export let produceList = [];

// export default async function handler(req, res) {
//   // const session = await getSession({ req });

//   // if (!session) {
//   //   return res.status(401).json({ message: 'Unauthorized' });
//   // }

//   console.log('API Request:', req.method);

//   switch (req.method) {
//     case 'GET':
//       const farmerProduce = produceList.filter((p) => p.farmerId === 'test-id'); // Mock farmerId
//       res.status(200).json(farmerProduce);
//       break;

//     case 'POST':
//       console.log('New Produce Data:', req.body);
//       const newProduce = { ...req.body, id: Date.now().toString() };
//       produceList.push(newProduce);
//       res.status(201).json(newProduce);
//       break;

//     case 'PUT':
//       console.log('Update Produce Data:', req.body);
//       produceList = produceList.map((p) =>
//         p.id === req.body.id ? { ...req.body } : p
//       );
//       res.status(200).json(req.body);
//       break;

//     case 'DELETE':
//       const { id } = req.query;
//       produceList = produceList.filter((p) => p.id !== id);
//       res.status(200).json({ message: 'Produce deleted' });
//       break;

//     default:
//       res.status(405).json({ message: 'Method not allowed' });
//   }
// }

export let produceList = [];

export default async function handler(req, res) {
  console.log('API Request:', req.method);

  switch (req.method) {
    case 'GET':
      const farmerProduce = produceList.filter((p) => p.farmerId === 'test-id'); // Mock farmerId
      res.status(200).json(farmerProduce);
      break;

    case 'POST':
      console.log('New Produce Data:', req.body);
      const newProduce = { ...req.body, id: Date.now().toString() };
      produceList.push(newProduce);
      res.status(201).json(newProduce);
      break;

    case 'PUT':
      console.log('Update Produce Data:', req.body);
      produceList = produceList.map((p) =>
        p.id === req.body.id ? { ...req.body } : p
      );
      res.status(200).json(req.body);
      break;

    case 'DELETE':
      const { id } = req.query;
      produceList = produceList.filter((p) => p.id !== id);
      res.status(200).json({ message: 'Produce deleted' });
      break;

    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
}
