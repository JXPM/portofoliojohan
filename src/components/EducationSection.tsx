"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, Clock } from "lucide-react";

const EducationSection = () => {
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

    const section = document.getElementById("formations");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const formations = [
    {
      id: 1,
      titre: "Developpeur IA & Data",
      etablissement: "EPSI - Ecole d'Ingénierie Informatique",
      periode: "Septembre 2025 - Aujourd’hui",
      lieu: "Lille, France",
      description: "Formation en Data Engineering et DevOps.",
      competences: ["Machine Learning", "Agile & Scrum", "DevOps/SysOps", "Docker"],
    },
    {
      id: 2,
      titre: "Chargé de Projet IA & Data",
      etablissement: "IA School - Groupe GEMA",
      periode: "Octobre 2023 - Juin 2025",
      lieu: "Lille, France",
      description: "Formation en Data Engineering et Intelligence Artificielle.",
      competences: ["Statistiques appliquées", "IA", "Power platform", "Prompt engineering"],
      role: "Délégué de classe",
    },
    {
      id: 3,
      titre: "Formation Anglais Professionnel",
      etablissement: "BT Institute",
      periode: "2021 - 2022",
      lieu: "Accra, Ghana",
      description:
        "Formation intensive en anglais professionnel avec obtention d’un certificat attestant du niveau.",
      competences: ["Communication en anglais", "Anglais professionnel", "Prise de parole"],
    },
  ];

  const certifications = [
    {
      id: 1,
      nom: "Apprendre les languages HTML & CSS",
      organisme: "Skilleos",
      dateObtention: "Octobre 2024",
      statut: "Obtenu",
      description: "Certification validant les compétences en HTML et CSS",
    },
    {
      id: 2,
      nom: "Outlook Microsoft 365",
      organisme: "Skilleos",
      dateObtention: "Octobre 2024",
      statut: "Obtenu",
      description: "Certification officielle Microsoft pour Outlook",
    },
    {
      id: 3,
      nom: "Programmation Python (1/2)",
      organisme: "Skilleos",
      dateObtention: "Septembre 2024",
      statut: "Obtenu",
      description: "Certification officielle pour Python",
    },
    {
      id: 4,
      nom: "Programmation Python (2/2)",
      organisme: "Skilleos",
      dateObtention: "Septembre 2024",
      statut: "Obtenu",
      description: "Certification officielle pour Python",
    },
    {
      id: 5,
      nom: "Computer Hardware Basics",
      organisme: "Cisco Networking Academy",
      dateObtention: "Juillet 2024",
      statut: "Obtenu",
      description: "Certification Cisco sur les bases du matériel informatique",
    }
  ];

  const getStatutIcon = (statut: string) => {
    return statut === "Obtenu" ? (
      <CheckCircle className="w-4 h-4 text-green-600" />
    ) : (
      <Clock className="w-4 h-4 text-blue-600" />
    );
  };

  return (
    <section id="formations" className="py-20 bg-background">
      <div className="container-width section-padding">
        <div className={`fade-in ${isVisible ? "visible" : ""}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Formation & Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mon parcours académique et mes certifications professionnelles
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formations */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                <GraduationCap className="w-6 h-6" />
                Formations
              </h3>

              <div className="space-y-6">
                {formations.map((formation) => (
                  <Card
                    key={formation.id}
                    className="border-border/50 hover:border-border transition-colors"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        {formation.titre}
                        {formation.role && (
                          <Badge className="bg-blue-100 text-blue-700 border-blue-300">
                            {formation.role}
                          </Badge>
                        )}
                      </CardTitle>
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
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
                      {formation.periode.includes("Aujourd’hui") && (
                        <Badge variant="secondary" className="w-fit">
                          En cours
                        </Badge>
                      )}
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {formation.description}
                      </p>
                      <div>
                        <h5 className="font-medium mb-2">Compétences acquises</h5>
                        <div className="flex flex-wrap gap-1">
                          {formation.competences.map((competence, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
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

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <Card
                    key={cert.id}
                    className="border-border/50 hover:border-border transition-colors"
                  >
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold">{cert.nom}</h4>
                            <p className="text-sm text-muted-foreground">
                              {cert.organisme}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            {getStatutIcon(cert.statut)}
                            <Badge variant="secondary" className="text-xs">
                              {cert.statut}
                            </Badge>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground">
                          {cert.description}
                        </p>

                        <div className="text-sm text-muted-foreground">
                          Obtenue: {cert.dateObtention}
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
