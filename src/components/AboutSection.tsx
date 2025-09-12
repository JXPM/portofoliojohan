"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Calendar, Code, Heart } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("apropos");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "Années d'expérience", value: "2+", icon: Calendar },
    { label: "Projets réalisés", value: "15+", icon: Code },
    { label: "Retour positif", value: "7+", icon: Heart },
  ];

  const values = [
    "Innovation créative",
    "Rigueur & qualité",
    "Impact humain",
    "Esprit d’équipe",
    "Croissance personnelle",
  ];

  return (
    <section id="apropos" className="py-20 bg-background">
      <div className="container-width section-padding">
        <div
          className={`fade-in ${isVisible ? "visible" : ""}`}
        >
          {/* Titre de section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              À propos de moi
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez mon parcours, mes valeurs et ce qui me passionne dans le développement
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenu principal */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Mon histoire</h3>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>
                  Depuis toujours curieux des nouvelles technologies, j’ai trouvé ma voie dans le développement et l’univers de la data.
                  Mon intérêt pour l’informatique s’est affirmé au fil de mes études et de mes expériences,
                  où j’ai découvert à quel point j’aimais donner vie à des projets en transformant une idée en solution concrète, utile et intuitive.
                  </p>
                  <p>
                  Avec le temps, j’ai construit une expertise en développement full-stack, tout en explorant le cloud, la data et l’intelligence artificielle.
                  Ce qui me motive, c’est autant le côté technique que la recherche d’un impact humain réel : concevoir des outils qui allient performance, simplicité et innovation.
                  Toujours en quête d’apprentissage, je relève chaque défi comme une opportunité de grandir, de collaborer et d’innover.
                  </p>
                </div>
              </div>

              {/* Localisation et CV */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Lille, France</span>
                </div>
                <Button variant="outline" className="gap-2">
                  <Download className="w-4 h-4" />
                  Télécharger mon CV
                </Button>
              </div>

              {/* Valeurs */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Mes valeurs</h4>
                <div className="flex flex-wrap gap-2">
                  {values.map((value, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {value}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Statistiques */}
            <div className="space-y-6">
              <div className="grid gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="border-border/50 hover:border-border transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-accent">
                          <stat.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Citation */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <blockquote className="text-lg italic text-center">
                  "Les données sont le nouveau pétrole, mais c’est l’analyse qui les transforme en valeur."
                  </blockquote>
                  <cite className="block text-sm text-muted-foreground text-center mt-2">
                  - Clive Humby
                  </cite>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
