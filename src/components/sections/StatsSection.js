import { useEffect, useState } from 'react';
import AnimateIn from '../AnimateIn';
import { api } from '../../api';

const DEFAULT_STATS = [
  { value: '12k+', label: 'Active creators' },
  { value: '2.4M', label: 'Content pieces generated' },
  { value: '10×', label: 'Faster than traditional tools' },
  { value: '98%', label: 'Customer satisfaction' },
];

function StatsSection() {
  const [stats, setStats] = useState(DEFAULT_STATS);

  useEffect(() => {
    api.stats()
      .then((data) => {
        setStats([
          { value: `${(data.users / 1000).toFixed(0)}k+`, label: 'Active creators' },
          { value: `${(data.generations / 1000000).toFixed(1)}M`, label: 'Content pieces generated' },
          { value: `${data.speedMultiplier}×`, label: 'Faster than traditional tools' },
          { value: `${data.satisfaction}%`, label: 'Customer satisfaction' },
        ]);
      })
      .catch(() => {
        // Keep defaults if server is offline
      });
  }, []);

  return (
    <section className="stats-section" id="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <AnimateIn key={s.label} delay={i}>
              <div className="stat-item">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
