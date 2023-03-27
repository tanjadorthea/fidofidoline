import { useNavigate } from "react-router-dom";

export default function ServicecardsAdmin({ post }) {
  const navigate = useNavigate();

  //Når en bruger klikker på produktkort, dirigeres brugeren videre til formularside.
  function opdaterKlik() {
    navigate(`posts/${post.id}`);
    //post.id er kortets unikke placering (index) i produktlisten,
    //så det vides, hvilket kort brugeren klikkede på.
  }

  return (
    <div className="kort adminkort" onClick={opdaterKlik}>
      <div className="tekst">
        <h3>{post.produktnavn}</h3>
        <p>{post.beskrivelse}</p>
        <hr />
        <p>Varighed: {post.varighed}</p>
        <p>Pris kr. {post.pris}</p>
      </div>
    </div>
  );
  //ovenstående er en eventlistener, der lytter på, hvilket kort brugeren klikker på ved "Opdaterklik"
  //som dirigerer brugeren til det pågældende kort (function OpdaterKlik -> naviger til post.id).
}
