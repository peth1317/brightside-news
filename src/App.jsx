import React, { useState, useEffect } from "react";

export default function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://gnews.io/api/v4/top-headlines?lang=en&token=44230aaed9be4ea88e25022b36905175&max=10"
        );
        const data = await response.json();
        setNews(data.articles || []);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <main style={{ padding: '1.5rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#0070f3' }}>BrightSide News</h1>
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading news...</p>
      ) : (
        news.map((item, index) => (
          <div key={index} style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            margin: '2rem 0',
            borderRadius: '1rem',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.85)', padding: '1rem' }}>
              <h2><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a></h2>
              <p><strong>Source:</strong> {item.source.name}</p>
              <p>{item.description}</p>
              <p style={{ color: 'green', fontWeight: 'bold' }}>
                BrightSide View: Even in difficult news, we can see global awareness and action growing.
              </p>
            </div>
          </div>
        ))
      )}
    </main>
  );
}
