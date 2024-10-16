import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to EIT NLP</h1>
      <div className="image-container">
        <img 
          src="./zhuye/cd2f94e30d323c09c9ec417968f20d2.jpg" 
          alt="EIT NLP Image 1" 
          className="home-image"
        />
        <img 
          src="./zhuye/ab30ce9b7d3deceacbfccc54193a4e2.jpg" 
          alt="EIT NLP Image 2" 
          className="home-image"
        />
      </div>
      
      <section className="news">
        <h2>News</h2>
        <div className="news-item">
          <h3>To Preserve or To Compress: An In-Depth Study of Connector Selection in Multimodal Large Language Models</h3>
          <p>
            Authors: Junyan Lin, Haoran Chen, Dawei Zhu, Xiaoyu Shen
            <br />
            <a href="http://arxiv.org/abs/2410.06765" target="_blank" rel="noopener noreferrer">Paper</a> | 
            <a href="https://github.com/EIT-NLP/Connector-Selection-for-MLLM" target="_blank" rel="noopener noreferrer">Code</a>
            <br />
            This study explores the impact of connectors on the performance of Multimodal Large Language Models (MLLMs), providing important guidance for MLLM architecture design.
          </p>
        </div>
        <div className="news-item">
          <h3>Fine-Tuning Large Language Models to Translate</h3>
          <p>
            Authors: Dawei Zhu, Pinzhen Chen, Miaoran Zhang, Barry Haddow, Xiaoyu Shen, Dietrich Klakow
            <br />
            <a href="https://arxiv.org/pdf/2404.14122" target="_blank" rel="noopener noreferrer">Paper</a> | 
            <a href="https://github.com/uds-lsv/mt-sft" target="_blank" rel="noopener noreferrer">Code</a>
            <br />
            This study revisits the importance of training data factors in fine-tuning LLMs for translation, revealing surprising findings about data volume and translation direction requirements.
          </p>
        </div>
        <div className="news-item">
          <h3>The Accuracy Paradox in RLHF</h3>
          <p>
            Authors: Yanjun Chen, Dawei Zhu, Yirong Sun, Xinghao Chen, Wei Zhang, Xiaoyu Shen
            <br />
            <a href="https://arxiv.org/abs/2410.06554" target="_blank" rel="noopener noreferrer">Paper</a> | 
            <a href="https://github.com/EIT-NLP/AccuracyParadox-RLHF" target="_blank" rel="noopener noreferrer">Code</a>
            <br />
            This research reveals a surprising paradox in human feedback reinforcement learning, challenging the belief that stronger reward models always lead to better language model performance.
          </p>
        </div>
        <Link to="/publications" className="see-more">See more</Link>
      </section>
    </div>
  );
}

export default Home;
