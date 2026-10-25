import { useEffect, useState } from 'react';
import AnimateIn from '../AnimateIn';
import { api } from '../../api';

// value is split so the unit can be set in the accent colour
const DEFAULT_STATS = [
  { value: '12', unit: 'k', label: 'Creators writing daily' },
  { value: '2.4', unit: 'M', label: 'Drafts shipped' },
  { value: '10', unit: '×', label: 'Faster first drafts' },
  { value: '98', unit: '%', label: 'Would recommend' },
];

function StatsSection() {
  const [stats, setStats] = useState(DEFAULT_STATS);

  useEffect(() => {
    api.stats()
      .then((data) => {
        setStats([
          { value: (data.users / 1000).toFixed(0), unit: 'k', label: 'Creators writing daily' },
          { value: (data.generations / 1000000).toFixed(1), unit: 'M', label: 'Drafts shipped' },
          { value: String(data.speedMultiplier), unit: '×', label: 'Faster first drafts' },
          { value: String(data.satisfaction), unit: '%', label: 'Would recommend' },
        ]);
      })
      .catch(() => {
        // Keep defaults if server is offline
      });
  }, []);

  return (
    <section className="stats-section" id="stats">
      <div className="container">
        <div className="stats-head">
          <h2>The margins, so far.</h2>
          <span className="mono">Updated live · Public beta</span>
        </div>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <AnimateIn key={s.label} delay={i} className="stat-item">
              <div className="stat-value">{s.value}<em>{s.unit}</em></div>
              <div className="stat-label">{s.label}</div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
