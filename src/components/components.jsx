import "../index.css";
import React from "react";
import {
  Link, 
  useNavigate,
} from "react-router-dom";
import { Video, FileText, HelpCircle } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';

export const EducationalIcon = ({ size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7L12 2z"></path>
      <line x1="12" y1="2" x2="12" y2="12"></line>
      <path d="M2 7h20"></path>
    </svg>
  );
};


export const ChapterButton = ({ icon: Icon, text, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out"
  >
    <Icon size={18} className="mr-2" />
    <span>{text}</span>
  </button>
);

export const MessageToStudents = () => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-lg">
      <h1 className="text-xl font-bold mb-4">Chers élèves mauritaniens du collège et du lycée,</h1>
      <p className="mb-2">
        Nous voulons vous aider à apprendre efficacement et facilement. Pour cela, nous exploitons les outils technologiques pour vous fournir une expérience d'apprentissage inédite. Nous travaillons dur pour vous fournir des cours complets et conformes au programme mauritanien. Nos cours sont complets dans le sens où vous trouverez des leçons pour tous les niveaux, de la 1ère AS jusqu'à la terminale, et pour toutes les matières de base (maths, sciences, etc.) selon le niveau. En particulier, vous trouverez des leçons au format vidéo et texte, ainsi que des quiz pour tester vos connaissances.
      </p>
      <p className="mb-2">
        Vu que c'est un travail qui prend du temps, nous allons commencer par un niveau donné et une matière donnée (niveau : terminale, série sciences de la nature, matière : maths). Ensuite, nous nous étendrons aux autres niveaux et matières.
      </p>
      <p>
        Vous allez pouvoir utiliser et tester nos services gratuitement en grande partie. Donc, n'hésitez pas à en profiter.
      </p>
    </div>
  );
};

export const WhatsappLink = ({ phoneNumber }) => {
  return (
    <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer"
     className="text-xl font-bold">
      <FaWhatsapp   />
     {phoneNumber} 
    </a>
  );
};
export const Header = () => (
  <header className="bg-blue-600 text-white p-4">
    <nav className="container mx-auto flex justify-between items-center">
    
      <Link to="/" className="text-xl font-bold">
      <EducationalIcon size={48} /> Accueil
      </Link>
      <Link to="/About" className="hover:underline">
        À propos <br />
        de nous
      </Link>
      <WhatsappLink phoneNumber="37493029" />
    </nav>
    
    
  </header>
);

