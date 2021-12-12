import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Secure Data Access Server',
    Svg: require('../../static/img/data_access_server.svg').default,
    description: (
      <>
        Access data from remote sources using a single REST API with builtin
          security.
      </>
    ),
  },
  {
    title: 'Python and R API',
    Svg: require('../../static/img/client_libraries.svg').default,
    description: (
      <>
        Analyze your data in R or Python with firecrest client libraries.
      </>
    ),
  },
  {
    title: 'Interactive Dashboard',
    Svg: require('../../static/img/dashboard.svg').default,
    description: (
      <>
          Visualize your data in real-time with interactive Shiny dashboards.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
