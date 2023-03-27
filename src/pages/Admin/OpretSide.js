import { useNavigate } from "react-router-dom";
import PostForm from "../../components/Admin/PostForm";

export default function OpretSide() {
  const navigate = useNavigate();

  async function createPost(newPost) {
    const url =
      "https://fidofidoline-2e00c-default-rtdb.europe-west1.firebasedatabase.app//produkter.json";
    const firstResponse = await fetch(url);
    let firstData = await firstResponse.json();

    if (firstData === null) {
      //Hvis data er lig med 0, er der ingen produkter.
      firstData = []; // Create new array for objects
    }

    firstData.push(newPost); // Add new post to object list

    const response = await fetch(url, {
      method: "PUT", // Overwrites database
      body: JSON.stringify(firstData), // Rewrite database
    });
    const data = await response.json();
    console.log(data);
    navigate("/admin");
  }

  return (
    <section className="page">
      <h1>Opret nyt produkt</h1>
      <PostForm savePost={createPost} />
    </section>
  );
}
