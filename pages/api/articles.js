// let articles = [];

// export default function handler(req, res) {
//   switch (req.method) {
//     case 'GET':
//       res.status(200).json(articles);
//       break;

//     case 'POST':
//       const newArticle = { ...req.body, id: Date.now().toString() };
//       articles.push(newArticle);
//       res.status(201).json(newArticle);
//       break;

//     case 'PUT':
//       const updatedArticle = req.body;
//       articles = articles.map((article) =>
//         article.id === updatedArticle.id ? updatedArticle : article
//       );
//       res.status(200).json(updatedArticle);
//       break;

//     case 'DELETE':
//       const { id } = req.query;
//       articles = articles.filter((article) => article.id !== id);
//       res.status(200).json({ message: 'Article deleted' });
//       break;

//     default:
//       res.status(405).json({ message: 'Method not allowed' });
//   }
// }


let articles = [];

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(articles);
      break;

    case 'POST':
      const newArticle = { ...req.body, id: Date.now().toString() };
      articles.push(newArticle);
      res.status(201).json(newArticle);
      break;

    case 'PUT':
      const updatedArticle = req.body;
      articles = articles.map((article) =>
        article.id === updatedArticle.id ? updatedArticle : article
      );
      res.status(200).json(updatedArticle);
      break;

    case 'DELETE':
      const { id } = req.query;
      articles = articles.filter((article) => article.id !== id);
      res.status(200).json({ message: 'Article deleted' });
      break;

    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
}
