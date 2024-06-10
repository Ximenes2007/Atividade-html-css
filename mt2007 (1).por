programa {
  inclua biblioteca Matematica  --> mat
  funcao inicio() {
     
     
     real base, quadrado, cubo, resultado

     escreva("Informe um número: ")
     leia(base)

  // Eleva o número informado ao quadrado
  quadrado = mat.potencia(base, 2.0)
  escreva("\n", base, " ao quadrado é igual a: ", quadrado)
  
  // Eleva o número informado ao cubo
  cubo = mat.potencia(base, 3.0)
  escreva("\n", base, " ao cubo é igual a: ", cubo, "\n")















  }
}
