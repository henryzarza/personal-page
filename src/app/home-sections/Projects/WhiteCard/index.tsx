import Image from 'next/image';
import Link from 'next/link';
import { ProjectInfo } from '@/types';
import { OutLink } from '@/components/Icons';
import styles from './styles.module.css';

type WhiteCardProps = {
  className: string;
  data: ProjectInfo;
  classContainer: string;
}

function WhiteCard({ className, data, classContainer } : WhiteCardProps) {
  return (
    <li className={classContainer}>
      <div className={className} data-year={data.year}>
        <h6 className="heading-4">{data.title}</h6>
        <p className="base-text">{data.description}</p>
        <figure className={styles.img}>
          <Image
            src={data.image}
            alt={data.title}
            sizes="(min-width: 40rem) 30vw, 50vw"
            objectFit="cover"
            objectPosition="top"
            fill
          />
        </figure>
        <Link 
          href={data.link}
          target="blank"
          rel="external"
          className={`highlighted-text ${styles.link}`}
        >
          See more <OutLink className={styles['link-icon']} />
        </Link>
      </div>
    </li>
  );
}

export default WhiteCard;
