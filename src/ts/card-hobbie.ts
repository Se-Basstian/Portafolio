import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("card-hobbie")
export class CardHobbie extends LitElement {
  @property()
  titulo = "Titulo";
  @property()
  imgUrl?: string;
  @property()
  imgAlt?: string;

  render() {
    return html`
      <div>
        <h3>${this.titulo}</h3>
        <img src=${this.imgUrl} alt=${this.imgAlt} />
        <p><slot></slot></p>
      </div>
    `;
  }

  static styles = css`
    :host {
      inline-size: fit-content;
    }

    div {
      background-color: white;
      inline-size: 600px;
      block-size: 400px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      border-radius: 15px;
      transition: transform 0.25s linear;
      overflow-x: hidden;
      transition: inline-size 0.5s linear;
      box-shadow:
        0 1px 3px,
        0 -1px 3px;

      &:hover {
        inline-size: 100%;
      }
    }

    h3 {
      font-size: 2.5rem;
      text-decoration: underline;

      @media (width <= 768px) {
        font-size: 2rem;
      }
    }

    img {
      inline-size: 500px;
      margin-inline: 50px;
      margin-block: auto;
      border-radius: 15px;
    }

    p {
      inline-size: 480px;
      block-size: 270px;
      margin-block: auto;
      line-height: 1.8;

      @media (width <= 768px) {
        font-size: 1.6rem;
      }

      @media (width <= 360px) {
        font-size: 1.4rem;
      }
    }

    @media (width <= 768px) {
      div {
        display: block;
        inline-size: 100%;
      }

      h3 {
        margin-block: 20px;
        inline-size: fit-content;
        margin-inline: auto;
      }

      p {
        inline-size: 95%;
        margin-inline: auto;
      }

      img {
        inline-size: 300px;
        margin-inline: 2.5% 10px;
        float: inline-start;
      }
    }

    @media (width <= 360px) {
      div {
        font-size: 250px;
      }
    }
  `;
}
