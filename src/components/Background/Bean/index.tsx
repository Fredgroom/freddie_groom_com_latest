import styles from './bean.module.css';

interface BeanProps {
  color: string;
  top: number;
  left: number;
  size: string;
  altAnimation?: boolean;
}

/**
 * Renders a stylized `Bean` component positioned based on provided coordinates.
 * The component's appearance, such as color and size, can be customized through props.
 *
 * @param props The properties for configuring the Bean component.
 * @param props.color The color theme of the bean, which determines the color style applied. Must be a valid key in `bean.module.css`.
 * @param props.top The vertical position of the bean (in pixels).
 * @param props.left The horizontal position of the bean (in pixels).
 * @param props.size Specifies the size of the bean. Must correlate with a corresponding style in `bean.module.css`.
 * @param props.altAnimation A boolean flag that, if true, applies an alternate animation style to the bean.
 */

const Bean = ({ color, top, left, size, altAnimation }: BeanProps) => {
  if (color == 'primary') return;
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
