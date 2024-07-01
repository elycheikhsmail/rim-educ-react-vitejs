import "../index.css";
 
import React from "react";
import {
  Link,  
} from "react-router-dom"; 

export const ViewChapterSummary = () => {
    return (
      <>
  
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
        <div className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-4">Résumé du cours sur les nombres complexes</h2>
          <div className="mb-2">
            <h3 className="text-lg font-semibold mb-2">Introduction aux nombres complexes</h3>
            <p>Les nombres complexes sont des nombres de la forme <i>a + bi</i>, où <i>a</i> et <i>b</i> sont des nombres réels et <i>i</i> est l'unité imaginaire.</p>
          </div>
          <div className="mb-2">
            <h3 className="text-lg font-semibold mb-2">Opérations sur les nombres complexes</h3>
            <p>Les opérations principales incluent l'addition, la soustraction, la multiplication et la division des nombres complexes.</p>
          </div>
          <div className="mb-2">
            <h3 className="text-lg font-semibold mb-2">Forme polaire des nombres complexes</h3>
            <p>La forme polaire <i>r(cosθ + i sinθ)</i> permet de représenter les nombres complexes sous forme de magnitude et d'angle.</p>
          </div>
          <div className="mb-2">
            <h3 className="text-lg font-semibold mb-2">Applications des nombres complexes</h3>
            <p>Les nombres complexes trouvent des applications en électromagnétisme, en théorie des circuits, et en analyse harmonique.</p>
          </div>
        </div>
      </>
    );
  }
  