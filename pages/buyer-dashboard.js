import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const BuyerDashboard = () => {
  const [produceList, setProduceList] = useState([]);
  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    fetchProduce();
  }, []);

  const fetchProduce = async () => {
    try {
      const response = await fetch('/api/produce');
      const data = await response.json();
      console.log('Fetched produce:', data);
      setProduceList(data);
    } catch (error) {
      console.error('Failed to fetch produce:', error);
      alert('Failed to fetch produce. Please try again.');
    }
  };

  const handleQuantityChange = (produceId, value) => {
    setQuantity({ ...quantity, [produceId]: value });
  };

  const handlePurchase = async (produceId) => {
    const purchaseQuantity = quantity[produceId] || 1; // Default to 1 if no quantity specified
    console.log(`Attempting to purchase produceId: ${produceId}, quantity: ${purchaseQuantity}`);
    
    try {
      const response = await fetch('/api/purchase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ produceId, quantity: purchaseQuantity }),
      });

      const data = await response.json();
      console.log('Purchase response:', data);

      if (response.ok) {
        alert('Purchase successful!');
        fetchProduce(); // Refresh produce list
      } else {
        alert(`Purchase failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Purchase failed:', error);
      alert('Purchase failed. Please try again.');
    }
  };

  return (
    // <Layout>
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-6">Buyer Dashboard</h2>
        <div>
          <h3 className="text-xl font-semibold mb-4">Available Produce</h3>
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
                    <div className="flex items-center space-x-4">
                      <input
                        type="number"
                        min="1"
                        max={produce.quantity}
                        value={quantity[produce.id] || ''}
                        onChange={(e) => handleQuantityChange(produce.id, e.target.value)}
                        className="w-20 p-2 border rounded"
                        placeholder="Qty"
                      />
                      <button
                        onClick={() => handlePurchase(produce.id)}
                        className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No produce available at the moment.</p>
          )}
        </div>
      </div>
    // </Layout>
  );
};

export default BuyerDashboard;
