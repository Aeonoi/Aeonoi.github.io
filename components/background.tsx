interface Props {
  children: React.ReactNode;
  styles?: string;
}

/**
 * The background color gradient
 */
const Background: React.FC<Props> = ({ children, styles }) => {
  return (
    <section className={`relative bg-background  ${styles}`}>
      {children}
    </section>
  );
};

export default Background;
