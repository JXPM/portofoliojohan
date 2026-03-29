"use client";

import { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock3, ExternalLink, Filter, Github, GitFork, Star } from "lucide-react";

interface Project {
  id: number;
  titre: string;
  description: string;
  image: string;
  technologies: string[];
  categorie: string;
  lienDemo?: string;
  lienGithub?: string;
  impact: string;
  source: "manuel" | "auto";
  stars?: number;
  forks?: number;
  updatedAt?: string;
}

interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  pushed_at: string;
  fork: boolean;
}

const manualProjects: Project[] = [
  {
    id: 1,
    titre: "Fingec Website",
    description: "Site vitrine moderne avec experience utilisateur optimisee et chatbot IA.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    technologies: ["Next.js", "React", "Tailwind CSS", "OpenAI API"],
    categorie: "Web",
    lienDemo: "https://fingec.fr",
    lienGithub: "https://github.com/JXPM/fingecwebsite",
    impact: "Vitrine plus engageante et interactive pour les visiteurs",
    source: "manuel",
  },
  {
    id: 2,
    titre: "Inference Causale Dashboard",
    description: "Dashboard d'analyse causale pour comprendre les relations cause-effet.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    technologies: ["Python", "Pandas", "Plotly", "SQL"],
    categorie: "Data",
    lienGithub: "https://github.com/JXPM/inference_causale",
    impact: "Aide a la decision via des insights explicables",
    source: "manuel",
  },
  {
    id: 3,
    titre: "Axomove Predict",
    description: "Plateforme d'analytique predictive pour anticiper le churn client.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
    technologies: ["Streamlit", "XGBoost", "EDA", "Pandas"],
    categorie: "IA",
    lienGithub: "https://github.com/JXPM/datapredict",
    impact: "Detection proactive des risques de desengagement client",
    source: "manuel",
  },
  {
    id: 4,
    titre: "Automation Workflows (n8n)",
    description: "Scenario d'automatisation metier pour relances, suivi et notifications.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
    technologies: ["n8n", "Webhook", "APIs", "No-code/Low-code"],
    categorie: "Automatisation",
    impact: "Gain de temps operationnel et reduction des taches manuelles",
    source: "manuel",
  },
];

const ProjectsSection = () => {
  const [filtreActif, setFiltreActif] = useState("Tous");
  const [githubRepos, setGithubRepos] = useState<GithubRepo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/JXPM/repos?sort=updated&per_page=100");
        if (!response.ok) {
          return;
        }
        const repos = (await response.json()) as GithubRepo[];
        setGithubRepos(repos.filter((repo) => !repo.fork));
      } catch (_error) {
        setGithubRepos([]);
      }
    };

    fetchRepos();
  }, []);

  const manualRepoNames = useMemo(
    () =>
      new Set(
        manualProjects
          .map((project) => project.lienGithub?.split("/").pop()?.toLowerCase())
          .filter((value): value is string => Boolean(value))
      ),
    []
  );

  const autoProjects = useMemo<Project[]>(
    () =>
      githubRepos
        .filter((repo) => !manualRepoNames.has(repo.name.toLowerCase()))
        .slice(0, 8)
        .map((repo) => ({
          id: repo.id + 10_000,
          titre: repo.name,
          description: repo.description || "Projet ajoute automatiquement depuis GitHub.",
          image: `https://opengraph.githubassets.com/1/JXPM/${repo.name}`,
          technologies: repo.language ? [repo.language, "GitHub"] : ["GitHub"],
          categorie: "GitHub Auto",
          lienGithub: repo.html_url,
          impact: "Synchronise automatiquement des qu'un nouveau repo public est cree.",
          source: "auto",
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          updatedAt: repo.pushed_at,
        })),
    [githubRepos, manualRepoNames]
  );

  const allProjects = useMemo(() => [...manualProjects, ...autoProjects], [autoProjects]);
  const categories = useMemo(
    () => ["Tous", ...Array.from(new Set(allProjects.map((project) => project.categorie)))],
    [allProjects]
  );

  const projetsAffiches =
    filtreActif === "Tous"
      ? allProjects
      : allProjects.filter((project) => project.categorie === filtreActif);

  return (
    <section id="projets" className="py-20 bg-background/80">
      <div className="container-width section-padding">
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Projets selectionnes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Projets mis en avant + sync automatique de tes nouveaux repos GitHub.
            </p>
          </div>

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projetsAffiches.map((projet) => (
              <Card
                key={projet.id}
                className="group glass-strong hover:border-primary/60 transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={projet.image}
                    alt={projet.titre}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
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
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-lg group-hover:text-foreground/80 transition-colors">
                        {projet.titre}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {projet.categorie}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm line-clamp-2">{projet.description}</p>

                    <div className="flex flex-wrap gap-1">
                      {projet.technologies.slice(0, 3).map((tech, idx) => (
                        <Badge key={`${projet.id}-${tech}-${idx}`} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {projet.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{projet.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {projet.source === "auto" && (
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Star className="w-3.5 h-3.5" /> {projet.stars ?? 0}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <GitFork className="w-3.5 h-3.5" /> {projet.forks ?? 0}
                        </span>
                        {projet.updatedAt && (
                          <span className="inline-flex items-center gap-1">
                            <Clock3 className="w-3.5 h-3.5" />
                            {new Date(projet.updatedAt).toLocaleDateString("fr-FR")}
                          </span>
                        )}
                      </div>
                    )}

                    <p className="text-xs text-primary border border-primary/30 bg-primary/10 rounded-md px-3 py-2">
                      Impact: {projet.impact}
                    </p>
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
