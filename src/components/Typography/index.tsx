import { ReactNode } from 'react';

interface Typography {
  children: ReactNode;
}

export function H1({ children }: Typography) {
  return (
    <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
      {children}
    </h1>
  );
}
export function H2({ children }: Typography) {
  return (
    <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 my-11'>
      {children}{' '}
    </h2>
  );
}
export function H3({ children }: Typography) {
  return (
    <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight my-4'>
      {children}{' '}
    </h3>
  );
}

export function H4({ children }: Typography) {
  return (
    <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>
      {children}
    </h4>
  );
}

export function P({ children }: Typography) {
  return <p className='leading-7 [&:not(:first-child)]:mt-6'>{children}</p>;
}

export function Blockquote({ children }: Typography) {
  return (
    <blockquote className='mt-6 border-l-2 pl-6 italic flex'>
      {children}
    </blockquote>
  );
}

export function InlineCode({ children }: Typography) {
  return (
    <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
      {children}
    </code>
  );
}

export function Lead({ children }: Typography) {
  return <p className='text-xl text-muted-foreground'>{children}</p>;
}

export function Large({ children }: Typography) {
  return <div className='text-lg font-semibold'> {children}</div>;
}

export function Small({ children }: Typography) {
  return (
    <small className='text-sm font-medium leading-none'> {children}</small>
  );
}
