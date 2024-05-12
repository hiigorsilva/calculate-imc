export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),
  resultIMC: document.querySelector('.result-imc'),

  open() {
    this.wrapper.classList.add('open')
  },
  close() {
    this.wrapper.classList.remove('open')
  },
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}

window.addEventListener("keydown", handleKeydown)
Modal.wrapper.addEventListener("click", handleClickOutside)

function handleClickOutside() {
  Modal.close()
}

function handleKeydown(event) {
  if(event.key === "Escape") {
    Modal.close()
  }
}

export function calculateDiagnostic(result) {
  let diagnosticUser

  switch (true) {
    case result < 18.5:
      diagnosticUser = "Seu peso está baixo"
      break
    case result >= 18.5 && result <= 24.9:
      diagnosticUser = "Seu peso está normal"
      break
    case result >= 25 && result <= 29.9:
      diagnosticUser = "Você está com sobrepeso"
      break
    case result >= 30 && result <= 34.9:
      diagnosticUser = "Você está com obesidade classe I"
      break
    case result >= 35 && result <= 39.9:
      diagnosticUser = "Você está com obesidade classe II"
      break
    case result > 40:
      diagnosticUser = "Você está com obesidade classe III"
      break
    default:
      diagnosticUser = "Valor de IMC inválido"
      break
  }
  return diagnosticUser
}