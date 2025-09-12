"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, Quote, Star } from "lucide-react";

interface Experience {
  id: number;
  poste: string;
  entreprise: string;
  periode: string;
  lieu: string;
  description: string[];
  technologies: string[];
  temoignage?: {
    texte: string;
    auteur: string;
    poste: string;
    note: number;
  };
}

const ExperienceSection = () => {
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

    const section = document.getElementById("experiences");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const experiences: Experience[] = [
    {
      id: 1,
      poste: "Développeur Full Stack & Data",
      entreprise: "Fingec",
      periode: "Mai 2025 - Juillet 2025",
      lieu: "Rouen, France",
      description: [
        "Développement d'un site web modernes avec React/Next.js et Node.js",
        "Conception et implémentation d'APIs ",
        "Deploiement et gestion de bases de données PostgreSQL et du site web",
        "Automatisation de certaines tâches répétitives via des scripts ",
        "Maintenance et amélioration des systèmes existants"
      ],
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "SQL", "Excel", "Hostinger"],
      temoignage: {
        texte: "Un développeur exceptionnel avec une vision technique remarquable. Son travail sur notre plateforme a considérablement amélioré nos performances et l'expérience utilisateur.",
        auteur: "Christian N'KATTA",
        poste: "Fondateur & CEO, Fingec",
        note: 5
      }
    },
    {
      id: 2,
      poste: "Data analyste",
      entreprise: "ICM holding",
      periode: "Juin 2024 - Aout 2024",
      lieu: "Abidjan, CÔTE D'IVOIRE",
      description: [
        "Analyse et traitement des données de l'ERP de l'entreprise pour faciliter la prise de décision.",
        "Déploiement, gestion et accompagnement utilisateurs du nouvel ERP Odoo.",
        "Maintenance et optimisation des systèmes existants pour améliorer leur fiabilité.",
        "Analyse EDA  des données de la base de données principale de l'entreprise."
      ],
      technologies: ["Maintenance", "Odoo", "SQL", "PostgreSQL", "Python"],
      temoignage: {
        texte: "Très professionnel et réactif. Il a transformé nos données en insights  époustouflants. Toujours à l'écoute et force de proposition.",
        auteur: "Alexis Assi-Kacou",
        poste: "Directeur IT, ICM holding",
        note: 4
      }
    }
  ];

  const renderStars = (note: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < note ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="experiences" className="py-20 bg-muted/30">
      <div className="container-width section-padding">
        <div className={`fade-in ${isVisible ? "visible" : ""}`}>
          {/* Titre de section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Expériences Professionnelles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mon parcours professionnel et les témoignages de mes anciens employeurs
            </p>
          </div>

          {/* Timeline des expériences */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={exp.id}
                className="border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold">{exp.poste}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.entreprise}</span>
                        <span>•</span>
                        <span>{exp.lieu}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.periode}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Description des missions */}
                  <div>
                    <h4 className="font-semibold mb-3">Missions principales</h4>
                    <ul className="space-y-2">
                      {exp.description.map((mission, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                          {mission}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies utilisées */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies utilisées</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Témoignage */}
                  {exp.temoignage && (
                    <div className="bg-accent/50 rounded-lg p-6 border-l-4 border-foreground">
                      <div className="flex items-start gap-3">
                        <Quote className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                        <div className="space-y-3">
                          <p className="italic text-foreground">
                            "{exp.temoignage.texte}"
                          </p>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold text-sm">{exp.temoignage.auteur}</p>
                              <p className="text-xs text-muted-foreground">{exp.temoignage.poste}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              {renderStars(exp.temoignage.note)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
