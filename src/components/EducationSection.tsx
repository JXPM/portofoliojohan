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
      titre: "Master en Informatique",
      etablissement: "École Supérieure d'Informatique",
      periode: "2017 - 2019",
      lieu: "Paris, France",
      description: "Spécialisation en développement web et ingénierie logicielle.",
      mention: "Mention Bien",
      competences: ["Algorithmique", "Bases de données", "Génie logiciel", "Réseaux"]
    },
    {
      id: 2,
      titre: "Licence Informatique",
      etablissement: "Université Paris-Sud",
      periode: "2014 - 2017",
      lieu: "Orsay, France",
      description: "Formation généraliste en informatique.",
      competences: ["Programmation", "Mathématiques", "Systèmes"]
    }
  ];

  const certifications = [
    {
      id: 1,
      nom: "AWS Solutions Architect Associate",
      organisme: "Amazon Web Services",
      dateObtention: "Mars 2023",
      statut: "Obtenu",
      description: "Certification validant les compétences en architecture cloud AWS"
    },
    {
      id: 2,
      nom: "React Developer Certification",
      organisme: "Meta (Facebook)",
      dateObtention: "Janvier 2023",
      statut: "Obtenu",
      description: "Certification officielle Meta couvrant React et ses écosystèmes"
    }
  ];

  const getStatutIcon = (statut: string) => {
    return statut === "Obtenu" ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Clock className="w-4 h-4 text-blue-600" />;
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
                  <Card key={formation.id} className="border-border/50 hover:border-border transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg">{formation.titre}</CardTitle>
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
                      {formation.mention && (
                        <Badge variant="secondary" className="w-fit">
                          {formation.mention}
                        </Badge>
                      )}
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{formation.description}</p>
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
                  <Card key={cert.id} className="border-border/50 hover:border-border transition-colors">
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold">{cert.nom}</h4>
                            <p className="text-sm text-muted-foreground">{cert.organisme}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {getStatutIcon(cert.statut)}
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
