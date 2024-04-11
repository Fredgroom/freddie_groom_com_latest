import styles from './bean.module.css';

interface BeanProps {
  color: string;
  top: number;
  left: number;
  size: string;
  altAnimation?: boolean;
}
const Bean = ({ color, top, left, size, altAnimation }: BeanProps) => {
  if (color == 'primary') return;
  console.log('altAnimation', altAnimation);
  return (
    <div
      className={`${styles.bean} ${styles[color]} ${styles[size]} ${
        altAnimation && styles.altAnimation
      }`}
      style={{ top: `${top}px`, left: `${left}px` }}
    />
  );
};

export default Bean;
