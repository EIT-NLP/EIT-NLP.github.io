import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to EIT NLP</h1>
      <div className="image-container">
        <img 
          src="https://github.com/EIT-NLP/EIT-NLP.github.io/blob/main/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20241011225030.jpg?raw=true" 
          alt="EIT NLP Image 1" 
          className="home-image"
        />
        <img 
          src="https://github.com/EIT-NLP/EIT-NLP.github.io/blob/main/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20241011225041.jpg?raw=true" 
          alt="EIT NLP Image 2" 
          className="home-image"
        />
      </div>
      {/* ... 其他部分 ... */}
      
      <section className="news">
        <h2>News</h2>
        <div className="news-item">
          <h3>Fine-Tuning Large Language Models to Translate</h3>
          <p>
            This study explores the effectiveness of fine-tuning Large Language Models for translation tasks with minimal data, challenging traditional assumptions about data requirements.
          </p>
        </div>
        <div className="news-item">
          <h3>The Accuracy Paradox in RLHF</h3>
          <p>
            This research reveals a surprising paradox in human feedback reinforcement learning, where medium-accuracy reward models can outperform high-accuracy ones in language model training.
          </p>
        </div>
        <div className="news-item">
          <h3>Unveiling In-Context Learning</h3>
          <p>
            This study proposes a two-dimensional coordinate system to explain the mechanisms of in-context learning in Large Language Models, unifying conflicting views on its working principles.
          </p>
        </div>
        <Link to="/publications" className="see-more">See more</Link>
      </section>

      {/* ... 其他部分 ... */}
    </div>
  );
}

export default Home;
