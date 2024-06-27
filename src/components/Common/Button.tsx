import { MouseEventHandler, ReactNode } from 'react';

interface PropsType {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  title?: string;
  ariaLabel?: string;
  stylesClassName?: string;
  dataIndex?: number;
  disabled?: boolean;
}

export default function Button({
  onClick,
  children,
  dataIndex = 0,
  disabled = false,
  title = '',
  ariaLabel = '',
  stylesClassName = '',
}: PropsType) {
  return (
    <button
      disabled={disabled}
      data-index={dataIndex}
      className={stylesClassName}
      onClick={onClick}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
