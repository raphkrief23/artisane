const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-heading text-2xl text-foreground mb-4">La fripuille</p>
        <p className="text-muted-foreground text-sm font-light mb-2">
          19 Rue du Palais des Guilhem, 34000 Montpellier
        </p>
        <a href="tel:+33499065080" className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors">
          +33 4 99 06 50 80
        </a>
        <div className="w-8 h-px bg-border mx-auto my-6" />
        <p className="text-muted-foreground text-xs font-light">
          © {new Date().getFullYear()} La fripuille. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;