interface IContainer {
  children: React.ReactNode;
}

export default function Container({ children }: IContainer) {
  return <div className="container mx-auto px-4 md:px-0">{children}</div>;
}
