import { ReactNode } from 'react';

interface PropsType {
  htmlFor: string;
  children: ReactNode;
  className?: string;
}

export default function SearchLabel({
  className,
  htmlFor,
  children,
}: PropsType) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
}
