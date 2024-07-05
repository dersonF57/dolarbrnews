import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './News.css'; // Importando o arquivo de estilos
import '../index.css';

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = process.env.REACT_APP_NEWS_API_KEY; // Pegando a chave da API do arquivo .env
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'dólar',
            language: 'pt',
            sortBy: 'publishedAt',
            apiKey: apiKey,
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
      {articles.length > 0 ? (
        <>
          {/* Notícia principal */}
          <div className="main-news mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-2/3">
                <img src={articles[0].urlToImage} alt={articles[0].title} className="w-full h-64 object-cover rounded-lg" />
              </div>
              <div className="md:w-1/3 flex flex-col justify-between">
                <div>
                  <a href={articles[0].url} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{articles[0].title}</h3>
                  </a>
                  <p className="text-gray-600 mb-4">{articles[0].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lista de notícias médias */}
          <div className="medium-news grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {articles.slice(1, 4).map((article) => (
              <div key={article.url} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-105">
                {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />}
                <div className="p-6">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-xl font-semibold text-gray-800">{article.title}</h3>
                  </a>
                  <p className="mt-2 text-gray-600">{article.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Lista de notícias menores */}
          <div className="small-news grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(4).map((article) => (
              <div key={article.url} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-105">
                {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="w-full h-32 object-cover" />}
                <div className="p-6">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-lg font-semibold text-gray-800">{article.title}</h3>
                  </a>
                  <p className="mt-2 text-gray-600">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-600">Carregando notícias...</p>
      )}
    </div>
  );
};

export default News;
