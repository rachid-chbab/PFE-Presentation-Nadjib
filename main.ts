type SlideData = {
  id: string;
  title: string;
  eyebrow: string;
  html: string;
  notes: string;
};

const coverImageUrl = new URL('./figures/slide 1 figure.png', import.meta.url).href;
const slide3ImageUrl = new URL('./figures/slide 3 figure.png', import.meta.url).href;
const slide6VideoUrl = new URL('./figures/video slide 6.mp4', import.meta.url).href;
const slide9ImageUrl = new URL('./figures/slide 9 figure.png', import.meta.url).href;
const slide12ImageUrl = new URL('./figures/slide 12 figure.png', import.meta.url).href;
const slide16ImageUrl = new URL('./figures/slide 16 figure.png', import.meta.url).href;
const slide19ImageUrl = new URL('./figures/slide 19 figure.png', import.meta.url).href;

const slides: SlideData[] = [
  {
    id: 'slide-1',
    title: 'Analyse et optimisation de la couverture 5G NR dans le réseau Mobilis',
    eyebrow: 'SOUTENANCE DE MASTER — RÉSEAUX RADIO MOBILES',
    notes: 'Slide d\'accueil. Saluer le jury. Présenter les deux auteurs et les encadrants. Annoncer le sujet.',
    html: `
      <div class="cover-shell">
        <img class="cover-background-image" src="${coverImageUrl}" alt="Figure de couverture" />
        <div class="cover-content">
          <div class="cover-left">
            <div class="cover-top-title">USTHB — Université des Sciences et de la Technologie Houari Boumédiène</div>
            <div class="project-subtitle">Projet de Fin d’Études • Master 2<br/>Faculté de Génie Électrique - Réseaux et Radio Mobile</div>
            <h1>Analyse et optimisation de la couverture 5G NR dans le réseau Mobilis</h1>
            <p class="lead">Basée sur l'évaluation des faisceaux (Beams), du SS-RSRP et du SS-SINR, et leur impact sur la Qualité d'Expérience Utilisateur (QoE).</p>
            <div class="cover-info-row">
              <div class="compact-card author-block">
                <div class="author-label">Présenté par</div>
                <div class="author-names">HAMOUDI Aymene<br/>BENCHAOUCHE Nadjib</div>
              </div>
              <div class="compact-card cover-side-block">
                <div class="eyebrow">Encadré par</div>
                <p>DR. EL AFENDI M. M. (USTHB)<br/>Mr. HASSANI Moussa (Mobilis)</p>
              </div>
              <div class="compact-card cover-side-block">
                <div class="eyebrow">Jury</div>
                <p>DR BAKIR Nadia (Présidente)<br/>DR. ADNAN Ayoub (Examinateur)</p>
              </div>
            </div>
            <div class="cover-year">Année Universitaire 2025-2026</div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'slide-2',
    title: 'Plan de travail',
    eyebrow: 'Sommaire',
    notes: 'Présenter le plan de travail, avec les six étapes clés du mémoire : introduction, problématique, simulation, calibration, optimisation et conclusion.',
    html: `
      <div style="display: flex; flex-direction: column; gap: 24px; height: 100%; padding: 8px 6px; box-sizing: border-box;">
        <div style="display: flex; justify-content: flex-end; align-items: center; gap: 16px; flex-shrink: 0;">
          <div style="font-size: 14px; color: #8a9a95; letter-spacing: 0.18em; text-transform: uppercase;">Sommaire</div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; flex: 1; align-items: stretch;">
          <div style="background: #ffffff; border: 1px solid #e9f3ee; border-radius: 16px; padding: 18px 18px 20px; box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06); min-height: 100%; display: flex; flex-direction: column; justify-content: flex-start;">
            <div style="font-size: 1.8rem; color: #c7d2cc; letter-spacing: 0.2em; margin-bottom: 10px;">01</div>
            <h3 style="margin: 0 0 8px; font-size: 1.8rem; color: #0f766e;">Introduction</h3>
            <p style="margin: 0; color: #4b5563; font-size: 1.4rem; line-height: 1.5;">Contexte de déploiement et motivation du travail.</p>
          </div>
          <div style="background: #ffffff; border: 1px solid #e9f3ee; border-radius: 16px; padding: 18px 18px 20px; box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06); min-height: 100%; display: flex; flex-direction: column; justify-content: flex-start;">
            <div style="font-size: 1.8rem; color: #c7d2cc; letter-spacing: 0.2em; margin-bottom: 10px;">02</div>
            <h3 style="margin: 0 0 8px; font-size: 1.8rem; color: #0f766e;">Problématique et objectifs</h3>
            <p style="margin: 0; color: #4b5563; font-size: 1.4rem; line-height: 1.5;">Défis de la couverture 5G et buts de l'optimisation.</p>
          </div>
          <div style="background: #ffffff; border: 1px solid #e9f3ee; border-radius: 16px; padding: 18px 18px 20px; box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06); min-height: 100%; display: flex; flex-direction: column; justify-content: flex-start;">
            <div style="font-size: 1.8rem; color: #c7d2cc; letter-spacing: 0.2em; margin-bottom: 10px;">03</div>
            <h3 style="margin: 0 0 8px; font-size: 1.8rem; color: #0f766e;">Simulation et Modélisation</h3>
            <p style="margin: 0; color: #4b5563; font-size: 1.4rem; line-height: 1.5;">Réseau d'Oran, modèles de propagation et antennes.</p>
          </div>
          <div style="background: #ffffff; border: 1px solid #e9f3ee; border-radius: 16px; padding: 18px 18px 20px; box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06); min-height: 100%; display: flex; flex-direction: column; justify-content: flex-start;">
            <div style="font-size: 1.8rem; color: #c7d2cc; letter-spacing: 0.2em; margin-bottom: 10px;">04</div>
            <h3 style="margin: 0 0 8px; font-size: 1.8rem; color: #0f766e;">Calibration</h3>
            <p style="margin: 0; color: #4b5563; font-size: 1.4rem; line-height: 1.5;">Ajustement du modèle SPM aux mesures terrain.</p>
          </div>
          <div style="background: #ffffff; border: 1px solid #e9f3ee; border-radius: 16px; padding: 18px 18px 20px; box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06); min-height: 100%; display: flex; flex-direction: column; justify-content: flex-start;">
            <div style="font-size: 1.8rem; color: #c7d2cc; letter-spacing: 0.2em; margin-bottom: 10px;">05</div>
            <h3 style="margin: 0 0 8px; font-size: 1.8rem; color: #0f766e;">Optimisation et Résultats</h3>
            <p style="margin: 0; color: #4b5563; font-size: 1.4rem; line-height: 1.5;">Terrain vs simulation, scénarios ACP et gains obtenus.</p>
          </div>
          <div style="background: #ffffff; border: 1px solid #e9f3ee; border-radius: 16px; padding: 18px 18px 20px; box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06); min-height: 100%; display: flex; flex-direction: column; justify-content: flex-start;">
            <div style="font-size: 1.8rem; color: #c7d2cc; letter-spacing: 0.2em; margin-bottom: 10px;">06</div>
            <h3 style="margin: 0 0 8px; font-size: 1.8rem; color: #0f766e;">Conclusion et perspectives</h3>
            <p style="margin: 0; color: #4b5563; font-size: 1.4rem; line-height: 1.5;">Impact sur l'expérience utilisateur et travaux futurs.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'slide-3',
    title: 'Contexte et Motivation',
    eyebrow: 'Contexte',
    notes: 'Présenter le contexte de déploiement du 5G chez Mobilis et la motivation scientifique et industrielle du travail.',
    html: `
      <div class="slide3-shell">
        <div class="slide3-grid">
          <div class="slide3-left">
            <div class="slide3-section">
              <h3>Déploiement de la 5G en milieu urbain</h3>
              <ul>
                <li>Limites des réseaux 4G LTE (congestion et zones d'ombre)</li>
                <li>Exigences accrues en très haut débit (eMBB) et faible latence</li>
                <li>Nécessité absolue d'assurer un service optimal dès le lancement</li>
              </ul>
            </div>
            <div class="slide3-section">
              <h3>Nouveaux défis de l'optimisation radio</h3>
              <ul>
                <li>Environnement urbain dense à Oran générant de fortes interférences</li>
                <li>Complexité de la propagation en ondes millimétriques et sub-6 GHz</li>
                <li>Intégration de technologies avancées (Massive MIMO 64T64R, Beamforming)</li>
              </ul>
            </div>
            <div class="slide3-need-box">
              <strong>Besoin :</strong> Évaluer et optimiser efficacement la couverture 5G NR (NSA Option 3x) sur le terrain pour garantir une Qualité d’Expérience (QoE) optimale aux utilisateurs de Mobilis.
            </div>
          </div>
          <div class="slide3-right">
            <div class="slide3-image-placeholder">
              <img class="slide-figure-image slide3-image" src="${slide3ImageUrl}" alt="Figure du contexte urbain d'Oran" />
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'slide-4',
    title: 'Problématique et Objectifs',
    eyebrow: 'Problématique',
    notes: 'Formuler la problématique principale et les objectifs scientifiques et techniques de la soutenance.',
    html: `
      <div class="slide4-shell">
        <div class="slide4-grid">
          <div class="slide4-card slide4-card-challenges">
            <div class="slide4-header">
              <span class="slide4-icon slide4-icon-warning">⚠</span>
              <h3>Défis de l'optimisation 5G urbaine</h3>
            </div>
            <div class="slide4-list">
              <div class="slide4-item"><span class="slide4-bullet">①</span><span>Zones d'ombre et ruptures de couverture urbaine</span></div>
              <div class="slide4-item"><span class="slide4-bullet">②</span><span>Interférences inter-cellulaires et faible SINR</span></div>
              <div class="slide4-item"><span class="slide4-bullet">③</span><span>Limites de l'optimisation paramétrique pure</span></div>
              <div class="slide4-item"><span class="slide4-bullet">④</span><span>Saturation du réseau dans les zones à forte densité</span></div>
              <div class="slide4-item"><span class="slide4-bullet">⑤</span><span>Complexité du calibrage Massive MIMO en 3D</span></div>
            </div>
          </div>
          <div class="slide4-card slide4-card-goals">
            <div class="slide4-header">
              <span class="slide4-icon slide4-icon-check">✓</span>
              <h3>Objectifs du travail</h3>
            </div>
            <div class="slide4-list">
              <div class="slide4-item slide4-item-goal"><span class="slide4-check">✓</span><span>Calibrer précisément le modèle de propagation SPM sous Atoll</span></div>
              <div class="slide4-item slide4-item-goal"><span class="slide4-check">✓</span><span>Atteindre 95% de couverture radio (SS-RSRP &gt; -105 dBm)</span></div>
              <div class="slide4-item slide4-item-goal"><span class="slide4-check">✓</span><span>Maximiser la qualité du signal (CINR &gt; 10 dB) sur 85% de la zone</span></div>
              <div class="slide4-item slide4-item-goal"><span class="slide4-check">✓</span><span>Densifier le réseau pour garantir la Qualité d'Expérience (QoE)</span></div>
            </div>
          </div>
        </div>
        <div class="slide4-footer">
          <strong>Méthodologie :</strong> Drive Test sur le terrain (OnePlus 13 / TEMS) + Optimisation ACP (Paramétrique & Densification) sous Atoll.
        </div>
      </div>
    `
  },
  {
    id: 'slide-5',
    title: 'Architecture déployée : NSA Option 3x',
    eyebrow: 'Architecture',
    notes: 'Expliquer pourquoi Mobilis a choisi l\'Option 3x plutôt que la 3 classique. Focus sur le Split Bearer.',
    html: `
      <div class="slide5-shell">
        <div class="slide5-content">
          <div class="slide5-table-shell">
            <table class="slide5-table">
              <thead>
                <tr>
                  <th>Caractéristique</th>
                  <th>NSA Option 3</th>
                  <th class="slide5-highlight">NSA Option 3x — Mobilis</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Cœur de réseau</td><td>EPC (4G)</td><td class="slide5-highlight">EPC (4G)</td></tr>
                <tr><td>Nœud Maître (Contrôle)</td><td>eNB (LTE)</td><td class="slide5-highlight">eNB (LTE)</td></tr>
                <tr><td>Routage Données (User Plane)</td><td>Via eNB vers EPC</td><td class="slide5-highlight">Via gNB vers EPC (Split Bearer)</td></tr>
                <tr><td>Network Slicing</td><td>Non</td><td class="slide5-highlight">Non</td></tr>
              </tbody>
            </table>
          </div>
          <div class="slide5-advantage">
            <div class="slide5-advantage-title">
              <span class="slide5-icon">⚡</span>
              <strong>Avantage du Split Bearer</strong>
            </div>
            <p>L'Option 3x permet au gNB 5G d'acheminer les données utilisateur directement au cœur EPC, évitant le goulot d'étranglement de l'interface X2 tout en conservant l'infrastructure 4G pour la signalisation.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'slide-6',
    title: 'Simulation et Modélisation',
    eyebrow: 'Modélisation',
    notes: 'Présenter la configuration MATLAB utilisée pour la simulation Massive MIMO et les résultats de portée.',
    html: `
      <div class="slide6-shell">
        <div class="slide6-grid">
          <div class="slide6-card slide6-card-table">
            <h3>Configuration MATLAB</h3>
            <div class="slide6-table-wrap">
              <table class="slide6-table">
                <tbody>
                  <tr><td>Réseau</td><td>URA (8x8) = 64 antennes</td></tr>
                  <tr><td>Fréquence</td><td>3,5 GHz (bande n78)</td></tr>
                  <tr><td>Espacement</td><td>λ/2 ≈ 4,28 cm</td></tr>
                  <tr><td>Pondération</td><td>Taylor Window -20 dB</td></tr>
                  <tr><td>Hauteur gNB</td><td>30 m</td></tr>
                  <tr><td>Puissance</td><td>20 W (43 dBm)</td></tr>
                  <tr><td>Balayage</td><td>7 beams : -30° : 10 : +30°</td></tr>
                  <tr><td>UE simulés</td><td>6 terminaux (80-400 m)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="slide6-card slide6-video-card">
            <div class="slide6-video-placeholder">
              <video class="slide6-video-media" autoplay muted loop playsinline>
                <source src="${slide6VideoUrl}" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div class="slide6-banner">
          <strong>Résultat :</strong> 6 UE (80-400 m) / Signal ≥ -100 dBm. La portée du faisceau Massive MIMO est validée jusqu'à <strong>1 km</strong> en environnement urbain.
        </div>
      </div>
    `
  },
  {
    id: 'slide-8',
    title: 'Environnement d\'étude : Mobilis Oran',
    eyebrow: 'Étude',
    notes: 'Présenter le terrain d\'étude. 21 sites, bande C FR1, configuration TDD.',
    html: `
      <div class="slide9-shell">
        <div class="slide9-topcards">
          <div class="slide9-topcard">
            <div class="slide9-topcard-value">21</div>
            <div class="slide9-topcard-label">Sites 5G NR déployés</div>
          </div>
          <div class="slide9-topcard">
            <div class="slide9-topcard-value">64T64R</div>
            <div class="slide9-topcard-label">Antennes Massive MIMO</div>
          </div>
          <div class="slide9-topcard">
            <div class="slide9-topcard-value">3 500 MHz</div>
            <div class="slide9-topcard-label">Fréquence centrale</div>
          </div>
        </div>
        <div class="slide9-body">
          <div class="slide9-leftcard">
            <div class="slide9-section-title">Paramètres</div>
            <div class="slide9-table-card">
              <table class="slide9-table">
                <tbody>
                  <tr><td>Bande de fréquence</td><td>n78 (Bande C/FR1)</td></tr>
                  <tr><td>Fréquence centrale</td><td>3 500 MHz</td></tr>
                  <tr><td>Largeur de bande</td><td>100 MHz (TDD DDDSU)</td></tr>
                  <tr><td>Puissance TX par port</td><td>43 dBm (20 W)</td></tr>
                  <tr><td>Hauteur moyenne antenne</td><td>30 m</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="slide9-rightcard">
            <div class="slide9-map-placeholder">
              <img class="slide-figure-image slide9-map-image" src="${slide9ImageUrl}" alt="Figure de l'environnement d'étude" />
              <div class="slide9-map-banner">Centre urbain dense d’Oran, Algérie — Visualisation Atoll</div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'slide-9',
    title: 'Méthodologie : Campagne Drive Test',
    eyebrow: 'Méthodologie',
    notes: 'Décrire la méthode de collecte terrain. Insister sur la rigueur : filtrage GPS, vitesse constante.',
    html: `
      <div class="slide10-shell">
        <div class="slide10-body">
          <div class="slide10-leftcard">
            <div class="slide10-card-title-row">
              <div class="slide10-card-title">Outils et Collecte</div>
              <div class="slide10-card-line"></div>
            </div>
            <ul class="slide10-list">
              <li><span class="slide10-icon">📱</span><span><strong>Terminal UE</strong> : OnePlus 13 (Snapdragon 8 Elite) bloqué en 5G NSA</span></li>
              <li><span class="slide10-icon">💻</span><span><strong>Logiciel DT</strong> : TEMS Investigation (pilotage et horodatage GPS)</span></li>
              <li><span class="slide10-icon">🗄️</span><span><strong>Post-traitement</strong> : TEMS Discovery &amp; Forsk Atoll</span></li>
              <li><span class="slide10-icon">📈</span><span><strong>KPIs Collectés</strong> : SS-RSRP, SS-SINR, PCI, Beam Index</span></li>
            </ul>
          </div>
          <div class="slide10-rightcard">
            <div class="slide10-rightcontent">
              <div class="slide10-measurement-block">
                <div class="slide10-measurement-badge">3 228</div>
                <div class="slide10-measurement-label">Points de mesure collectés</div>
              </div>
              <div class="slide10-pipeline">
                <div class="slide10-step">
                  <div class="slide10-step-title">Collecte</div>
                  <div class="slide10-step-subtitle">30-50 km/h</div>
                </div>
                <div class="slide10-step-arrow">↓</div>
                <div class="slide10-step">
                  <div class="slide10-step-title">Filtrage</div>
                  <div class="slide10-step-subtitle">Anomalies GPS</div>
                </div>
                <div class="slide10-step-arrow">↓</div>
                <div class="slide10-step slide10-step-highlight">
                  <div class="slide10-step-title">Import Atoll</div>
                  <div class="slide10-step-subtitle">Format CSV</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'slide-10',
    title: 'Modèles de propagation : 3GPP vs SPM',
    eyebrow: 'Modélisation',
    notes: 'Justifier le choix du SPM. Le RMSE est le critère prioritaire pour la prédiction radio.',
    html: `
      <div class="slide11-table-card">
        <table>
          <thead>
            <tr>
              <th>Indicateur Statistique</th>
              <th>Modèle 3GPP TR 38.901 (UMa)</th>
              <th class="slide11-winner-col">Modèle SPM (Initial)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Erreur Moyenne</td>
              <td>11.48 dB</td>
              <td class="slide11-winner-col">5.70 dB</td>
            </tr>
            <tr>
              <td>RMSE (Erreur Quadratique)</td>
              <td>17.22 dB</td>
              <td class="slide11-winner-col">14.78 dB</td>
            </tr>
            <tr>
              <td>Corrélation avec mesures</td>
              <td>0.38</td>
              <td class="slide11-winner-col">0.17</td>
            </tr>
            <tr>
              <td>Comportement</td>
              <td>Optimiste (Sous-estime les pertes)</td>
              <td class="slide11-winner-col">Conservateur (Sature plus vite)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="slide11-footer-banner">
        <span class="slide11-footer-icon">✓</span>
        <p>Bien que la corrélation brute du 3GPP soit légèrement meilleure (0.38), le modèle SPM présente une erreur globale RMSE significativement plus faible (14.78 vs 17.22). <strong>Le SPM est donc retenu comme base pour la calibration fine.</strong></p>
      </div>
    `
  },
  {
    id: 'slide-11',
    title: 'Huawei (X) vs Ericsson (Y)',
    eyebrow: 'Antennes',
    notes: 'Les deux antennes ont des rôles complémentaires. Le déploiement mixte est la recommandation clé.',
    html: `
      <div class="slide12-shell">
        <div class="slide12-left">
          <div class="slide12-table-card">
            <div class="slide12-table-card-title">Comparaison technique</div>
            <div class="slide12-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Paramètre</th>
                    <th>Antenne X (Huawei)</th>
                    <th>Antenne Y (Ericsson)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Modèle</td><td>64×64</td><td>64Tx64R</td></tr>
                  <tr><td>Gain nominal</td><td>23.85 dBi</td><td>25.0 dBi</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="slide12-kpi-section">
            <div class="slide12-kpi-title"><span class="slide12-kpi-icon">📈</span>Performances de couverture & Qualité</div>
            <div class="slide12-kpi-grid">
              <div class="slide12-kpi-box">
                <div class="slide12-kpi-box-title">Surface Utile SS-RSRP (km²)</div>
                <div class="slide12-kpi-values"><span class="slide12-kpi-blue">0.55</span><span class="slide12-kpi-divider">/</span><span class="slide12-kpi-orange">0.025</span></div>
              </div>
              <div class="slide12-kpi-box">
                <div class="slide12-kpi-box-title">PDSCH C/(I+N) (dB)</div>
                <div class="slide12-kpi-values"><span class="slide12-kpi-blue">39.6</span><span class="slide12-kpi-divider">/</span><span class="slide12-kpi-orange">32.68</span></div>
              </div>
            </div>
          </div>
          <div class="slide12-conclusion-banner">
            <p>Déploiement mixte validé : Huawei assure la macro-couverture homogène, tandis qu'Ericsson cible les micro-hotspots capacitifs.</p>
          </div>
        </div>
        <div class="slide12-right">
          <div class="slide12-figure-card">
            <img class="slide-figure-image slide12-figure-image" src="${slide12ImageUrl}" alt="Diagramme de rayonnement" />
          </div>
          <div class="slide12-summary-card">
            <div class="slide12-summary-title">Synthèse Comparative</div>
            <p>Huawei : Offre une couverture large et stable (0.55 km²) avec une excellente réjection d'interférence (~40 dB).</p>
            <p>Ericsson : Faisceau ultra-focalisé permettant un signal plus puissant mais sur une zone très restreinte (0.025 km²).</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'slide-12',
    title: 'Calibration du modèle SPM',
    eyebrow: 'Calibration',
    notes: 'Décrire le processus itératif. Insister sur le critère de validation : RMSE < 10 dB.',
    html: `
      <div class="slide13-shell">
        <div class="slide13-header">
          <p class="slide13-subtitle">Ajustement itératif des coefficients empiriques <strong>K1 à K7</strong> pour aligner le modèle sur les <strong>2 987 points</strong> de mesures valides collectés à Oran.</p>
        </div>
        <div class="slide13-steps">
          <div class="slide13-card">
            <div class="slide13-step-number">1</div>
            <h3>Import</h3>
            <div class="slide13-divider"></div>
            <p>Données <strong>DT CW</strong> importées dans <strong>Atoll</strong>.</p>
          </div>
          <div class="slide13-card">
            <div class="slide13-step-number">2</div>
            <h3>Filtrage</h3>
            <div class="slide13-divider"></div>
            <p>RSRP <strong>&lt; -105 dBm</strong> et distance <strong>&gt; 350 m</strong> exclus.</p>
          </div>
          <div class="slide13-card">
            <div class="slide13-step-number">3</div>
            <h3>Lissage</h3>
            <div class="slide13-divider"></div>
            <p>Fenêtre de <strong>20 m</strong> pour atténuer le <strong>fast-fading</strong>.</p>
          </div>
          <div class="slide13-card">
            <div class="slide13-step-number">4</div>
            <h3>Ajustement</h3>
            <div class="slide13-divider"></div>
            <p>Correction fine des coefficients <strong>K1, K2</strong>.</p>
          </div>
          <div class="slide13-card slide13-card-last">
            <div class="slide13-step-number">5</div>
            <h3>Validation</h3>
            <div class="slide13-divider"></div>
            <p>Contrôle du RMSE <strong>cible &lt; 10 dB</strong>.</p>
            <div class="slide13-badge">✓ MODÈLE VALIDÉ</div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'slide-13',
    title: 'Résultats : Modèle SPM calibré',
    eyebrow: 'Résultats',
    notes: 'Résultat clé : RMSE passe de 14.78 à 9.96 dB, sous la barre critique des 10 dB. Le modèle est validé.',
    html: `
      <div class="slide14-shell">
        <div class="slide14-left">
          <div class="slide14-table-card">
            <table class="slide14-table">
              <thead>
                <tr>
                  <th>Indicateur</th>
                  <th>Valeur</th>
                  <th><span class="slide14-head-icon">✓</span>Évolution</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RMSE</td>
                  <td>9.96 dB</td>
                  <td><span class="slide14-good">Amélioration</span></td>
                </tr>
                <tr>
                  <td>Couverture moyenne</td>
                  <td>-96.4 dBm</td>
                  <td><span class="slide14-good">+11.07 dB</span></td>
                </tr>
                <tr>
                  <td>Débit DL RLC</td>
                  <td>27 332 Mbps</td>
                  <td><span class="slide14-good">Très performant</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="slide14-right">
          <div class="slide14-widget slide14-widget-top">
            <div class="slide14-widget-title"><span class="slide14-widget-icon">✦</span> Correction du Biais</div>
            <p>Le modèle compense maintenant l’écart de propagation et rétablit la cohérence du signal observé sur le terrain.</p>
            <div class="slide14-inline-note">Le RMSE passe sous la barre critique des 10 dB</div>
          </div>
          <div class="slide14-widget slide14-widget-middle">
            <div class="slide14-widget-title">Boîte de comparaison</div>
            <div class="slide14-compare-row">
              <div class="slide14-compare-left">Moy. Initiale (-107.5)</div>
              <div class="slide14-arrow-badge">→</div>
              <div class="slide14-compare-right">Moy. Calibrée (-96.4)</div>
            </div>
          </div>
        </div>
        <div class="slide14-footer-bar">
          <div class="slide14-footer-icon">i</div>
          <p>Le niveau moyen prédit a augmenté de <strong>+11.07 dB</strong>, s’alignant précisément avec la portée réelle du Massive MIMO constatée sur le terrain.</p>
        </div>
      </div>
    `
  },
  {
    id: 'slide-14',
    title: 'Validation : Terrain vs Simulation',
    eyebrow: 'Validation',
    notes: 'P2 est le cas le plus spectaculaire : correction de 27 dB sur un trou noir virtuel.',
    html: `
      <div class="slide15-shell">
        <div class="slide15-table-card">
          <table>
            <thead><tr><th>Point de Mesure</th><th>Mesure Réelle (DT)</th><th>Prédiction Initiale</th><th>Prédiction Calibrée</th><th>Analyse</th></tr></thead>
            <tbody>
              <tr><td>P1</td><td>-76.22 dBm</td><td>≥ -79.00 dBm</td><td>≥ -78.00 dBm</td><td>Écart quasi-nul (~1.5 dB) ✅</td></tr>
              <tr><td>P2</td><td>-79.30 dBm</td><td>≥ -118.00 dBm</td><td>≥ -91.00 dBm</td><td>Correction massive d'un "trou noir" virtuel ✅</td></tr>
              <tr><td>P3</td><td>-90.30 dBm</td><td>≥ -78.00 dBm</td><td>≥ -90.00 dBm</td><td>Précision parfaite (&lt; 1 dB) ✅</td></tr>
            </tbody>
          </table>
        </div>
        <div class="slide15-summary-card">
          <div class="slide11-footer-icon">✓</div>
          <p>Validation confirmée sur <strong>3 points distincts</strong>. Le modèle calibré est prêt à piloter l'optimisation ACP.</p>
        </div>
      </div>
    `
  },
  {
    id: 'slide-15',
    title: 'Optimisation et Résultats',
    eyebrow: 'Traffic Map',
    notes: 'Présenter les objectifs de l’optimisation ACP, les indicateurs clés et la carte de distribution du trafic.',
    html: `
      <div class="slide16-shell">
        <div class="slide16-body">
          <div class="slide16-left">
            <div class="slide16-card slide16-objectives">
              <h3>Objectifs</h3>
              <ul class="slide16-goals">
                <li><span class="slide16-arrow">↗</span><span>Identifier les zones à forte demande de trafic</span></li>
                <li><span class="slide16-arrow">↗</span><span>Extraire les statistiques OSS et mesurer la charge réelle</span></li>
                <li><span class="slide16-arrow">↗</span><span>Identifier les hotspots de congestion et de faible couverture</span></li>
                <li><span class="slide16-arrow">↗</span><span>Corréler la charge réseau avec la qualité de couverture</span></li>
              </ul>
            </div>
            <div class="slide16-kpi-wrap">
              <div class="slide16-kpi-card">
                <div class="slide16-kpi-value">804</div>
                <div class="slide16-kpi-label">Utilisateurs Simulés</div>
              </div>
              <div class="slide16-kpi-card">
                <div class="slide16-kpi-value">99.8%</div>
                <div class="slide16-kpi-label">Taux de Connexion</div>
              </div>
              <div class="slide16-kpi-card slide16-kpi-card-wide">
                <div class="slide16-kpi-value">27 332</div>
                <div class="slide16-kpi-label">MBPS Débit DL RLC</div>
                <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid rgba(15, 118, 110, 0.16); text-align: left;">
                  <div style="font-size: 1.2rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #0f766e; margin-bottom: 6px;">Cahier des charges ACP</div>
                  <div style="color: #334155; font-size: 1.2rem; line-height: 1.45;">
                    <div>Couverture RSRP : &gt; -105 dBm sur 95% de la zone.</div>
                    <div style="margin-top: 4px;">Qualité CINR : &gt; 10 dB sur 85% de la zone.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide16-figure-card">
            <img class="slide-figure-image slide16-figure-image" src="${slide16ImageUrl}" alt="Traffic distribution map" />
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'slide-16',
    title: 'Scénario 1 : Optimisation paramétrique',
    eyebrow: 'Scénario 1',
    notes: 'Le gain CINR est massif (+57 points) sans toucher au matériel. L\'optimisation paramétrique est très efficace sur la qualité.',
    html: `
      <div class="slide17-shell">
        <div class="slide17-summary-card">
          <div class="slide17-summary-title">131 Modifications sans ajout matériel</div>
          <div class="slide17-summary-row">
            <div class="slide17-pill">
              <div class="slide17-pill-label">Tilts Électriques</div>
              <div class="slide17-pill-value">34</div>
            </div>
            <div class="slide17-pill">
              <div class="slide17-pill-label">Tilts Mécaniques</div>
              <div class="slide17-pill-value">26</div>
            </div>
            <div class="slide17-pill">
              <div class="slide17-pill-label">Azimuts</div>
              <div class="slide17-pill-value">39</div>
            </div>
            <div class="slide17-pill">
              <div class="slide17-pill-label">Puissances (TX)</div>
              <div class="slide17-pill-value">32</div>
            </div>
          </div>
        </div>

        <div class="slide17-table-card">
          <div class="slide17-table-title">Évolution KPIs</div>
          <div class="slide17-kpi-grid">
            <div class="slide17-kpi-block">
              <div class="slide17-kpi-name">SS-RSRP &gt; -105 dBm (Avant)</div>
              <div class="slide17-kpi-line-wrap">
                <div class="slide17-kpi-line-bg">
                  <div class="slide17-kpi-line-fill fill-ss"></div>
                </div>
                <div class="slide17-kpi-value">90.39%</div>
              </div>
            </div>
            <div class="slide17-kpi-block">
              <div class="slide17-kpi-name">SS-RSRP &gt; -105 dBm (Après)</div>
              <div class="slide17-kpi-line-wrap">
                <div class="slide17-kpi-line-bg">
                  <div class="slide17-kpi-line-fill fill-ss-after"></div>
                </div>
                <div class="slide17-kpi-value slide17-kpi-value-accent">93.47%</div>
              </div>
            </div>
            <div class="slide17-kpi-block">
              <div class="slide17-kpi-name">CINR &gt; 10 dB (Avant)</div>
              <div class="slide17-kpi-line-wrap">
                <div class="slide17-kpi-line-bg">
                  <div class="slide17-kpi-line-fill fill-cinr"></div>
                </div>
                <div class="slide17-kpi-value">17.84%</div>
              </div>
            </div>
            <div class="slide17-kpi-block slide17-kpi-block-accent">
              <div class="slide17-kpi-name">CINR &gt; 10 dB (Après)</div>
              <div class="slide17-kpi-line-wrap">
                <div class="slide17-kpi-line-bg">
                  <div class="slide17-kpi-line-fill fill-cinr-after"></div>
                </div>
                <div class="slide17-kpi-value slide17-kpi-value-accent">77.36%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'slide-17',
    title: 'Scénario 1 : Capacité & Modulation',
    eyebrow: 'Scénario 1',
    notes: 'L\'isolation des interférences permet la transition vers 64-QAM / 256-QAM. +13% capacité sans investissement matériel.',
    html: `
      <div class="slide18-shell">
        <div class="slide18-layout-grid">
          <div class="slide18-left-col">
            <div class="slide18-card">
              <h3>Évolution MCS (Modulation)</h3>
              <p>L'isolation des interférences a permis la transition vers des modulations supérieures.</p>
              <div class="slide18-divider"></div>
              <div class="slide18-metrics-grid">
                <div class="slide18-metric">
                  <div class="slide18-metric-label">QPSK (Surface km²)</div>
                  <div class="slide18-metric-value">Avant: ~12.0</div>
                </div>
                <div class="slide18-metric">
                  <div class="slide18-metric-label">16/64-QAM (km²)</div>
                  <div class="slide18-metric-value">Après: Forte Hausse</div>
                </div>
              </div>
            </div>
            <div class="slide18-card slide18-capacity-card">
              <h3>Gain de Capacité : +13%</h3>
              <p>Sans ajout matériel, le réseau absorbe mieux le trafic.</p>
            </div>
          </div>
          <div class="slide18-card slide18-chart-card">
            <h3>Débit RLC Downlink (Moyen)</h3>
            <div class="slide18-bar-group">
              <div class="slide18-bar-row">
                <div class="slide18-bar-label">Initial</div>
                <div class="slide18-bar-track"><div class="slide18-bar-fill slide18-bar-fill--gray" style="width: 72%"></div></div>
                <div class="slide18-bar-value">198.67 Mbps</div>
              </div>
              <div class="slide18-bar-row">
                <div class="slide18-bar-label">Scénario 1</div>
                <div class="slide18-bar-track"><div class="slide18-bar-fill slide18-bar-fill--green" style="width: 100%"></div></div>
                <div class="slide18-bar-value slide18-bar-value--accent">224.56 Mbps</div>
              </div>
            </div>
            <div class="slide18-slide-number">16</div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'slide-18',
    title: 'Scénario 2 : Densification',
    eyebrow: 'Scénario 2',
    notes: 'Les deux objectifs sont atteints exactement. Le scénario 2 valide la stratégie de densification ciblée.',
    html: `
      <div class="slide17-shell">
        <div class="slide17-summary-card">
          <div class="slide17-summary-title">164 modifications pour densifier le réseau</div>
          <div class="slide17-summary-row">
            <div class="slide17-pill">
              <div class="slide17-pill-label">Sites ajoutés</div>
              <div class="slide17-pill-value">+3</div>
            </div>
            <div class="slide17-pill">
              <div class="slide17-pill-label">Tilts Électriques</div>
              <div class="slide17-pill-value">40</div>
            </div>
            <div class="slide17-pill">
              <div class="slide17-pill-label">Azimuts</div>
              <div class="slide17-pill-value">43</div>
            </div>
            <div class="slide17-pill">
              <div class="slide17-pill-label">Tilts Mécaniques</div>
              <div class="slide17-pill-value">42</div>
            </div>
          </div>
        </div>

        <div class="slide17-table-card slide19-kpi-split">
          <div class="slide19-kpi-left">
            <div class="slide17-table-title">Évolution KPIs</div>
            <div class="slide17-kpi-grid">
              <div class="slide17-kpi-block">
                <div class="slide17-kpi-name">Couverture utile (Avant)</div>
                <div class="slide17-kpi-line-wrap">
                  <div class="slide17-kpi-line-bg">
                    <div class="slide17-kpi-line-fill fill-ss"></div>
                  </div>
                  <div class="slide17-kpi-value">90.39%</div>
                </div>
              </div>
              <div class="slide17-kpi-block">
                <div class="slide17-kpi-name">Couverture utile (Après)</div>
                <div class="slide17-kpi-line-wrap">
                  <div class="slide17-kpi-line-bg">
                    <div class="slide17-kpi-line-fill fill-ss-after"></div>
                  </div>
                  <div class="slide17-kpi-value slide17-kpi-value-accent">95.01%</div>
                </div>
              </div>
              <div class="slide17-kpi-block">
                <div class="slide17-kpi-name">CINR &gt; 10 dB (Avant)</div>
                <div class="slide17-kpi-line-wrap">
                  <div class="slide17-kpi-line-bg">
                    <div class="slide17-kpi-line-fill fill-cinr"></div>
                  </div>
                  <div class="slide17-kpi-value">19.01%</div>
                </div>
              </div>
              <div class="slide17-kpi-block slide17-kpi-block-accent">
                <div class="slide17-kpi-name">CINR &gt; 10 dB (Après)</div>
                <div class="slide17-kpi-line-wrap">
                  <div class="slide17-kpi-line-bg">
                    <div class="slide17-kpi-line-fill fill-cinr-after"></div>
                  </div>
                  <div class="slide17-kpi-value slide17-kpi-value-accent">85.00%</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide19-figure-panel">
            <img class="slide-figure-image slide19-figure-image" src="${slide19ImageUrl}" alt="Figure de densification" />
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'slide-19',
    title: 'Comparaison : Synthèse des gains',
    eyebrow: 'Synthèse',
    notes: 'Slide clé de la soutenance. Montrer la progression claire sur les 3 états. Conclure sur le Scénario 2.',
    html: `
      <div class="slide20-shell">
        <div class="slide20-table-card">
          <table>
            <thead>
              <tr>
                <th>Indicateur KPI</th>
                <th>État Initial (21 sites)</th>
                <th>Scénario 1 (21 sites)</th>
                <th>Scénario 2 (24 sites)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Couverture Utile (RSRP &gt; -105)</td><td>90.39%</td><td>93.47%</td><td class="slide20-highlight">95.01% ✅</td></tr>
              <tr><td>Qualité Conforme (CINR &gt; 10 dB)</td><td>19.01%</td><td>77.36%</td><td class="slide20-highlight">85.00% ✅</td></tr>
              <tr><td>Débit Moyen DL (RLC)</td><td>198.67 Mbps</td><td>224.56 Mbps</td><td class="slide20-highlight">251.70 Mbps ✅</td></tr>
              <tr><td>Indice Modulation Moyen</td><td>2.84</td><td>2.88</td><td class="slide20-highlight">3.03 (64/256-QAM) ✅</td></tr>
            </tbody>
          </table>
        </div>
        <div class="slide20-note">
          Recommandation Stratégique : Le Scénario 2 garantit un réseau robuste sans zones d’ombre, permettant une QoE ininterrompue pour le haut débit et la VoNR urbaine.
        </div>
      </div>
    `
  },
  {
    id: 'slide-20',
    title: 'Impact sur la QoE',
    eyebrow: 'QoE',
    notes: 'Présenter la chaîne de valeur radio qui transforme les métriques techniques en expérience client supérieure.',
    html: `
      <div class="slide20-shell">
        <div class="slide20-header">
          <h2>De la qualité radio à l’expérience utilisateur</h2>
          <p>Chaque amélioration technique renforce la stabilité du lien, la capacité utile et la satisfaction client.</p>
        </div>

        <div class="slide20-steps">
          <div class="slide20-step">
            <div class="slide20-step-marker">
              <div class="slide20-step-icon">📍</div>
              <div class="slide20-step-number">01</div>
            </div>
            <div class="slide20-step-body">
              <div class="slide20-step-title">SS-RSRP ≥ -105 dBm</div>
              <ul class="slide20-step-bullets">
                <li>Signal plus robuste</li>
                <li>Moins de zones blanches</li>
                <li>Connexion stable en mobilité</li>
              </ul>
            </div>
          </div>

          <div class="slide20-step">
            <div class="slide20-step-marker">
              <div class="slide20-step-icon">📈</div>
              <div class="slide20-step-number">02</div>
            </div>
            <div class="slide20-step-body">
              <div class="slide20-step-title">CINR ≥ 10 dB</div>
              <ul class="slide20-step-bullets">
                <li>Moins d’interférences</li>
                <li>Stabilité du lien</li>
                <li>Réduction des coupures</li>
              </ul>
            </div>
          </div>

          <div class="slide20-step">
            <div class="slide20-step-marker">
              <div class="slide20-step-icon">🧠</div>
              <div class="slide20-step-number">03</div>
            </div>
            <div class="slide20-step-body">
              <div class="slide20-step-title">Modulation</div>
              <div class="slide20-step-subtitle">64 QAM / 256 QAM</div>
              <ul class="slide20-step-bullets">
                <li>Efficacité spectrale</li>
                <li>Meilleur rendement du réseau</li>
              </ul>
            </div>
          </div>

          <div class="slide20-step">
            <div class="slide20-step-marker">
              <div class="slide20-step-icon">⚡</div>
              <div class="slide20-step-number">04</div>
            </div>
            <div class="slide20-step-body">
              <div class="slide20-step-title">Débit RLC 252 Mbps</div>
              <ul class="slide20-step-bullets">
                <li>Capacité réseau accrue</li>
                <li>Vidéo HD/4K fluide</li>
                <li>Navigation et téléchargement rapides</li>
              </ul>
            </div>
          </div>

          <div class="slide20-step">
            <div class="slide20-step-marker">
              <div class="slide20-step-icon">😊</div>
              <div class="slide20-step-number">05</div>
            </div>
            <div class="slide20-step-body">
              <div class="slide20-step-title">Meilleur QoE</div>
              <ul class="slide20-step-bullets">
                <li>Navigation fluide</li>
                <li>Expérience stable et agréable</li>
                <li>Satisfaction utilisateur renforcée</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'slide-21',
    title: 'Conclusion & Perspectives',
    eyebrow: 'Conclusion',
    notes: 'Conclure en 2-3 phrases. Ouvrir sur la SA et l\'IA. Rester 1-2 minutes max sur cette slide avant les questions.',
    html: `
      <div class="slide21-shell">
        <div class="slide21-grid">
          <div class="slide21-col slide21-col-left">
            <div class="slide21-section-title slide21-section-title-blue">✓ RÉALISATIONS</div>
            <div class="slide21-card">
              <div class="slide21-icon">✓</div>
              <div class="slide21-card-body">
                <div class="slide21-card-title">Simulation MATLAB</div>
                <div class="slide21-card-text">Simuler l'effet du beamforming sous MATLAB</div>
              </div>
              <div class="slide21-badge">MATLAB</div>
            </div>
            <div class="slide21-card">
              <div class="slide21-icon">✓</div>
              <div class="slide21-card-body">
                <div class="slide21-card-title">Calibration Modèle SPM</div>
                <div class="slide21-card-text">Calibrer le modèle SPM et obtenir des résultats précis</div>
              </div>
              <div class="slide21-badge">PRÉCISION</div>
            </div>
            <div class="slide21-card">
              <div class="slide21-icon">✓</div>
              <div class="slide21-card-body">
                <div class="slide21-card-title">Déploiement 5G NR</div>
                <div class="slide21-card-text">Développer une solution pour le réseau 5G NR de Mobilis</div>
              </div>
              <div class="slide21-badge">MOBILIS</div>
            </div>
          </div>
          <div class="slide21-col slide21-col-right">
            <div class="slide21-section-title slide21-section-title-green">📡 PERSPECTIVES</div>
            <div class="slide21-block slide21-block-blue">
              <div class="slide21-block-title">COURT TERME</div>
              <div class="slide21-block-text">➔ Généralisation du modèle calibré pour les zones Urbaines / Suburbaines / Rurales</div>
            </div>
            <div class="slide21-block slide21-block-sky">
              <div class="slide21-block-title">MOYEN TERME</div>
              <div class="slide21-block-text">➔ Utilisation du Beamforming statique et dynamique et étude des différents scénarios</div>
              <div class="slide21-block-text">➔ Étude d'évolution après l'utilisation des algorithmes LCPV et MVDR</div>
            </div>
            <div class="slide21-block slide21-block-green">
              <div class="slide21-block-title slide21-block-title-green">LONG TERME</div>
              <div class="slide21-block-text">➔ Optimisation prédictive et adaptative des KPI 5G en temps réel</div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'slide-22',
    title: 'Remerciements',
    eyebrow: 'Fin',
    notes: 'Fin. Inviter le jury à poser des questions. Garder les slides 10, 13, 19 en tête pour les réponses techniques.',
    html: `
      <div class="cover-shell">
        <img class="cover-background-image" src="${coverImageUrl}" alt="Figure de fin de présentation" />
        <div class="cover-content">
          <div class="cover-left">
            <div class="cover-top-title">Soutenance de Master — Réseaux Radio Mobiles</div>
            <h1>Merci de votre attention</h1>
            <p class="lead">Nous sommes à la disposition du jury pour toute question et discussion finale.</p>
            <div class="cover-info-row">
              <div class="compact-card author-block">
                <div class="author-label">Auteurs</div>
                <div class="author-names">HAMOUDI Aymene<br/>BENCHAOUCHE Nadjib</div>
              </div>
              <div class="compact-card cover-side-block">
                <div class="eyebrow">Formation</div>
                <p>Master 2 — Réseaux Radio Mobiles<br/>USTHB 2026</p>
              </div>
              <div class="compact-card cover-side-block">
                <div class="eyebrow">Merci</div>
                <p>Pour votre écoute et votre attention<br/>Questions ?</p>
              </div>
            </div>
            <div class="cover-year">Fin de la présentation</div>
          </div>
        </div>
      </div>
    `
  }
];

