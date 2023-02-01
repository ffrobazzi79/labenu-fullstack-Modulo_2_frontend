import CardVideo from "../../CardVideo";
import "../../../styles.css";

export function Section(props) {
  return (
          <section className="painel-de-videos">
            <CardVideo
              image1={props.card.imagemDoVideo}
              titulo={props.card.titulo}
              textoAlternativo={props.card.textoAlternativo}
            />
          </section>
    )
} 