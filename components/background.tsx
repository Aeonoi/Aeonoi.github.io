interface Props {
  children: React.ReactNode;
  styles: string;
}

/**
 * The background color gradient
 */
const Background: React.FC<Props> = ({ children, styles }) => {
  return (
    <section
      className={`relative bg-gradient-to-r from-catppuccin_blue via-catppuccin_lavender to-catppuccin_mauve ${styles}`}
    >
      <div className="absolute inset-0 bg-black opacity-30" />
      {children}
    </section>
  );
};

export default Background;
