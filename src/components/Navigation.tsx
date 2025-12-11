import { StickyNavWrapper } from "./StickyNavWrapper";
import acmeLogo from "@/assets/acme-logo.png";

const Navigation = ({ className }: { className?: string }) => {
  return (
    <StickyNavWrapper className={className}>
      <div className="flex w-full items-center justify-center">
        {/* Logos */}
        <a href="/" className="flex items-center gap-3">
          <img
            src={acmeLogo}
            alt="Acme"
            className="h-5 w-auto object-contain"
          />
          <span className="text-lg text-muted-foreground font-light">×</span>
          <img
            src="/images/lovable-logo-text-light.svg"
            alt="Lovable"
            className="h-5 w-auto"
          />
        </a>
      </div>
    </StickyNavWrapper>
  );
};

export default Navigation;
