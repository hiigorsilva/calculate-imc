import { Modal, calculateDiagnostic } from './modal.js'
import { AlertError } from './alert-error.js'
import { caulculateIMC, notANumber } from './utils.js'

const form = document.querySelector('.form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = (event) => {
  event.preventDefault()
  
  const weight = parseFloat(inputWeight.value.replace(",", "."))
  const height = parseFloat(inputHeight.value.replace(/[,.]/g, "")) //Substitui VÍRGULAS e PONTOS por VAZIO globalmente

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)
  
  if(weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }

  const weightOrHeightIsNegative =  weight <= 0 || height <= 0

  if(weightOrHeightIsNegative) {
    AlertError.element.innerText = "Você não pode digitar números negativos"
    AlertError.open()
    return
  }

  AlertError.close()

  const result = caulculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`
  const diagnosticUser = calculateDiagnostic(result)

  Modal.message.innerText = message
  Modal.resultIMC.innerHTML = diagnosticUser
  Modal.open()
}

