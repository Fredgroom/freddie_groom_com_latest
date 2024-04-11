import { ReactNode, useEffect, useRef, useState } from 'react';
import styles from './background.module.css';
import Bean from './Bean';
import createBeansArray from '@/utls/createBeansArray';

interface BackgroundProps {
  children: ReactNode;
}

interface Size {
  width: number;
  height: number;
}
const Background = ({ children }: BackgroundProps) => {
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });
  const [beansArr, setBeansArr] = useState<
    | {
        left: number;
        top: number;
        colour: string;
        size: string;
        altAnimation?: boolean;
      }[]
    | null
  >(null);
  useEffect(() => {
    if (backgroundRef.current) {
      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          setSize({ width, height });
        }
      });
      observer.observe(backgroundRef.current);
    }
  }, []);

  useEffect(() => {
    createBeansArray(size, setBeansArr, 25, 1);
  }, [size]);
  return (
    <main ref={backgroundRef} className={styles.background}>
      {beansArr &&
        beansArr?.map((bean, index) => {
          return (
            <Bean
              top={bean.top}
              left={bean.left}
              color={bean.colour}
              size={bean.size}
              altAnimation={bean.altAnimation}
              key={index}
            />
          );
        })}
      <div className={styles.background_content_wrapper}>{children}</div>
    </main>
  );
};

export default Background;