let currentSlide = 0;
const slideContainer = document.getElementById('slide-container') as HTMLElement;
const progressFill = document.getElementById('progress-fill') as HTMLElement;
const slideNumber = document.getElementById('slide-number') as HTMLElement;
const prevBtn = document.getElementById('prev-btn') as HTMLButtonElement;
const nextBtn = document.getElementById('next-btn') as HTMLButtonElement;
const fullscreenBtn = document.getElementById('fullscreen-btn') as HTMLButtonElement;

function renderSlides() {
  slideContainer.innerHTML = slides.map((slide, index) => {
    const isCoverSlide = index === 0 || index === slides.length - 1;
    return `
      <section class="slide ${index === 0 ? 'active' : ''} ${isCoverSlide ? 'cover-slide' : ''} ${!isCoverSlide ? 'light-theme' : ''}" data-index="${index}">
        ${isCoverSlide ? '' : `<div class="eyebrow">${slide.eyebrow}</div>`}
        ${isCoverSlide ? '' : `<h1>${slide.title}</h1>`}
        <div class="content-shell">
          ${slide.html}
        </div>
      </section>
    `;
  }).join('');
}

function updateSlideUI() {
  const slidesElements = Array.from(document.querySelectorAll('.slide')) as HTMLElement[];
  slidesElements.forEach((el, index) => {
    el.classList.toggle('active', index === currentSlide);
  });
  const progress = ((currentSlide + 1) / slides.length) * 100;
  progressFill.style.width = `${progress}%`;
  slideNumber.textContent = `${String(currentSlide + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  animateCountUps();
}

function updateFullscreenButton() {
  fullscreenBtn.textContent = document.fullscreenElement ? 'Quitter plein écran' : 'Plein écran';
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}

function animateCountUps() {
  const activeSlide = document.querySelector('.slide.active') as HTMLElement | null;
  if (!activeSlide) return;
  const elements = activeSlide.querySelectorAll<HTMLElement>('[data-count]');
  elements.forEach((el) => {
    const target = Number(el.getAttribute('data-count') ?? '0');
    const isNegative = target < 0;
    const startValue = isNegative ? 0 : 0;
    const duration = 1500;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startValue + (target - startValue) * eased);
      el.textContent = target.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      if (target < 0) {
        el.textContent = `${current}`;
      }
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

function goToSlide(index: number) {
  currentSlide = Math.max(0, Math.min(slides.length - 1, index));
  updateSlideUI();
  broadcastSlide();
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

function broadcastSlide() {
  const channel = new BroadcastChannel('pfe-slides-sync');
  channel.postMessage({ type: 'SLIDE_CHANGE', index: currentSlide, title: slides[currentSlide].title, notes: slides[currentSlide].notes });
  channel.close();
}

function openPresenterMode() {
  window.open('/presenter.html', '_blank', 'width=1200,height=800');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextSlide();
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide();
  if (e.key === 'p' || e.key === 'P') openPresenterMode();
  if (e.key === 'f' || e.key === 'F') {
    e.preventDefault();
    toggleFullscreen();
  }
});

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
fullscreenBtn.addEventListener('click', toggleFullscreen);
document.addEventListener('fullscreenchange', updateFullscreenButton);

renderSlides();
updateSlideUI();
updateFullscreenButton();
