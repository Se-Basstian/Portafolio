import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("card-skill")
export class CardSkill extends LitElement {
  @property()
  titulo = "Título";

  render() {
    return html`
      <div>
        <!-- <img src="{this.imgUrl}" alt="{this.imgAlt}" /> -->
        <slot name="img"></slot>
        <h3>${this.titulo}</h3>
        <p><slot></slot></p>
      </div>
    `;
  }

  static styles = css`
    div {
      background-color: white;
      inline-size: 260px;
      block-size: 320px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 15px;
      transition: transform 0.25s linear;
      box-shadow:
        0 1px 3px,
        0 -1px 3px;
    }

    div:hover {
      block-size: fit-content;
      padding-block: 10px;
      transform: scale(1.1);
      & ::slotted(img) {
        display: none;
      }

      & p {
        display: block;
      }
    }

    h3 {
      inline-size: 95%;
      margin-inline: auto;
      font-size: 2.4rem;
      text-align: center;

      @media (width <= 768px) {
        font-size: 2.3rem;
      }
    }

    p {
      inline-size: 95%;
      margin-inline: auto;
      display: none;

      @media (width <= 360px) {
        font-size: 1.4rem;
      }
    }

    ::slotted(img) {
      max-inline-size: 90%;
    }

    @media (width <= 768px) {
      div {
        flex-direction: row;
        flex-wrap: wrap;
        overflow-y: scroll;
      }

      ::slotted(img) {
        inline-size: 35%;
      }

      h3 {
        inline-size: 65%;
      }

      p {
        display: block;
      }
    }

    @media (width <= 360px) {
      div {
        transform: scale(1);
      }
    }
  `;
}
