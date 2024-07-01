import "../index.css";

import { ChapterButton } from "../components/components";
import React from "react";
import {
  Link, 
  useNavigate,
} from "react-router-dom";
import { Video, FileText, HelpCircle } from "lucide-react";  


export const Home = () => {
    const navigate = useNavigate();
    const handleNavigationClick = (chapter) => {
      console.log("navigation button clicked")
      navigate("/Chapters", { state: { chapter } });
    };
  
    return (
      <div className="container mx-auto mt-8 p-4">
        <p className="mb-6 text-gray-700">
          Chers élèves mauritaniens candidats au Baccalauréat (série D ou C),
          apprenez les mathématiques efficacement chez vous en ligne, à l'aide :
        </p>
        <div>
          <ol>
            <li>
              des Leçons au format vidéos couvrant le cours des mathématiques
              conformement au programme mauritanien
            </li>
            <li>
              des Leçons au format text couvrant le cours des mathématiques
              conformement au programme mauritanien
            </li>
            <li>
              des quiz couvrant toutes les savoir de base du cours des maths
            </li>
          </ol>
  
        </div>
  
        <p className="mb-4 font-semibold">Commencez par choisir un chapitre :</p>
        <ul className="space-y-6">
          {[
            "Les Nombres Complexes",
            "Les Fonctions Trigonométriques",
            "La Dérivation",
            "Les Intégrales",
            "Géométrie dans l'Espace",
          ].map((chapter, index) => (
            <li key={index} className="border p-4 rounded-lg shadow-md">
              <Link
                to="/Chapters"
                className="text-blue-600 hover:underline text-lg font-semibold mb-3 block"
              >
                {chapter}
              </Link>
              <div className="flex space-x-2 mt-2">
                <ChapterButton
                  icon={Video}
                  text="Vidéos"
                  onClick={() =>   handleNavigationClick() }
                />
                <ChapterButton
                  icon={FileText}
                  text="Textes"
                  onClick={() =>   handleNavigationClick() }
                />
                <ChapterButton
                  icon={HelpCircle}
                  text="Quiz"
                  onClick={() =>   handleNavigationClick() }
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };