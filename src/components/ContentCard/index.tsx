import styles from './contentCard.module.css';

const ContentCard = ({
  children,
  invertedColor,
  title,
}: {
  children: any;
  invertedColor?: boolean;
  title?: boolean;
}) => {
  return (
    <div
      className={`
      ${styles.contentCard}
      ${invertedColor && styles.invertedContentCard}
      ${title && styles.title}
      `}
    >
      {children}
    </div>
  );
};

export default ContentCard;
