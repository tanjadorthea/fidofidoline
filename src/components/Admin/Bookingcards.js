import { Link } from "react-router-dom";
export default function Bookingcards({ post }) {
  // "post" refererer til oplysningerne i firebase JASON
  // fx post.pris = pris i elementet JSON.
  return (
    <div className="kort">
      <div className="tekst">
        <h3>{post.produktnavn}</h3>
        <p>{post.dato}</p>
        <p>{post.tid}</p>
        <hr />
        <p>{post.hundenavn}</p>
        <p>{post.hunderace}</p>
        <hr />
        <p>{post.navn}</p>
        <p>{post.adresse}</p>
        <p>{post.postnr}</p>
        <p>{post.by}</p>
        <p>{post.email}</p>
        <p>{post.mobil}</p>
      </div>
    </div>
  );
}
