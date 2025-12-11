import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    {
      name: "Overview",
      href: "/legal",
    },
    {
      name: "Terms of Service",
      href: "/terms-of-service",
    },
    {
      name: "Product Terms",
      href: "/product-terms",
    },
    {
      name: "Data Processing",
      href: "/data-processing-agreement",
    },
    {
      name: "Consultancy Terms",
      href: "/consultancy-services-terms",
    },
    {
      name: "Definitions",
      href: "/definitions",
    },
    {
      name: "DORA Addendum",
      href: "/privacy-policy",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="flex items-center space-x-3 mr-8 flex-shrink-0"
            >
              <img
                src="/images/lovable-logo-text-light.svg"
                alt="Lovable"
                className="h-7 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center flex-1 justify-end overflow-hidden">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-affirmative-primary bg-affirmative/50"
                        : "text-muted-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <button
              className="xl:hidden p-2 rounded-md text-muted-foreground hover:text-affirmative-primary hover:bg-affirmative/10 transition-colors flex-shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive
                          ? "text-affirmative-primary bg-affirmative/10"
                          : "text-gray-600 hover:text-affirmative-primary hover:bg-affirmative/10"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <a href="https://lovable.dev/" className="inline-block">
                <img
                  src="/images/lovable-logo-text-light.svg"
                  alt="Lovable"
                  className="h-8 w-auto"
                />
              </a>
              <p className="text-muted-foreground text-sm max-w-sm">
                Empowering teams to build better applications faster with
                AI-powered development.
              </p>
            </div>

            {/* Links Section */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Product</h3>
              <div className="space-y-2">
                <a
                  href="https://lovable.dev/"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Lovable Platform
                </a>
                <a
                  href="https://enterpriseform.lovable.app/"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enterprise Demo
                </a>
              </div>
            </div>

            {/* Legal Section */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Legal</h3>
              <div className="space-y-2">
                <Link
                  to="/legal"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Legal Overview
                </Link>
                <Link
                  to="/terms-of-service"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/data-processing-agreement"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Data Processing
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © 2025 Lovable. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">
                For questions regarding these terms, contact{" "}
                <a
                  href="mailto:sales@lovable.dev"
                  className="hover:text-foreground transition-colors"
                >
                  sales@lovable.dev
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
