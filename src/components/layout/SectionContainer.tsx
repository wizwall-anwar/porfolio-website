interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
  id?: string;
}

export function SectionContainer({
  children,
  className = '',
  narrow = false,
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`w-full px-5 sm:px-8 lg:px-12 ${className}`}
    >
      <div className={`mx-auto ${narrow ? 'max-w-[720px]' : 'max-w-[1200px]'}`}>
        {children}
      </div>
    </section>
  );
}
