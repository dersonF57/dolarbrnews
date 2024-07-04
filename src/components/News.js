import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './News.css';  // Importando o arquivo de estilos

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'dólar',
            language: 'pt',
            sortBy: 'publishedAt',
            apiKey: 'f4ad8d32bf894dcca1d137e1b1e800f7',  // substitua pela sua chave de API
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
    <h2 className="text-4xl font-bold text-purple-600 mb-8 text-center">Notícias sobre o Dólar</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={article.url} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-500 ease-in-out delay-[index * 100ms] hover:-translate-y-1">
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{article.title}</h3>
              <p className="mt-2 text-gray-600">{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="mt-4 block text-center">
                <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 cursor-pointer">Leia mais</button>
              </a>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">Carregando notícias...</p>
      )}
    </div>
  </div>
  );
};

export default News;
