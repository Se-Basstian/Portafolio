import "./card-skill";
import "./card-hobbie";
import "./seccion-exp";
import "./card-formacion";

const formulario = document.querySelector("form.formulario");

if (formulario instanceof HTMLElement) {
  const mantenerForma = (label: string, input: string) => {
    const labelNombre = formulario.querySelector(label) as HTMLLabelElement;
    const inputNombre = formulario.querySelector(input) as HTMLInputElement;

    if (labelNombre && inputNombre) {
      inputNombre.addEventListener("blur", () => {
        if (inputNombre.value !== "") {
          inputNombre.classList.add("focus-input");
          labelNombre.classList.add("focus-label");
        } else {
          inputNombre.classList.remove("focus-input");
          labelNombre.classList.remove("focus-label");
        }
      });
    }
  };

  const textArea = formulario.querySelector("#mensaje") as HTMLTextAreaElement;
  const labelMensaje = formulario.querySelector(
    "[for=mensaje]",
  ) as HTMLLabelElement;

  if (textArea && labelMensaje) {
    textArea.addEventListener("blur", () => {
      if (textArea.value !== "") {
        textArea.classList.add("focus-textarea");
        labelMensaje.classList.add("focus-label-mensaje");
      } else {
        textArea.classList.remove("focus-textarea");
        labelMensaje.classList.remove("focus-label-mensaje");
      }
    });
  }

  mantenerForma("[for=nombre]", "#nombre");
  mantenerForma("[for=correo]", "#correo");
  mantenerForma("[for=asunto", "#asunto");
}
