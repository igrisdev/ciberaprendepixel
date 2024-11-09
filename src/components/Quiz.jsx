import { useState } from 'react'

import '../styles/components.css'

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const questions = [
  {
    question: '¿Qué es un ataque DDoS?',
    options: [
      'Ataque de denegación de servicio',
      'Un tipo de virus',
      'Un software malicioso',
      'Ninguna de las anteriores',
    ],
    answer: 'Ataque de denegación de servicio',
  },
  {
    question: '¿Qué significa phishing?',
    options: [
      'Robar información personal',
      'Proteger datos',
      'Crear contraseñas seguras',
      'Ninguna de las anteriores',
    ],
    answer: 'Robar información personal',
  },
  {
    question: '¿Qué es un firewall?',
    options: [
      'Un tipo de malware',
      'Una barrera de seguridad',
      'Un programa antivirus',
      'Ninguna de las anteriores',
    ],
    answer: 'Una barrera de seguridad',
  },
  {
    question: '¿Qué es la autenticación multifactor?',
    options: [
      'Uso de múltiples contraseñas',
      'Verificación en dos pasos',
      'Un tipo de malware',
      'Ninguna de las anteriores',
    ],
    answer: 'Verificación en dos pasos',
  },
  {
    question: '¿Qué es un ransomware?',
    options: [
      'Un tipo de antivirus',
      'Software que bloquea archivos hasta que se pague un rescate',
      'Un firewall avanzado',
      'Ninguna de las anteriores',
    ],
    answer: 'Software que bloquea archivos hasta que se pague un rescate',
  },
  {
    question: '¿Cuál es la función principal del cifrado?',
    options: [
      'Proteger datos sensibles',
      'Eliminar virus',
      'Acelerar conexiones',
      'Ninguna de las anteriores',
    ],
    answer: 'Proteger datos sensibles',
  },
  {
    question: '¿Qué es un exploit?',
    options: [
      'Una herramienta para hackear',
      'Un error en software que puede ser aprovechado',
      'Un tipo de virus',
      'Ninguna de las anteriores',
    ],
    answer: 'Un error en software que puede ser aprovechado',
  },
  {
    question: '¿Qué es la ingeniería social?',
    options: [
      'Manipulación psicológica para obtener información',
      'Uso de tecnología avanzada',
      'Un tipo de ataque cibernético',
      'Ninguna de las anteriores',
    ],
    answer: 'Manipulación psicológica para obtener información',
  },
  {
    question: '¿Qué es un certificado SSL?',
    options: [
      'Una forma de cifrado para proteger datos en línea',
      'Un tipo de malware',
      'Un programa antivirus',
      'Ninguna de las anteriores',
    ],
    answer: 'Una forma de cifrado para proteger datos en línea',
  },
  {
    question: '¿Cómo se puede proteger una contraseña?',
    options: [
      'Usando contraseñas fuertes y únicas',
      'Escribiéndola en papel',
      'Compartiendo con amigos',
      'Ninguna de las anteriores',
    ],
    answer: 'Usando contraseñas fuertes y únicas',
  },
]

export const Quiz = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState(
    shuffleArray([...questions])
  )
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)

  const selectAnswer = selected => {
    setSelectedOption(selected)
    setIsAnswered(true)

    if (selected === shuffledQuestions[currentQuestionIndex].answer) {
      setScore(score + 1)
    }

    setTimeout(() => {
      const nextQuestionIndex = currentQuestionIndex + 1
      if (nextQuestionIndex < shuffledQuestions.length) {
        setCurrentQuestionIndex(nextQuestionIndex)
      } else {
        alert(
          `Juego terminado. Tu puntuación final es ${
            score +
            (selected === shuffledQuestions[currentQuestionIndex].answer
              ? 1
              : 0)
          }/${shuffledQuestions.length}.`
        )
        setShuffledQuestions(shuffleArray([...questions]))
        setCurrentQuestionIndex(0)
        setScore(0)
      }
      setSelectedOption(null)
      setIsAnswered(false)
    }, 1000)
  }

  return (
    <div className='quiz-container'>
      <div className='quiz-header'>
        <h2 className='quiz-title'>
          Pregunta {currentQuestionIndex + 1} de {shuffledQuestions.length}
        </h2>

        <p className='quiz-score'>Puntos: {score}</p>
      </div>
      <h3 className='quiz-question'>
        {shuffledQuestions[currentQuestionIndex].question}
      </h3>

      <div className='quiz-options'>
        {shuffledQuestions[currentQuestionIndex].options.map(option => (
          <button
            key={option}
            className={`quiz-option-button ${
              isAnswered
                ? option === shuffledQuestions[currentQuestionIndex].answer
                  ? 'correct'
                  : 'incorrect'
                : ''
            } ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => selectAnswer(option)}
            disabled={isAnswered} // Deshabilitar los botones después de responder
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
