import { Link } from "react-router-dom";
export default function Servicecards({ post }) {
  // "post" refererer til oplysningerne i firebase JASON
  // fx post.pris = pris i elementet JSON.
  return (
    <div className="kort">
      <div className="tekst">
        <h3>{post.produktnavn}</h3>
        <p>{post.beskrivelse}</p>
        <hr />
        <p>Varighed: {post.varighed} min.</p>
        <p>Pris kr. {post.pris}</p>
      </div>
    </div>
  );
}
