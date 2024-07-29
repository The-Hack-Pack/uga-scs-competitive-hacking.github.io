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
    imgSrc: require('@site/static/img/img1.webp').default,
    description: (
      <>
        New to hacking? No problem! We provide all the guidance you need! Experienced hacker? We’ll help you become even better!
      </>
    ),
  },
  {
    title: 'Level Up Your Game',
    imgSrc: require('@site/static/img/img2.webp').default,
    description: (
      <>
        Compete as teams in CTF (offensive) and Blue Team (defensive) competitions. Our club meetings offer hands-on training to prep you for the real deal.
      </>
    ),
  },
  {
    title: 'Everyone\'s Welcome',
    imgSrc: require('@site/static/img/img3.webp').default,
    description: (
      <>
        Open to all UGA students, no matter your major. Compete, learn, and grow with us! Boost your skills and build an impressive portfolio!
      </>
    ),
  },
];

function Feature({title, imgSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureImg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
