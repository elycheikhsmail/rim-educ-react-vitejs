import "../index.css";
import { ChapterButton } from "../components/components";
import React from "react";
import {
  Link, 
  useNavigate,
} from "react-router-dom";
import { Video, FileText, HelpCircle } from "lucide-react";  


export const Chapters = () => {
  
    const navigate = useNavigate();
    const handleVideoClick = ( ) => {
      navigate("/ViewYoutubeVideo" );
    };
    const handleTextClick = ( ) => {
      navigate("/ViewChapterSummary" );
    };
    return <div className="container mx-auto mt-8 p-4">
      <ul className="space-y-6">
        {[
          "Les Nombres Complexes",
        ].map((chapter, index) => (
          <li key={index} className="border p-4 rounded-lg shadow-md">
            <Link
              to="/Chapters"
              className="text-blue-600 hover:underline text-lg font-semibold mb-3 block"
            >
              {chapter}
            </Link>
          
          </li>
        ))}
      </ul>
  <br />
      <ul className="space-y-2">
        {[
          "Introduction aux nombres complexes",
          "Calcul dans C",
          "Nombres complexes et point du plan",
          "Module d'un complexe",
          "Conjugué d'un complexe",
        ].map((title, index) => (
          <li key={index}>
            <ChapterButton
              icon={Video}
              text={title}
              onClick={() => handleVideoClick()}
            />
  
          </li>
        ))}
      </ul>
      <br />
      <ul className="space-y-2">
        {[
          "Resume du cours",
        ].map((title, index) => (
          <li key={index}>
            <ChapterButton
              icon={FileText}
              text={title}
              onClick={() => handleTextClick()}
            />
  
          </li>
        ))}
      </ul>
  
    </div>
  };
  