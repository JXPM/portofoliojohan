"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, LinkedinIcon, Mail } from "lucide-react";
import joh from "@/assets/joh.jpg";


const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background to-background/50"
    >
    {/* Photo + liens réseaux en haut à gauche */}
      <div className="absolute top-16 left-12 flex flex-col items-center gap-4">
      <div className="w-24 h-24 rounded-full border border-gray-200 shadow-md overflow-hidden">
    {/* SUPPRIMEZ le div de transformation et utilisez object-position */}
        <img
          src={joh.src}
          alt="Photo de profil"
          className="w-full h-full object-cover object-[center_10%]" // Ajustez le pourcentage vertical
        />
      </div>

        {/* Réseaux sociaux */}
        <div className="flex flex-col gap-3">
          <a
            href="https://www.linkedin.com/in/kouam%C3%A9-johan-bile-8682b8296/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border hover:bg-accent transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/JXPM"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border hover:bg-accent transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:bilekouame04@gmail.com"
            className="p-2 rounded-full border border-border hover:bg-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Contenu centré */}
      <div className="container-width section-padding text-center max-w-4xl mx-auto">
        {/* Nom et titre */}
        <div
          className={`mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="text-gradient">Kouamé Bilé</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
            Développeur Full Stack • Data & Cloud Enthusiast • Innovateur Créatif
          </h2>
        </div>

        {/* Description */}
        <div
          className={`mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Animé par la volonté de transformer la donnée en valeur, j’imagine et
            développe des solutions intelligentes qui allient performance,
            simplicité et innovation, tout en rendant la technologie plus
            accessible et utile au quotidien.
          </p>
        </div>

        {/* Boutons d'action */}
        <div
          className={`mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projets")}
              className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90"
            >
              Voir mes projets
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="w-full sm:w-auto"
            >
              Me contacter
            </Button>
          </div>
        </div>

        {/* Flèche de scroll */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={() => scrollToSection("#apropos")}
            className="animate-bounce"
            aria-label="Défiler vers le bas"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
