/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, tente fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.

Depois de fazer o que foi pedido acima, crie um repositório no GitHub para a sua aplicação e abra uma issue no repositório do curso com:

- O link da sua versão do quiz;
- Quais foram as suas maiores dúvidas ou dificuldades durante a execução desse exercício;
- Quais foram as suas menores dificuldades durante a execução desse exercício.

Link do repositório do curso: https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo/issues

Ps: se você não conseguiu fazer tudo o que foi pedido acima, abra a issue mesmo assim =)
*/

const form = document.querySelector('.quiz-form')
const button = document.querySelector('button')

const p = document.createElement('p')
p.setAttribute('class', 'text-info')
button.insertAdjacentElement('beforebegin', p)

const quizAnswers = ['C', 'A', 'B', 'D']

const showUserScore = event => {
  event.preventDefault()

  let score = 0

  const userAnswers = [
    event.target.inputQuestion1.value,
    event.target.inputQuestion2.value,
    event.target.inputQuestion3.value,
    event.target.inputQuestion4.value
  ]

  const userScore = (answer, index) => {
    if (answer === quizAnswers[index]) {
      score += 25
    }
    return score
  }

  userAnswers.forEach(userScore)

  return p.textContent = `Você acertou ${score}% do Quiz`
}

form.addEventListener('submit', showUserScore)
