"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#apropos" },
    { name: "Expériences", href: "#experiences" },
    { name: "Projets", href: "#projets" },
    { name: "Compétences", href: "#competences" },
    { name: "Formation", href: "#formations" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex-shrink-0">
            <button
              className="text-left"
              onClick={() => scrollToSection("#accueil")}
              type="button"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Johan Bile
              </p>
              <h1 className="text-sm sm:text-base font-semibold tracking-tight">
                Data & AI Developer
              </h1>
            </button>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium transition-colors hover:text-foreground text-foreground/70"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <a href="/CV_Bile_Kouame.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                CV
              </Button>
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="glass px-2 pt-2 pb-3 space-y-1 rounded-b-xl">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-base font-medium transition-colors hover:text-foreground text-foreground/70"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="/CV_Bile_Kouame.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 pt-2"
              >
                <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Ouvrir mon CV
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
