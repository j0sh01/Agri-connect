// import { useSession } from 'next-auth/react';
// import { useState, useEffect } from 'react';
// // import { useRouter } from 'next/router'; // Comment this line
// import Layout from '../components/Layout';

// export default function FarmerDashboard() {
//   const { data: session, status } = useSession();
//   // const router = useRouter(); // Comment this line
//   const [produceList, setProduceList] = useState([]);
//   const [newProduce, setNewProduce] = useState({
//     name: '',
//     quantity: '',
//     price: '',
//     location: '',
//   });

//   useEffect(() => {
//     // if (status === 'loading') return; // Comment this line
//     // if (!session) router.push('/login'); // Comment this line
//     if (session) fetchProduce(); // Fetch produce if authenticated
//   }, [session, status]);

//   // Fetch produce from the backend
//   const fetchProduce = async () => {
//     const response = await fetch('/api/produce?farmerId=' + (session ? session.user.id : 'test-id'));
//     const data = await response.json();
//     setProduceList(data);
//   };

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProduce({ ...newProduce, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch('/api/produce', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ ...newProduce, farmerId: session ? session.user.id : 'test-id' }),
//     });
//     if (response.ok) {
//       fetchProduce(); // Refresh the list
//       setNewProduce({ name: '', quantity: '', price: '', location: '' }); // Reset form
//     }
//   };

//   // Handle delete produce
//   const handleDelete = async (id) => {
//     const response = await fetch('/api/produce?id=' + id, {
//       method: 'DELETE',
//     });
//     if (response.ok) {
//       fetchProduce(); // Refresh the list
//     }
//   };

//   // if (status === 'loading') { // Comment this line
//   //   return <p className="text-center mt-8">Loading...</p>; // Comment this line
//   // }

//   // if (!session) { // Comment this line
//   //   return <p className="text-center mt-8">You must be logged in to view this page.</p>; // Comment this line
//   // }

//   return (
//     <Layout>
//       <div className="max-w-4xl mx-auto p-4">
//         <h2 className="text-2xl font-semibold mb-6">Farmer Dashboard</h2>

//         {/* Add Produce Form */}
//         <form onSubmit={handleSubmit} className="mb-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Produce Name"
//               value={newProduce.name}
//               onChange={handleInputChange}
//               className="p-2 border rounded"
//               required
//             />
//             <input
//               type="number"
//               name="quantity"
//               placeholder="Quantity (kg)"
//               value={newProduce.quantity}
//               onChange={handleInputChange}
//               className="p-2 border rounded"
//               required
//             />
//             <input
//               type="number"
//               name="price"
//               placeholder="Price (per kg)"
//               value={newProduce.price}
//               onChange={handleInputChange}
//               className="p-2 border rounded"
//               required
//             />
//             <input
//               type="text"
//               name="location"
//               placeholder="Location"
//               value={newProduce.location}
//               onChange={handleInputChange}
//               className="p-2 border rounded"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
//           >
//             Add Produce
//           </button>
//         </form>

//         {/* List of Produce */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Your Produce Listings</h3>
//           {produceList.length > 0 ? (
//             <ul className="space-y-4">
//               {produceList.map((produce) => (
//                 <li key={produce.id} className="p-4 border rounded-lg">
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <p className="font-semibold">{produce.name}</p>
//                       <p>Quantity: {produce.quantity} kg</p>
//                       <p>Price: ${produce.price} per kg</p>
//                       <p>Location: {produce.location}</p>
//                     </div>
//                     <button
//                       onClick={() => handleDelete(produce.id)}
//                       className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No produce listed yet.</p>
//           )}
//         </div>
//       </div>
//     </Layout>
//   );
// }


// import { useState, useEffect } from 'react';
// import Layout from '../components/Layout';

// const mockSession = {
//   user: {
//     id: 'test-id',
//     name: 'Test User',
//     email: 'test@example.com',
//   },
// };

// export default function FarmerDashboard() {
//   const session = mockSession; // Mock session
//   const [produceList, setProduceList] = useState([]);
//   const [newProduce, setNewProduce] = useState({
//     name: '',
//     quantity: '',
//     price: '',
//     location: '',
//   });
//   const [editProduce, setEditProduce] = useState(null); // State to track the produce being edited

//   useEffect(() => {
//     fetchProduce(); // Fetch produce directly
//   }, []);

//   const fetchProduce = async () => {
//     const response = await fetch('/api/produce?farmerId=' + session.user.id);
//     const data = await response.json();
//     setProduceList(data);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (editProduce) {
//       setEditProduce({ ...editProduce, [name]: value });
//     } else {
//       setNewProduce({ ...newProduce, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const payload = editProduce || { ...newProduce, farmerId: session.user.id };
//     const response = await fetch('/api/produce', {
//       method: editProduce ? 'PUT' : 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(payload),
//     });

//     if (response.ok) {
//       fetchProduce();
//       setNewProduce({ name: '', quantity: '', price: '', location: '' });
//       setEditProduce(null);
//     }
//   };

//   const handleEdit = (produce) => {
//     setEditProduce(produce);
//   };

//   const handleDelete = async (id) => {
//     const response = await fetch('/api/produce?id=' + id, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       fetchProduce();
//     }
//   };

//   return (
//     <Layout>
//       <div className="max-w-4xl mx-auto p-4">
//         <h2 className="text-2xl font-semibold mb-6">Farmer Dashboard</h2>

//         {/* Add/Edit Produce Form */}
//         <form onSubmit={handleSubmit} className="mb-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Produce Name"
//               value={editProduce ? editProduce.name : newProduce.name}
//               onChange={handleInputChange}
//               className="p-2 border rounded"
//               required
//             />
//             <input
//               type="number"
//               name="quantity"
//               placeholder="Quantity (kg)"
//               value={editProduce ? editProduce.quantity : newProduce.quantity}
//               onChange={handleInputChange}
//               className="p-2 border rounded"
//               required
//             />
//             <input
//               type="number"
//               name="price"
//               placeholder="Price (per kg)"
//               value={editProduce ? editProduce.price : newProduce.price}
//               onChange={handleInputChange}
//               className="p-2 border rounded"
//               required
//             />
//             <input
//               type="text"
//               name="location"
//               placeholder="Location"
//               value={editProduce ? editProduce.location : newProduce.location}
//               onChange={handleInputChange}
//               className="p-2 border rounded"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
//           >
//             {editProduce ? 'Update Produce' : 'Add Produce'}
//           </button>
//         </form>

//         {/* List of Produce */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Your Produce Listings</h3>
//           {produceList.length > 0 ? (
//             <ul className="space-y-4">
//               {produceList.map((produce) => (
//                 <li key={produce.id} className="p-4 border rounded-lg">
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <p className="font-semibold">{produce.name}</p>
//                       <p>Quantity: {produce.quantity} kg</p>
//                       <p>Price: TZS {produce.price} per kg</p>
//                       <p>Location: {produce.location}</p>
//                     </div>
//                     <div className="flex space-x-4">
//                       <button
//                         onClick={() => handleEdit(produce)}
//                         className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(produce.id)}
//                         className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No produce listed yet.</p>
//           )}
//         </div>
//       </div>
//     </Layout>
//   );
// }

import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const mockSession = {
  user: {
    id: 'test-id',
    name: 'Test User',
    email: 'test@example.com',
  },
};

export default function FarmerDashboard() {
  const session = mockSession; // Mock session
  const [produceList, setProduceList] = useState([]);
  const [newProduce, setNewProduce] = useState({
    name: '',
    quantity: '',
    price: '',
    location: '',
  });
  const [editProduce, setEditProduce] = useState(null); // State to track the produce being edited
  const [sales, setSales] = useState([]); // State to track sales

  useEffect(() => {
    fetchProduce(); // Fetch produce directly
    fetchSales(); // Fetch sales directly
  }, []);

  const fetchProduce = async () => {
    const response = await fetch('/api/produce?farmerId=' + session.user.id);
    const data = await response.json();
    setProduceList(data);
  };

  const fetchSales = async () => {
    const response = await fetch('/api/purchase');
    const data = await response.json();
    const farmerSales = data.filter(purchase => purchase.farmerId === session.user.id);
    setSales(farmerSales);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editProduce) {
      setEditProduce({ ...editProduce, [name]: value });
    } else {
      setNewProduce({ ...newProduce, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = editProduce || { ...newProduce, farmerId: session.user.id };
    const response = await fetch('/api/produce', {
      method: editProduce ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      fetchProduce();
      setNewProduce({ name: '', quantity: '', price: '', location: '' });
      setEditProduce(null);
    }
  };

  const handleEdit = (produce) => {
    setEditProduce(produce);
  };

  const handleDelete = async (id) => {
    const response = await fetch('/api/produce?id=' + id, {
      method: 'DELETE',
    });

    if (response.ok) {
      fetchProduce();
    }
  };

  const calculateTotalSales = () => {
    return sales.reduce((total, sale) => total + sale.total, 0);
  };

  return (
    // <Layout>
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-6">Farmer Dashboard</h2>

        {/* Add/Edit Produce Form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Produce Name"
              value={editProduce ? editProduce.name : newProduce.name}
              onChange={handleInputChange}
              className="p-2 border rounded"
              required
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity (kg)"
              value={editProduce ? editProduce.quantity : newProduce.quantity}
              onChange={handleInputChange}
              className="p-2 border rounded"
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price (per kg)"
              value={editProduce ? editProduce.price : newProduce.price}
              onChange={handleInputChange}
              className="p-2 border rounded"
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={editProduce ? editProduce.location : newProduce.location}
              onChange={handleInputChange}
              className="p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            {editProduce ? 'Update Produce' : 'Add Produce'}
          </button>
        </form>

        {/* List of Produce */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Your Produce Listings</h3>
          {produceList.length > 0 ? (
            <ul className="space-y-4">
              {produceList.map((produce) => (
                <li key={produce.id} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{produce.name}</p>
                      <p>Quantity: {produce.quantity} kg</p>
                      <p>Price: TZS {produce.price} per kg</p>
                      <p>Location: {produce.location}</p>
                    </div>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => handleEdit(produce)}
                        className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(produce.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No produce listed yet.</p>
          )}
        </div>

        {/* Sales Data */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Your Sales</h3>
          {sales.length > 0 ? (
            <ul className="space-y-4">
              {sales.map((sale) => (
                <li key={sale.id} className="p-4 border rounded-lg">
                  <p>Produce ID: {sale.produceId}</p>
                  <p>Quantity Sold: {sale.quantity} kg</p>
                  <p>Total: TZS {sale.total}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No sales yet.</p>
          )}
          <p className="font-semibold mt-4">Total Earnings: TZS {calculateTotalSales()}</p>
        </div>
      </div>
    // </Layout>
  );
}
