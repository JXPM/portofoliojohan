"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, LinkedinIcon, Mail, Sparkles } from "lucide-react";

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
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-8 pt-24 pb-12"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-8 w-48 h-48 bg-primary/20 blur-3xl rounded-full" />
        <div className="absolute bottom-16 right-8 w-52 h-52 bg-indigo-500/20 blur-3xl rounded-full" />
      </div>

      <div className="container-width section-padding relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-primary">
                <Sparkles className="w-3.5 h-3.5" />
                Alternant Assistant Architecte & Innovation IA
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  <span className="text-gradient">Johan BILE</span>
                </h1>
                <h2 className="mt-3 text-lg sm:text-xl text-muted-foreground">
                  Data / AI Developer - Lille
                </h2>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                Je conçois des solutions data et IA utiles au metier: automatisation
                des processus, pipelines de donnees et modeles predictifs. Objectif:
                transformer la complexite technique en impact concret.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("#projets")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Voir mes projets
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("#contact")}
                >
                  Me contacter
                </Button>
                <a href="/CV_Bile_Kouame.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="lg">
                    Ouvrir mon CV
                  </Button>
                </a>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <img
                  src="https://github.com/JXPM.png"
                  alt="Photo de Johan Bile"
                  className="h-12 w-12 rounded-full border border-white/30 object-cover shadow-md"
                />
                <a
                  href="https://www.linkedin.com/in/kouam%C3%A9-johan-bile-8682b8296/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-2.5 rounded-lg hover:bg-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/JXPM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-2.5 rounded-lg hover:bg-accent transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:bilekouame04@gmail.com"
                  className="glass p-2.5 rounded-lg hover:bg-accent transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-3 shadow-2xl shadow-primary/10">
              <img
                src="/banner-linkedin.png"
                alt="Banniere personnelle de Johan Bile"
                className="w-full h-auto rounded-xl border border-border/60"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button onClick={() => scrollToSection("#apropos")} className="animate-bounce" aria-label="Defiler vers le bas">
            <ArrowDown className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
