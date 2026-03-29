"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

interface Experience {
  id: number;
  poste: string;
  entreprise: string;
  entrepriseCourt: string;
  logo: string;
  periode: string;
  lieu: string;
  description: string[];
  technologies: string[];
  impact: string;
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      poste: "Stage Assistant Architecte & Innovation IA",
      entreprise: "Fingec - Cabinet d'expertise comptable",
      entrepriseCourt: "FG",
      logo: "/logo-fingec.png",
      periode: "Depuis mars 2026",
      lieu: "Rouen, France",
      description: [
        "Conception de workflows n8n pour automatiser les relances clients",
        "Structuration de flux de donnees pour un meilleur pilotage metier",
        "Collaboration sur des sujets innovation IA orientes productivite",
        "Developpement de detection d'anomalies avec Scikit-learn",
        "Mise en place de scripts d'automatisation metier",
      ],
      technologies: ["n8n", "Python", "SQL", "IA", "Data analysis"],
      impact: "+40% de taux de reponse sur les relances automatisees",
    },

    {
      id: 2,
      poste: "Stage Developpeur Web & Data",
      entreprise: "Fingec - Cabinet d'expertise comptable",
      entrepriseCourt: "FG",
      logo: "/logo-fingec.png",
      periode: "Avril 2025 - Juillet 2025",
      lieu: "Rouen, France",
      description: [
        "Developpement d'un site web reactif avec Next.js",
        "Scripts Python/VBA pour automatiser le traitement des fiches clients",
        "Optimisation SEO et reporting automatise",
      ],
      technologies: ["Next.js", "Python", "VBA", "SEO"],
      impact: "Architecture web optimisee avec une meilleure performance front",
    },
    {
      id: 3,
      poste: "Stage Business Intelligence & Data",
      entreprise: "ICM Holding - Logistique & Transit",
      entrepriseCourt: "ICM",
      logo: "/logo-icm.png",
      periode: "Juin 2024 - Aout 2024",
      lieu: "Abidjan, Cote d'Ivoire",
      description: [
        "Parametrage technique et deploiement de modules ERP Odoo",
        "Requetes SQL complexes pour automatiser des rapports",
        "Participation au backend d'un portail emploi (DB/API)",
      ],
      technologies: ["Odoo", "PostgreSQL", "SQL Server", "API"],
      impact: "Traitement fiable de 87 candidatures mensuelles",
    },
  ];

  return (
    <section id="experiences" className="py-20 bg-muted/20">
      <div className="container-width section-padding">
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Experiences professionnelles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un parcours oriente data, automatisation et resultats concrets.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <Card
                key={exp.id}
                className="glass-strong hover:border-primary/60 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="relative h-16 w-16 rounded-xl bg-muted border border-border/50 overflow-hidden flex items-center justify-center text-sm font-semibold shadow-sm flex-shrink-0">
                        <span>{exp.entrepriseCourt}</span>
                        <img
                          src={exp.logo}
                          alt={`Logo ${exp.entreprise}`}
                          className="absolute inset-0 h-full w-full object-contain bg-white p-1"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold">{exp.poste}</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground mt-2 flex-wrap">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{exp.entreprise}</span>
                          <span>•</span>
                          <span>{exp.lieu}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.periode}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
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

                  <div>
                    <h4 className="font-semibold mb-3">Technologies utilisees</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary">
                    Impact: {exp.impact}
                  </div>
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
