function mostarLetra(letra) {
  let indicador = 0
  for (let i = 0; i < jogarPlv.length; i++) {
    if (letra == jogarPlv[i] && jogarPlv.join('') != plvEmJogo.join('')) {
      pincel.beginPath()
      pincel.fillStyle = '#0A3871'
      pincel.font = "bold 50px 'Inter'"
      pincel.fillText(letra, 305 + 60 * i, 290)
      plvEmJogo[i] = jogarPlv[i]
      indicador++
    }

    if (jogarPlv.join('') == plvEmJogo.join('')) {
      flag = false
      vencedor = true
      vitoria()
    }
  }
  if (indicador == 0) {
    pincel.beginPath()
    pincel.fillStyle = '#560309'
    pincel.font = "bold 50px 'Inter'"
    pincel.fillText(letra, 255 + 60 * contadorLetraError, 390)
    contadorLetraError++
    return false
  } else {
    return true
  }
}
