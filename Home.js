import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
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
