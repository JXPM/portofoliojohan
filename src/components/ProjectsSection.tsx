"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import meteoImage from "@/assets/meteo.jpg";
import hangMan from "@/assets/hangman.png";
import coder from "@/assets/coder.jpg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink, Github, Eye, Filter } from "lucide-react";
import { StaticImageData } from "next/image";


interface Project {
  id: number;
  titre: string;
  description: string;
  descriptionComplete: string;
  image: string | StaticImageData;
  technologies: string[];
  categorie: string;
  lienDemo?: string;
  lienGithub?: string;
  dateCreation: string;
  statut: "Terminé" | "En cours" | "Archivé";
}

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filtreActif, setFiltreActif] = useState("Tous");
  const [projetsAffiches, setProjetsAffiches] = useState<Project[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("projets");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const projets: Project[] = [
    {
      id: 1,
      titre: "E-commerce Platform",
      description: "Plateforme e-commerce complète avec panier, paiement et gestion admin",
      descriptionComplete: "Développement d'une plateforme e-commerce moderne avec React et Node.js. Intégration de Stripe pour les paiements, gestion des stocks, système d'authentification avancé et tableau de bord administrateur complet. L'application gère plus de 1000 produits et traite en moyenne 500 commandes par jour.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Django"],
      categorie: "Web App",
      lienGithub: "https://github.com/JXPM/Maudiashop_ecommerce",
      dateCreation: "2025",
      statut: "En cours"
    },
    {
      id: 2,
      titre: "Meteo App",
      description: "Application meteo en temps réel",
      descriptionComplete: "Application web permettant de consulter la météo en temps réel pour n'importe quelle ville. Affiche les températures, conditions météorologiques, prévisions sur plusieurs jours et alertes météo. Interface intuitive et responsive, avec un design moderne.",
      image: meteoImage,
      technologies: ["Tkinter", "Plyer", "Python", "OpenWeather API"],
      categorie: "Web App",
      lienGithub: "https://github.com/JXPM/meteoapp",
      dateCreation: "2025",
      statut: "Terminé"
    },
    {
      id: 3,
      titre: "Hangman",
      description: "Jeu Hangman en Python",
      descriptionComplete: "Highman est un jeu Hangman développé en Python. Il permet à l'utilisateur de deviner des mots lettre par lettre, affiche le pendu au fur et à mesure des erreurs et propose une interface console simple et interactive. Idéal pour pratiquer la logique et la programmation en Python.",
      image: hangMan,
      technologies: ["Python"],
      categorie: "Web App",
      lienGithub: "https://github.com/JXPM/highman",
      dateCreation: "2025",
      statut: "Terminé"
    },
    {
      id: 4,
      titre: "Inference Causale",
      description: "identification et visualisation de la relation de cause à effet entre des variables",
      descriptionComplete: "Dashboard analytique d'inférence causale complet pour un projet data. Intégration de multiples sources de données, identification des relations de cause à effet entre les variables clés, visualisations interactives des effets causals et des contrefactuels. Permet de simuler différentes interventions, générer des insights actionnables et exporter les résultats. Traite efficacement de grands volumes de données tout en offrant des performances optimales et une interface intuitive pour les analystes et décideurs.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: [
        "Python", "pandas", "NumPy", "Plotly", "Dash / Streamlit", "SQL / PostgreSQL"],
      categorie: "Dashboard",
      lienDemo: "https://analytics-demo.com",
      lienGithub: "https://github.com/JXPM/inference_causale",
      dateCreation: "2025",
      statut: "Terminé"
    },
    {
      id: 5,
      titre: "fingecwebsite",
      description: "site web vitrine avec chatbot IA",
      descriptionComplete: "FingecWebsite est un site web vitrine interactif intégrant un chatbot basé sur l'IA. Il permet aux visiteurs de poser des questions en temps réel, de naviguer facilement à travers les services de l’entreprise et d’obtenir des informations instantanées. Le site est responsive, sécurisé et optimisé pour une expérience utilisateur fluide sur desktop et mobile.",
      image: coder,
      technologies: ["React", "Next.js", "Firebase", "OpenAI API", "Tailwind CSS"],
      categorie: "Site web",
      lienDemo: "https://fingec.fr",
      lienGithub: "https://github.com/JXPM/fingecwebsite",
      dateCreation: "2025",
      statut: "Terminé"
    },
    {
      id: 6,
      titre: "Axomove - AI predictive analytics",
      description: "Plateforme d'analytique prédictive basée sur l'IA",
      descriptionComplete: "Axomove-predict est une plateforme streamlit d'analytique prédictive utilisant des modèles d'IA avancés pour aider les entreprises à anticiper l'abandon de clients. Interface utilisateur intuitive, intégration facile avec les systèmes existants et rapports personnalisés.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop",
      technologies: ["XGBoost", "EDA", "Python", "Streamlit", "Encoding", "pandas"],
      categorie: "AI/ML",
      lienGithub: "https://github.com/JXPM/datapredict",
      dateCreation: "2025",
      statut: "Terminé"
    }
  ];

  const categories = ["Tous", ...Array.from(new Set(projets.map(p => p.categorie)))];

  useEffect(() => {
    if (filtreActif === "Tous") {
      setProjetsAffiches(projets);
    } else {
      setProjetsAffiches(projets.filter(p => p.categorie === filtreActif));
    }
  }, [filtreActif]);

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case "Terminé": return "bg-green-100 text-green-800";
      case "En cours": return "bg-blue-100 text-blue-800";
      case "Archivé": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="projets" className="py-20 bg-background">
      <div className="container-width section-padding">
        <div className={`fade-in ${isVisible ? "visible" : ""}`}>
          {/* Titre de section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Mes Projets
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez une sélection de mes réalisations récentes et projets personnels
            </p>
          </div>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((categorie) => (
              <Button
                key={categorie}
                variant={filtreActif === categorie ? "default" : "outline"}
                size="sm"
                onClick={() => setFiltreActif(categorie)}
                className="gap-2"
              >
                <Filter className="w-4 h-4" />
                {categorie}
              </Button>
            ))}
          </div>

          {/* Grille de projets */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projetsAffiches.map((projet, index) => (
              <Card
                key={projet.id}
                className="group border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={typeof projet.image === "string" ? projet.image : projet.image.src}
                    alt={projet.titre}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className={`text-xs ${getStatutColor(projet.statut)}`}>
                      {projet.statut}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    {projet.lienDemo && (
                      <a
                        href={projet.lienDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    )}
                    {projet.lienGithub && (
                      <a
                        href={projet.lienGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-lg group-hover:text-foreground/80 transition-colors">
                        {projet.titre}
                      </h3>
                      <span className="text-xs text-muted-foreground">{projet.dateCreation}</span>
                    </div>

                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {projet.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {projet.technologies.slice(0, 3).map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {projet.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{projet.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="w-full mt-4 gap-2">
                          <Eye className="w-4 h-4" />
                          Voir les détails
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-xl">{projet.titre}</DialogTitle>
                          <DialogDescription>
                            Créé en {projet.dateCreation} • {projet.categorie}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-4">
                          <img
                            src={typeof projet.image === "string" ? projet.image : projet.image.src}
                            alt={projet.titre}
                            className="w-full h-64 object-cover rounded-lg"
                          />

                          <div>
                            <h4 className="font-semibold mb-2">Description complète</h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {projet.descriptionComplete}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Technologies utilisées</h4>
                            <div className="flex flex-wrap gap-2">
                              {projet.technologies.map((tech, idx) => (
                                <Badge key={idx} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-2">
                            {projet.lienDemo && (
                              <a
                                href={projet.lienDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Button className="gap-2">
                                  <ExternalLink className="w-4 h-4" />
                                  Voir la démo
                                </Button>
                              </a>
                            )}
                            {projet.lienGithub && (
                              <a
                                href={projet.lienGithub}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Button variant="outline" className="gap-2">
                                  <Github className="w-4 h-4" />
                                  Code source
                                </Button>
                              </a>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
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

export default ProjectsSection;
