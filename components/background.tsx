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
      className={`relative bg-gradient-to-r from-catppuccin_blue via-catppuccin_lavender to-catppuccin_mauve bg-black opacity-95 ${styles}`}
    >
      {children}
    </section>
  );
};

export default Background;
