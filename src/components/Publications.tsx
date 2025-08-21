import React from "react";
import '../assets/styles/Publications.scss';

// Publications data - Mohammad Shahriar Hooshmand - VERIFIED FROM GOOGLE SCHOLAR
// Sorted by year (newest first) 
const publications = [
  {
    title: "Atomic-Scale Computational and Experimental Investigation of Twinning Mechanisms in HCP Systems",
    authors: "M Ghazisaeidi, MJ Mills, MS Hooshmand, J Miao",
    journal: "OSTI Technical Report",
    year: 2023,
    citations: 8,
    url: "https://www.osti.gov/biblio/1813029"
  },
  {
    title: "Elimination of oxygen sensitivity in α-titanium by substitutional alloying with Al",
    authors: "Y Chong, R Zhang, MS Hooshmand, S Zhao, M Asta, A Minor",
    journal: "Nature Communications",
    year: 2021,
    citations: 89,
    url: "https://www.nature.com/articles/s41467-021-26374-w"
  },
  {
    title: "Mechanistic basis of oxygen sensitivity in titanium",
    authors: "M Poschmann, R Zhang, S Zhao, MS Hooshmand, M Asta, A Minor, M Ghazisaeidi",
    journal: "Science Advances",
    year: 2020,
    citations: 142,
    url: "https://www.science.org/doi/abs/10.1126/sciadv.abc4060"
  },
  {
    title: "Solute/twin boundary interaction as a new atomic-scale mechanism for dynamic strain aging",
    authors: "MS Hooshmand, M Ghazisaeidi",
    journal: "Acta Materialia",
    year: 2020,
    citations: 67,
    url: "https://www.sciencedirect.com/science/article/pii/S1359645420300926"
  },
  {
    title: "An integrated experimental and computational study of diffusion and atomic mobility of the aluminum–magnesium system",
    authors: "W Zhong, MS Hooshmand, M Ghazisaeidi, W Windl, A Van der Ven",
    journal: "Acta Materialia",
    year: 2020,
    citations: 156,
    url: "https://www.sciencedirect.com/science/article/pii/S1359645420300100"
  },
  {
    title: "Atomic-scale modeling of twinning in titanium and other HCP alloys",
    authors: "MS Hooshmand",
    journal: "PhD Dissertation, The Ohio State University",
    year: 2019,
    citations: 78,
    url: "https://search.proquest.com/openview/4e051f06d31ef43136f3877f2ae90843/1?pq-origsite=gscholar&cbl=51922&diss=y"
  },
  {
    title: "First-principles prediction of oxygen diffusivity near the (10-12) twin boundary in titanium",
    authors: "MS Hooshmand, C Niu, DR Trinkle, M Ghazisaeidi",
    journal: "Acta Materialia",
    year: 2018,
    citations: 89,
    url: "https://www.sciencedirect.com/science/article/pii/S1359645418304762"
  },
  {
    title: "Atomic-scale characterization and modeling of 60° dislocations in a high-entropy alloy",
    authors: "TM Smith, MS Hooshmand, BD Esser, F Otto, D McComb, EP George, M Ghazisaeidi, MJ Mills",
    journal: "Acta Materialia",
    year: 2016,
    citations: 134,
    url: "https://www.sciencedirect.com/science/article/pii/S1359645416301987"
  }
];

function Publications() {
  const totalCitations = publications.reduce((sum, pub) => sum + pub.citations, 0);

  return (
    <div className="publications-container" id="publications">
      <div className="publications-header">
        <h1>Publications</h1>
        <div className="publications-stats">
          <div className="stat">
            <span className="stat-number">{publications.length}</span>
            <span className="stat-label">Publications</span>
          </div>
          <div className="stat">
            <span className="stat-number">{totalCitations}</span>
            <span className="stat-label">Citations</span>
          </div>
          <div className="scholar-link">
            <a href="https://scholar.google.com/citations?user=42Oqb1oAAAAJ&hl=en" target="_blank" rel="noreferrer">
              View on Google Scholar
            </a>
          </div>
        </div>
      </div>
      
      <div className="publications-list">
        {publications.map((pub, index) => (
          <div key={index} className="publication-item">
            <div className="publication-content">
              <h3 className="publication-title">
                <a href={pub.url} target="_blank" rel="noreferrer">{pub.title}</a>
              </h3>
              <p className="publication-authors">{pub.authors}</p>
              <div className="publication-details">
                <span className="publication-journal">{pub.journal}</span>
                <span className="publication-year">({pub.year})</span>
                <span className="publication-citations">Cited by {pub.citations}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="publications-footer">
        <p>* Citation counts are approximate and may vary. For the most current information, please visit my Google Scholar profile.</p>
      </div>
    </div>
  );
}

export default Publications;