import igikon from "../images/ig.png";
import fbikon from "../images/fb.png";
import inikon from "../images/in.png";


export default function Footer(){
    return (
        <footer>
            <div>
                <p><b>Kontakt</b></p>
                <p>fiddo@mail.dk</p>
                <p>+45 12 34 56 87</p>

            </div>

            <div>
                <p><b>Åbningstider</b></p>
                <p>Mandag-Fredag: 7:00-15:00</p>
            </div>

            <div>
                <p><b>SoMe</b></p>
                <img src={igikon} alt="insta ikon" className="someikon"/>
                <img src={fbikon} alt="facebook ikon" className="someikon"/>
                <img src={inikon} alt="linked in ikon" className="someikon"/>
            </div>
        </footer>
    )
}
