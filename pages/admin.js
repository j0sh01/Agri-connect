import { useState, useEffect } from 'react';
// import Layout from '../components/Layout';

const AdminDashboard = () => {
  const [newArticle, setNewArticle] = useState({
    title: '',
    content: '',
    type: 'article', // Can be 'article' or 'video'
    videoUrl: '',
  });
  const [articles, setArticles] = useState([]);
  const [editArticle, setEditArticle] = useState(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const response = await fetch('/api/articles');
    const data = await response.json();
    setArticles(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editArticle) {
      setEditArticle({ ...editArticle, [name]: value });
    } else {
      setNewArticle({ ...newArticle, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = editArticle || newArticle;
    const response = await fetch('/api/articles', {
      method: editArticle ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      alert('Content added/updated successfully!');
      setNewArticle({ title: '', content: '', type: 'article', videoUrl: '' });
      setEditArticle(null);
      fetchArticles(); // Refresh the list
    } else {
      alert('Failed to add/update content. Please try again.');
    }
  };

  const handleEdit = (article) => {
    setEditArticle(article);
  };

  const handleDelete = async (id) => {
    const response = await fetch(`/api/articles?id=${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      alert('Article deleted successfully!');
      fetchArticles(); // Refresh the list
    } else {
      alert('Failed to delete article. Please try again.');
    }
  };

  const getEmbedUrl = (url) => {
    const videoId = url.split('v=')[1] || url.split('/live/')[1];
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId.split('?')[0]}`;
    }
    return url;
  };

  return (
    // <Layout>
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-6">Admin Dashboard</h2>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              value={editArticle ? editArticle.title : newArticle.title}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Type</label>
            <select
              name="type"
              value={editArticle ? editArticle.type : newArticle.type}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="article">Article</option>
              <option value="video">Video</option>
            </select>
          </div>
          {newArticle.type === 'article' ? (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Content</label>
              <textarea
                name="content"
                placeholder="Enter content"
                value={editArticle ? editArticle.content : newArticle.content}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              ></textarea>
            </div>
          ) : (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Video URL</label>
              <input
                type="url"
                name="videoUrl"
                placeholder="Enter video URL"
                value={editArticle ? editArticle.videoUrl : newArticle.videoUrl}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            {editArticle ? 'Update Content' : 'Add Content'}
          </button>
        </form>

        <div>
          <h3 className="text-xl font-semibold mb-4">Posted Articles</h3>
          {articles.length > 0 ? (
            <ul className="space-y-4">
              {articles.map((article) => (
                <li key={article.id} className="p-4 border rounded-lg">
                  <h3 className="text-xl font-semibold">{article.title}</h3>
                  {article.type === 'article' ? (
                    <p>{article.content}</p>
                  ) : (
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={getEmbedUrl(article.videoUrl)}
                        title={article.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  )}
                  <div className="flex space-x-4 mt-4">
                    <button
                      onClick={() => handleEdit(article)}
                      className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(article.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No articles available at the moment.</p>
          )}
        </div>
      </div>
    // {/* </Layout> */}
  );
};

export default AdminDashboard;
