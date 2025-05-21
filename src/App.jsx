import { useState, useEffect } from "react";

const mockNews = [
  {
    title: "Global Economic Downturn Expected",
    source: "Reuters",
    summary:
      "Global economic growth is projected to slow down due to inflation and geopolitical tensions.",
    positiveAngle:
      "While economic challenges persist, this period may drive innovation, smarter spending, and greater investment in sustainable industries.",
    backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1350&q=80')"
  },
  {
    title: "Wildfires Continue to Spread in Canada",
    source: "BBC",
    summary:
      "Large wildfires in western Canada have forced evacuations and strained firefighting resources.",
    positiveAngle:
      "The wildfires are highlighting the urgent need for climate action and may accelerate global collaboration on environmental policies.",
    backgroundImage: "url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1350&q=80')"
  }
];

export default function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(mockNews);
  }, []);

  return (
    <main style={{ padding: '1.5rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#0070f3' }}>BrightSide News</h1>
      {news.map((item, index) => (
        <div key={index} style={{
          backgroundImage: item.backgroundImage,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          margin: '2rem 0',
          borderRadius: '1rem',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.85)', padding: '1rem' }}>
            <h2>{item.title}</h2>
            <p><strong>Source:</strong> {item.source}</p>
            <p>{item.summary}</p>
            <p style={{ color: 'green', fontWeight: 'bold' }}>BrightSide View: {item.positiveAngle}</p>
          </div>
        </div>
      ))}
    </main>
  );
}
