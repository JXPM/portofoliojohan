"use client";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const iconUrl = new URL("leaflet/dist/images/marker-icon.png", import.meta.url).toString();
const iconShadow = new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).toString();

const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const experiences: { city: string; coords: [number, number]; text: string }[] = [
    { city: "Abidjan", coords: [5.348, -4.027], text: "ICM Holding - Stage IT (2024)" },
    { city: "Accra", coords: [5.560, -0.205], text: "BT Institute - Certificat Anglais (2023)" },
    { city: "Rouen", coords: [49.443, 1.099], text: "Fingec - Développeur Full Stack & Data (2025)" },
    { city: "Paris", coords: [48.8566, 2.3522], text: "Projets persos + études" },
  ];  

export default function MapSectionClient() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const leafletMap = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !leafletMap.current) {
      // créer la carte UNE seule fois
      leafletMap.current = L.map(mapRef.current).setView([10, 0], 3);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors',
      }).addTo(leafletMap.current);

      // placer les marqueurs
      experiences.forEach((exp) => {
        L.marker(exp.coords).addTo(leafletMap.current!)
          .bindPopup(`<b>${exp.city}</b><br>${exp.text}`);
      });
    }

    return () => {
      // cleanup si jamais le composant est démonté
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div
        ref={mapRef}
        style={{ height: "70vh", width: "80%" }}
        className="rounded-2xl shadow-lg"
      />
    </div>
  );
}
