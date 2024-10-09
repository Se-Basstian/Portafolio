import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("card-formacion")
export class CardFormacion extends LitElement {
  @property() imgUrl?: string;
  @property() imgAlt?: string;
  @property() titulo?: string;
  @property() datosExtra?: string;

  render() {
    return html`
      <div>
        <img src=${this.imgUrl} alt=${this.imgAlt} />
        <p>
          <b>${this.titulo}</b>
          <br />
          ${this.datosExtra}
        </p>
      </div>
    `;
  }

  static styles = css`
    div {
      inline-size: 368px;
      block-size: 347px;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      background-color: white;
    }

    img {
      inline-size: 192px;
      align-self: center;
      margin-block: auto;
    }

    p {
      font-size: 1.6rem;
      block-size: 69px;
      background-color: #eaf2fd;
      padding-block-start: 8px;
      margin: 0;

      b {
        font-size: 2.2rem;
      }
    }

    @media (width <= 768px) {
      div {
        inline-size: 224px;
        /* block-size: 169px; */
      }

      p {
        font-size: 1.4rem;
        b {
          font-size: 1.6rem;
        }
      }
    }

    @media (width <= 360px) {
      p {
        inline-size: 100%px;
      }
    }
  `;
}
