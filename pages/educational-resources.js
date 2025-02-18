import { useState, useEffect } from 'react';
// import Layout from '../components/Layout';
import Footer from '@/components/Footer'; // Ensure the import path is correct

const EducationalResources = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const response = await fetch('/api/articles');
    const data = await response.json();
    setArticles(data);
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
    <>
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-6">Educational Resources</h2>
        <div>
          {articles.length > 0 ? (
            <ul className="space-y-4">
              {articles.map((article) => (
                <li key={article.id} className="p-4 border rounded-lg">
                  <h3 className="text-xl font-semibold">{article.title}</h3>
                  {article.type === 'article' ? (
                    <p>{article.content}</p>
                  ) : (
                    <div className="aspect-w-16 aspect-h-20">
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
                </li>
              ))}
            </ul>
          ) : (
            <p>No articles available at the moment.</p>
          )}
        </div>
      </div>

      {/* Move the Footer outside of the main container div */}
      <Footer />
      {/*</Layout> */}
    </>
  );
};

export default EducationalResources;


