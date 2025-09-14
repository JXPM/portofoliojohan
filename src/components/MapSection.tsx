"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DynamicMap = dynamic(() => import("./MapSectionClient"), {
  ssr: false,
  loading: () => (
    <div className="w-full flex justify-center items-center h-[500px]">
      <div className="animate-pulse bg-muted rounded-lg w-full max-w-4xl h-full"></div>
    </div>
  )
});

export default function MapSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="map" className="py-20 bg-muted/30 relative z-0">
      <div className="container-width section-padding text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Carte de mon parcours
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Découvrez les villes où j'ai étudié et travaillé
        </p>
      </div>
      {mounted && <DynamicMap />}
    </section>
  );
}