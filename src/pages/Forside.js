import hundogpige from "../images/doggirlhighfive.jpg";
import { useEffect, useState } from "react";
import Servicecards from "../components/Servicecards";


export default function Forside(){
    //"post" kommer til at indeholde listen af hundeplejeservices.
    const [posts, setPosts] = useState([]);
    // "isPost" kan være enten "true", hvis der er nogen services, eller "false", hvis der ingen services er.
    const [isPosts, setIsPosts] = useState(true);

    //Data hentes fra firebase og gemmes i "post" variabel.
    useEffect(() => {
        async function getPosts() {
            const url = "https://fidofidoline-2e00c-default-rtdb.europe-west1.firebasedatabase.app/produkter.json";

            //vent indtil response modtager positivt svar fra firebase
            const response = await fetch(url);
            //læg JSON data (listen af produkter) over i variablen "data"
            const data = await response.json();

            //Tjek om der faktisk er produkter på listen (positivt hvis forskellig fra null).
            if (data !== null) {
                const postsArray = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));

                setPosts(postsArray);
            } else {
                setIsPosts(false);
            }
        }

        getPosts();
    }, []);


    return (
        <main>
            <h1>Velkommen til Fido & Fidoline</h1>
            <div class="forsidebillede">
                <img src={hundogpige} alt="billede med hund og pige highfive" className="forside-img"/>
            </div>

            <h2>Se vores udvalg af services:</h2>
    
            {isPosts ? (
                <div className="kortraekke">
                    {posts.map((post) => (
                    <Servicecards key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <p>Ingen produkter at vise</p>
            )}
        </main>
    )
}
// Kommentar til linje 46-55:
// Hvis der er produkter at vise (isposts = true), så går går programmet i løkke.
// (posts.map) - for hvert element (post) på listen (posts), vis produktkort for produktet.