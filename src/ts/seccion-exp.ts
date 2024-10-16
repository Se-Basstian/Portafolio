import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("seccion-exp")
export class SeccionExp extends LitElement {
  protected render() {
    return html`
      <section>
        <slot name=img></img>
        <div>
          <p><slot></slot></p>
          <button class="izquierda">Repositorio</button>
          <button class="derecha">Ver demo</button>
        </div>
      </section>
    `;
  }

  static styles = css`
    :host {
      inline-size: 100%;
    }
    section {
      max-inline-size: 1136px;
      padding-inline: 32px;
      margin-inline: auto;
      margin-block-start: 64px;
      display: flex;
      align-items: center;
      gap: 16px;

      @media (width <= 768px) {
        max-inline-size: 704px;
        margin-block-start: 32px;
      }
      @media (width <= 360px) {
        padding-inline: 16px;
      }
    }

    ::slotted(img) {
      inline-size: 752px;
      block-size: 406px;
    }

    p {
      font-size: 2.2rem;

      @media (width <= 768px) {
        font-size: 1.6rem;
      }
    }

    button {
      inline-size: 116px;
      block-size: 51px;
      font-size: 1.6rem;
      transition: transform 0.2s linear;

      @media (width <= 768px) {
        font-size: 1.4rem;
        inline-size: 96px;
        block-size: 40px;
      }
      &.izquierda {
        border: 1px solid #2a7ae4;
        color: #2a7ae4;
        margin-inline-end: 16px;
      }

      &.derecha {
        background-color: #2a7ae4;
        border: none;
        color: white;
      }

      &:hover {
        transform: scale(1.2);
      }

      &:active {
        transform: rotate(270deg);
      }
    }

    @media (width <= 768px) {
      section {
        align-items: flex-start;
        flex-direction: column;
      }

      ::slotted(img) {
        inline-size: 100%;
        block-size: auto;
      }
    }

    @media (width <= 360px) {
    }
  `;
}
