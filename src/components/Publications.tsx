import React from "react";
import '../assets/styles/Publications.scss';

// Publications data - Mohammad Shahriar Hooshmand - VERIFIED FROM GOOGLE SCHOLAR
// Sorted by year (newest first)
const publications = [
  {
    title: "Atomic-Scale Computational and Experimental Investigation of Twinning Mechanisms in HCP Systems",
    authors: "M Ghazisaeidi, MJ Mills, MS Hooshmand, J Miao",
    journal: "The Ohio State Univ., Columbus, OH (United States)",
    year: 2023,
    citations: 0,
    url: "https://www.osti.gov/biblio/1813029"
  },
  {
    title: "Elimination of oxygen sensitivity in α-titanium by substitutional alloying with Al",
    authors: "Y Chong, R Zhang, MS Hooshmand, S Zhao, DC Chrzan, M Asta, A Minor",
    journal: "Nature Communications",
    year: 2021,
    citations: 101,
    url: "https://www.nature.com/articles/s41467-021-26374-w"
  },
  {
    title: "Cores of 1/2< 110>-type dislocations in the CrMnFeCoNi high-entropy alloy investigated by STEM, the center of symmetry and the Nye tensor mapping techniques",
    authors: "M Heczko, V Mazánová, R Gröger, T Záležák, MS Hooshmand, E George, MJ Mills, M Ghazisaeidi",
    journal: "Microscopy and Microanalysis",
    year: 2021,
    citations: 0,
    url: "https://doi.org/10.1017/S1431927621010709"
  },
  {
    title: "Elemental segregation to lattice defects in the CrMnFeCoNi high-entropy alloy during high temperature exposures",
    authors: "M Heczko, V Mazánová, R Gröger, T Záležák, MS Hooshmand, EP George, MJ Mills, M Ghazisaeidi",
    journal: "Acta Materialia",
    year: 2021,
    citations: 36,
    url: "https://www.sciencedirect.com/science/article/abs/pii/S1359645421000999"
  },
  {
    title: "Twin-boundary structural phase transitions in elemental titanium",
    authors: "MS Hooshmand, R Zhang, Y Chong, E Chen, T Frolov, DL Olmsted, A Minor, M Asta",
    journal: "arXiv preprint arXiv:2103.06194",
    year: 2021,
    citations: 7,
    url: "https://arxiv.org/abs/2103.06194"
  },
  {
    title: "Mechanistic basis of oxygen sensitivity in titanium",
    authors: "Y Chong, M Poschmann, R Zhang, S Zhao, MS Hooshmand, E Rothchild, DC Chrzan, M Asta, A Minor, M Ghazisaeidi",
    journal: "Science Advances",
    year: 2020,
    citations: 131,
    url: "https://www.science.org/doi/abs/10.1126/sciadv.abc4060"
  },
  {
    title: "The Instability of Monolayer-Thick PbSe on VSe2",
    authors: "DLM Cordova, SS Fender, MS Hooshmand, MR Buchanan, J Davis, M Asta, A Minor",
    journal: "Chemistry of Materials",
    year: 2020,
    citations: 7,
    url: "https://pubs.acs.org/doi/abs/10.1021/acs.chemmater.0c02729"
  },
  {
    title: "Data on the comprehensive first-principles diffusion study of the aluminum-magnesium system",
    authors: "MS Hooshmand, W Zhong, JC Zhao, W Windl, M Ghazisaeidi",
    journal: "Data in Brief",
    year: 2020,
    citations: 15,
    url: "https://www.sciencedirect.com/science/article/pii/S2352340920301700"
  },
  {
    title: "An integrated experimental and computational study of diffusion and atomic mobility of the aluminum–magnesium system",
    authors: "W Zhong, MS Hooshmand, M Ghazisaeidi, W Windl, JC Zhao",
    journal: "Acta Materialia",
    year: 2020,
    citations: 42,
    url: "https://www.sciencedirect.com/science/article/pii/S1359645420301622"
  },
  {
    title: "Solute/twin boundary interaction as a new atomic-scale mechanism for dynamic strain aging",
    authors: "MS Hooshmand, M Ghazisaeidi",
    journal: "Acta Materialia",
    year: 2020,
    citations: 24,
    url: "https://www.sciencedirect.com/science/article/pii/S1359645420300926"
  },
  {
    title: "Atomic-scale modeling of twinning in titanium and other HCP alloys",
    authors: "MS Hooshmand",
    journal: "The Ohio State University",
    year: 2019,
    citations: 1,
    url: "https://etd.ohiolink.edu/apexprod/rws_etd/send_file/send?accession=osu1555429548736826&disposition=inline"
  },
  {
    title: "First-principles prediction of oxygen diffusivity near the (101̄2) twin boundary in titanium",
    authors: "MS Hooshmand, C Niu, DR Trinkle, M Ghazisaeidi",
    journal: "Acta Materialia",
    year: 2018,
    citations: 41,
    url: "https://www.sciencedirect.com/science/article/pii/S1359645418304762"
  },
  {
    title: "Segregation and phase transformations along superlattice intrinsic stacking faults in Ni-based superalloys",
    authors: "TM Smith, BD Esser, B Good, MS Hooshmand, GB Viswanathan, M Ghazisaeidi, MJ Mills",
    journal: "Metallurgical and Materials Transactions A",
    year: 2018,
    citations: 80,
    url: "https://link.springer.com/article/10.1007/s11661-018-4701-4"
  },
  {
    title: "Atomistic modeling of dislocation interactions with twin boundaries in Ti",
    authors: "MS Hooshmand, MJ Mills, M Ghazisaeidi",
    journal: "Modelling Simul. Mater. Sci. Eng.",
    year: 2017,
    citations: 42,
    url: "https://iopscience.iop.org/article/10.1088/1361-651X/aa6322"
  },
  {
    title: "Through-Focal HAADF-STEM Analysis of Dislocation Cores in a High-Entropy Alloy",
    authors: "TM Smith, BD Esser, MS Hooshmand, EP George, F Otto, M Ghazisaeidi, MJ Mills",
    journal: "Microscopy and Microanalysis",
    year: 2016,
    citations: 0,
    url: "https://doi.org/10.1017/S1431927616010564"
  },
  {
    title: "Atomic-scale characterization and modeling of 60° dislocations in a high-entropy alloy",
    authors: "TM Smith, MS Hooshmand, BD Esser, F Otto, DW McComb, EP George, M Ghazisaeidi, MJ Mills",
    journal: "Acta Materialia",
    year: 2016,
    citations: 249,
    url: "https://www.sciencedirect.com/science/article/pii/S1359645416301987"
  }
];

// Calculate total citations
const totalCitations = publications.reduce((sum, pub) => sum + pub.citations, 0);

function Publications() {
  return (
    <div className="publications-container">
      <div className="items-container">
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
              <a
                href="https://scholar.google.com/citations?user=42Oqb1oAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar Profile
              </a>
            </div>
          </div>
        </div>

        <div className="publications-list">
          {publications.map((publication, index) => (
            <div key={index} className="publication-item">
              <h3 className="publication-title">
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-link"
                >
                  {publication.title}
                </a>
              </h3>

              <p className="publication-authors">{publication.authors}</p>

              <div className="publication-details">
                <span className="publication-journal">{publication.journal}</span>
                <span className="publication-year">({publication.year})</span>
                <span className="publication-citations">• {publication.citations} citations</span>
              </div>
            </div>
          ))}
        </div>

        <div className="publications-footer">
          <p>
            For the most up-to-date publication list and citation counts, please visit my{' '}
            <a
              href="https://scholar.google.com/citations?user=42Oqb1oAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="scholar-link"
            >
              Google Scholar profile
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Publications;