import { useRef, ReactNode } from 'react';

interface PropsType {
  children: ReactNode;
  className: string;
}

export default function Section({ children, className }: PropsType) {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className={className}>
      {children}
    </section>
  );
}
