import React from "react";

interface FooterProps {
  logoSrc?: string;
  logoAlt?: string;
  tagline?: string;
  href?: string;
}

const Footer: React.FC<FooterProps> = ({
  logoSrc = "/images/lovable-logo-text-light.svg",
  logoAlt = "Lovable",
  tagline = "Made with Lovable",
  href = "https://lovable.dev",
}) => {
  return (
    <footer className="mt-16 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-5 text-center">
        <div className="flex flex-col items-center gap-8">
          {/* Brand Section */}
          <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
            <div className="space-y-4">
              <img src={logoSrc} alt={logoAlt} className="h-8 w-auto" />
              <p className="text-muted-foreground text-sm">{tagline}</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
