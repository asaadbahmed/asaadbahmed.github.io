export default function AnimatedSection({ children, className, ...props }) {
  return (
    <section
      className={`animate__animated animate__bounceInLeft ${className}`}
      {...(props || {})}
    >
      {children}
    </section>
  );
}
