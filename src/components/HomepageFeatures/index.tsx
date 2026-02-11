import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'All Skill Levels Welcome',
    imgSrc: require('@site/static/img/thp1.png').default,
    description: (
      <>
        New to hacking? No problem! We provide all the guidance you need! Experienced hacker? We’ll help you become even better!
      </>
    ),
  },
  {
    title: 'Level Up Your Game',
    imgSrc: require('@site/static/img/thp2.png').default,
    description: (
      <>
        Learn cybersecurity with our website & weekly training sessions. Apply your skills in offensive and defensive competitions.
      </>
    ),
  },
  {
    title: 'Everyone\'s Welcome',
    imgSrc: require('@site/static/img/thp3.png').default,
    description: (
      <>
        Open to all UGA students! Learn, compete, and grow your practical cybersecurity skills & knowledge with us!
      </>
    ),
  },
];

function Feature({title, imgSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <img src={imgSrc} className={styles.featureImg} alt={title} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
