import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Bookingcards from "../../components/Admin/Bookingcards";

export default function AdminSide() {
  // "post" kommer til at indeholde alle produkter i en liste (array).
  const [posts, setPosts] = useState([]);
  // "isPost" kan være true eller false. Hvis ingen produkter eksisterer, så er "isPost" false.
  const [isPosts, setIsPosts] = useState(true);
  const navigate = useNavigate();

  // funktion (hook) som henter produkter fra Firebase database.
  useEffect(() => {
    async function getPosts() {
      const url =
        "https://fidofidoline-2e00c-default-rtdb.europe-west1.firebasedatabase.app/bestillinger.json";
      //ved at tilføje "/produkter.json" henviser man til den liste, der ligger i Firebase.
      const response = await fetch(url);
      // data indholder al indhold fra produkt database.
      const data = await response.json();

      // Er der produkter? Hvis der er, er data forskellig fra 0 og de data skal så hentes.
      if (data !== null) {
        const postsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        // Variablen "posts" bliver lig med listen af produkter, der findes i databasen.
        setPosts(postsArray);
      } else {
        // Sætter variablen "isPosts" til false, for der er ingen produkter.
        //Er i udgangspunktet "true", men hvis der ingen data er, bliver den false.
        setIsPosts(false);
      }
    }

    getPosts();
  }, []);

  return (
    <main>
      <h1>bestillingsoversigt</h1>

      {isPosts ? (
        <div className="kortraekke">
          {posts.map((post) => (
            <Bookingcards key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p>Ingen produkter at vise</p>
      )}
    </main>
    //Ovenstående er det samme som if sætning. Hvis der er produkter, vises kortene fra første parentes.
    //Hvis der ikke er produkter, vises teksten fra anden parentes.
  );
}
