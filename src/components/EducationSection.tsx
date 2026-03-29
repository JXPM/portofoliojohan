"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle } from "lucide-react";

const EducationSection = () => {
  const formations = [
    {
      id: 1,
      titre: "Master Ingenierie Data & IA",
      etablissement: "EPSI - Ecole d'ingenierie informatique",
      etablissementCourt: "EPSI",
      logo: "/logo-epsi.png",
      periode: "2025 - 2027 (en cours)",
      lieu: "Lille, France",
      description:
        "Specialisation en data science, machine learning, devops et architecture data.",
      competences: [
        "Machine Learning & Data Science",
        "DevOps / Agile",
        "Solutions IA Cloud",
        "Modelisation data",
      ],
    },
    {
      id: 2,
      titre: "Bachelor Data & Development Management",
      etablissement: "IA School - Groupe GEMA",
      etablissementCourt: "IA",
      logo: "/logo-ia-school.png",
      periode: "2023 - 2025",
      lieu: "Lille, France",
      description:
        "Socle solide en statistiques, developpement, data analyse et IA appliquee.",
      competences: [
        "Prompt engineering",
        "Statistiques appliquees",
        "Python / R",
        "Power Platform",
      ],
      role: "Delegue de classe",
    },
  ];

  const certifications = [
    {
      id: 1,
      nom: "Programming Python (1/2 et 2/2)",
      organisme: "Skilleos",
      dateObtention: "Septembre 2024",
      statut: "Obtenu",
      description: "Fondamentaux et pratique Python.",
      style: "from-blue-500/25 to-indigo-500/25",
    },
    {
      id: 2,
      nom: "Outlook Microsoft 365",
      organisme: "Skilleos",
      dateObtention: "Octobre 2024",
      statut: "Obtenu",
      description: "Certification Microsoft Outlook.",
      style: "from-cyan-500/25 to-sky-500/25",
    },
    {
      id: 3,
      nom: "Computer Hardware Basics",
      organisme: "Cisco Networking Academy",
      dateObtention: "Juillet 2024",
      statut: "Obtenu",
      description: "Certification Cisco sur les bases hardware.",
      style: "from-violet-500/25 to-fuchsia-500/25",
    },
  ];

  return (
    <section id="formations" className="py-20 bg-background">
      <div className="container-width section-padding">
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Formation & certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un parcours structure pour evoluer sur les metiers data et IA.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                <GraduationCap className="w-6 h-6" />
                Formations
              </h3>

              <div className="space-y-6">
                {formations.map((formation) => (
                  <Card
                    key={formation.id}
                    className="glass-strong hover:border-primary/60 transition-colors"
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="relative h-16 w-16 rounded-xl bg-muted border border-border/50 overflow-hidden flex items-center justify-center text-sm font-semibold shadow-sm flex-shrink-0">
                          <span>{formation.etablissementCourt}</span>
                          <img
                            src={formation.logo}
                            alt={`Logo ${formation.etablissement}`}
                            className="absolute inset-0 h-full w-full object-contain bg-white p-1"
                            onError={(event) => {
                              event.currentTarget.style.display = "none";
                            }}
                          />
                        </div>
                        <div className="min-w-0">
                          <CardTitle className="text-lg flex items-center gap-2 flex-wrap">
                            {formation.titre}
                            {formation.role && (
                              <Badge className="bg-primary/15 text-primary border-primary/40">
                                {formation.role}
                              </Badge>
                            )}
                          </CardTitle>
                          <div className="flex flex-col gap-2 text-sm text-muted-foreground mt-2">
                            <div className="flex items-center gap-1">
                              <GraduationCap className="w-4 h-4" />
                              <span>{formation.etablissement}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{formation.lieu}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{formation.periode}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{formation.description}</p>
                      <div>
                        <h5 className="font-medium mb-2">Competences acquises</h5>
                        <div className="flex flex-wrap gap-1">
                          {formation.competences.map((competence) => (
                            <Badge key={competence} variant="outline" className="text-xs">
                              {competence}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <Card
                    key={cert.id}
                    className="glass-strong hover:border-primary/60 transition-colors"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`h-20 w-44 rounded-lg border border-border/50 bg-gradient-to-br ${cert.style} overflow-hidden flex items-center justify-center flex-shrink-0 p-3`}
                        >
                          <div className="h-full w-full rounded-md border border-white/20 bg-black/30 px-2 py-1 flex flex-col justify-between">
                            <span className="text-[10px] uppercase tracking-wider text-white/70">
                              Certificate
                            </span>
                            <span className="text-xs font-semibold text-white leading-tight line-clamp-2">
                              {cert.nom}
                            </span>
                            <span className="text-[10px] text-white/70">{cert.organisme}</span>
                          </div>
                        </div>
                        <div className="space-y-3 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h4 className="font-semibold">{cert.nom}</h4>
                              <p className="text-sm text-muted-foreground">{cert.organisme}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <Badge variant="secondary" className="text-xs">
                                {cert.statut}
                              </Badge>
                            </div>
                          </div>

                          <p className="text-sm text-muted-foreground">{cert.description}</p>

                          <div className="text-sm text-muted-foreground">
                            Obtenue: {cert.dateObtention}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
