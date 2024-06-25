interface PropsType {
  container: React.ElementType;
  children: React.ReactNode;
  className: string;
  id?: string;
}

export default function Container({
  container = 'div',
  children,
  className,
  id,
}: PropsType) {
  const Container = container;
  return (
    <Container className={className} id={id}>
      {children}
    </Container>
  );
}
