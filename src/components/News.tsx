import React from "react";
import '../assets/styles/News.scss';

// News data - Recent items for homepage (Recent news + Awards)
const recentNewsItems = [
  {
    date: "September 2025",
    items: [
      {
        text: "Fleet Explorer platform featured as HP's flagship AI innovation for enterprise fleet management.",
        link: "https://workforceexperience.hp.com/blog/fleet-explorer/"
      }
    ]
  },
  {
    date: "Autumn 2018",
    items: [
      {
        text: "Awarded Presidential Fellowship by Ohio State University, recognizing outstanding scholarly accomplishments and potential for dissertation research in atomic-scale modeling of titanium and metallic alloys.",
        link: "https://mse.osu.edu/natural-born-engineer-materials-science-and-engineering-phd-student-awarded-presidential-fellowship",
        image: "https://mse.osu.edu/sites/default/files/styles/coe_medium/public/media/shahriar-pres-fellow-ohio-state.png?itok=M_lXRTq2"
      }
    ]
  },
  {
    date: "May 2017",
    items: [
      {
        text: "Named Woolley Teaching Fellow in Materials Science and Engineering, recognized for exceptional work as instructional assistant in Fracture and Fatigue course and demonstration of leadership potential.",
        link: "https://mse.osu.edu/news/2017/05/doctoral-candidates-named-woolley-teaching-fellows",
        image: "https://mse.osu.edu/sites/default/files/styles/coe_medium/public/media/image2.jpg?itok=N92vB3qr"
      }
    ]
  },
  {
    date: "September 2017",
    items: [
      {
        text: "Won first place in OSC Statewide Users Group (SUG) Poster Competition for research on 'Oxygen Diffusion around (10-12) Twin Boundary in Ti', receiving 5,000 resource units of supercomputer time.",
        link: "https://www.osc.edu/press/sug_conference_brings_faculty_and_students_together_with_osc_staff",
        image: "https://www.osc.edu/sites/osc.edu/files/PosterWinner_0.jpg"
      }
    ]
  }
];

// Complete news data for expanded news page
export const allNewsItems = [
  {
    date: "September 2025",
    items: [
      {
        text: "Fleet Explorer platform featured as HP's flagship AI innovation for enterprise fleet management.",
        link: "https://workforceexperience.hp.com/blog/fleet-explorer/"
      }
    ]
  },
  {
    date: "Autumn 2018",
    items: [
      {
        text: "Awarded Presidential Fellowship by Ohio State University, recognizing outstanding scholarly accomplishments and potential for dissertation research in atomic-scale modeling of titanium and metallic alloys.",
        link: "https://mse.osu.edu/natural-born-engineer-materials-science-and-engineering-phd-student-awarded-presidential-fellowship",
        image: "https://mse.osu.edu/sites/default/files/styles/coe_medium/public/media/shahriar-pres-fellow-ohio-state.png?itok=M_lXRTq2"
      },
      {
        text: "One of six graduate students university-wide selected for the prestigious Presidential Fellowship program.",
        link: "https://engineering.osu.edu/news/2019/01/six-earn-ohio-state-presidential-fellowships",
        image: "https://engineering.osu.edu/sites/default/files/styles/large/public/group_image_for_social-web_3.jpg?itok=24RXHQ8y"
      }
    ]
  },
  {
    date: "May 2017",
    items: [
      {
        text: "Named Woolley Teaching Fellow in Materials Science and Engineering, recognized for exceptional work as instructional assistant in Fracture and Fatigue course and demonstration of leadership potential.",
        link: "https://mse.osu.edu/news/2017/05/doctoral-candidates-named-woolley-teaching-fellows",
        image: "https://mse.osu.edu/sites/default/files/styles/coe_medium/public/media/image2.jpg?itok=N92vB3qr"
      }
    ]
  },
  {
    date: "September 2017",
    items: [
      {
        text: "Won first place in OSC Statewide Users Group (SUG) Poster Competition for research on 'Oxygen Diffusion around (10-12) Twin Boundary in Ti', receiving 5,000 resource units of supercomputer time.",
        link: "https://www.osc.edu/press/sug_conference_brings_faculty_and_students_together_with_osc_staff",
        image: "https://www.osc.edu/sites/osc.edu/files/PosterWinner_0.jpg"
      },
      {
        text: "Presented research at OSC Statewide Users Group Conference, connecting with faculty and students across Ohio's research institutions.",
        link: "https://www.osc.edu/press/sug_conference_brings_faculty_and_students_together_with_osc_staff",
        image: "https://www.osc.edu/sites/osc.edu/files/SUG.jpg"
      }
    ]
  }
];

function News() {
  return (
    <div className="news-container" id="news">
      <div className="items-container">
        <div className="news-header">
          <h1>Recent News</h1>
          <p className="news-subtitle">
            Latest updates on AI/ML research, product innovations, and professional milestones in enterprise artificial intelligence.
          </p>
        </div>

        <div className="news-timeline">
          {recentNewsItems.map((period, index) => (
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
          <a href="/news" className="more-news-link">More News...</a>
        </div>
      </div>
    </div>
  );
}

export default News;