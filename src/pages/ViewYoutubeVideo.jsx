import "../index.css";
 
import React from "react";
import {
  Link,  
} from "react-router-dom"; 


export const ViewYoutubeVideo = () => (<>
    <div className="container mx-auto mt-8 p-4">
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
  
  
    </div>
  
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Introduction aux nombres complexes</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ABo2m52oEYw?si=EnVjNiQCwOAG8NHS"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-lg shadow-md"
      />
    </div>
  
  
  </>
  );