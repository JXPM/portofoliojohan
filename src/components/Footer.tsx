"use client";

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const reseauxSociaux = [
    {
      nom: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/kouam%C3%A9-johan-bile-8682b8296/",
    },
    {
      nom: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/JXPM",
    },
    {
      nom: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:bilekouame04@gmail.com",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border/50 relative">
      {/* Images d'animé en fond */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end pointer-events-none opacity-60">
        {/* Image animé gauche */}
        <div className="transform -translate-x-1 opacity-100">
          <Image
            src="/anime-right.png"
            alt="Décoration anime"
            width={170}
            height={150}
            className="object-contain translate-x-12 translate-y- opacity-200"
          />
        </div>
        
        {/* Image animé droite */}
        <div className="transform translate-x-4 translate-y-4 opacity-100">
          <Image
            src="/anime.png" 
            alt="Décoration anime"
            width={130}
            height={120}
            className="object-contain"
          />
        </div>
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="grid md:grid-cols-3 gap-8 py-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Développeur Full Stack passionné par la création d'expériences
              numériques exceptionnelles.
            </p>
            <div className="flex gap-4">
              {reseauxSociaux.map((reseau, index) => (
                <a
                  key={index}
                  href={reseau.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border hover:bg-accent transition-all"
                  aria-label={reseau.nom}
                >
                  {reseau.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="mailto:bilekouame04@gmail.com" className="block hover:text-foreground transition-colors">
                bilekouame04@gmail.com
              </a>
              <span className="block">Lille, France</span>
            </div>
            <Button onClick={() => scrollToSection("#contact")} variant="outline" size="sm" className="mt-4">
              Me contacter
            </Button>
          </div>
        </div>

        <div className="border-t border-border/50"></div>

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} Portfolio. Créé par Johan kouamé Bilé</span>
          </div>

          <Button onClick={scrollToTop} variant="ghost" size="icon" className="rounded-full" aria-label="Retour en haut">
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;