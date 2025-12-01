const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Emmanuel Archibong. All rights reserved.
          </div>
          <div className="text-muted-foreground text-sm">
            Built with React, TypeScript & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
