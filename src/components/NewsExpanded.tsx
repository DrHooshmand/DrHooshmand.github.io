import React from "react";
import { allNewsItems } from './News';
import '../assets/styles/News.scss';

function NewsExpanded() {
  return (
    <div className="news-container">
      <div className="items-container">
        <div className="news-header">
          <h1>All News & Updates</h1>
          <p className="news-subtitle">
            Complete timeline of AI/ML research, product innovations, and professional milestones in enterprise artificial intelligence.
          </p>
        </div>

        <div className="news-timeline">
          {allNewsItems.map((period, index) => (
            <div key={index} className="news-period">
              <h3 className="period-header">{period.date}</h3>
              <ul className="period-items">
                {period.items.map((item: any, itemIndex) => (
                  <li key={itemIndex} className={`news-item ${item.image ? 'news-item-with-image' : ''}`}>
                    {item.image && (
                      <div className="news-image">
                        <img src={item.image} alt="Award or Achievement" />
                      </div>
                    )}
                    <div className="news-content">
                      {item.link ? (
                        <span>
                          {item.text}{' '}
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="news-link">
                            [Read more]
                          </a>
                        </span>
                      ) : (
                        item.text
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="news-footer">
          <a href="/#news" className="more-news-link">Back to Recent News</a>
        </div>
      </div>
    </div>
  );
}

export default NewsExpanded;