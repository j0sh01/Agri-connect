import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const Marketplace = () => {
  const [produceList, setProduceList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProduce();
  }, []);

  const fetchProduce = async () => {
    const response = await fetch('/api/produce');
    const data = await response.json();
    setProduceList(data);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProduce = produceList.filter((produce) =>
    produce.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // <Layout>
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-6">Marketplace</h2>
        <input
          type="text"
          placeholder="Search produce"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border rounded mb-6"
        />
        <div>
          <h3 className="text-xl font-semibold mb-4">All Produce</h3>
          {filteredProduce.length > 0 ? (
            <ul className="space-y-4">
              {filteredProduce.map((produce) => (
                <li key={produce.id} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{produce.name}</p>
                      <p>Quantity: {produce.quantity} kg</p>
                      <p>Price: TZS {produce.price} per kg</p>
                      <p>Location: {produce.location}</p>
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

export default Marketplace;
