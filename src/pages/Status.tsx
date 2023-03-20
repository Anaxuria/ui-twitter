import { PaperPlaneRight } from 'phosphor-react'
import { FormEvent, KeyboardEvent, useState } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'

import './Status.css'

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo',
    'Olha, faz sentido',
    'nada a ver'
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

    return (
        <main className='status'>
          <Header title="Tweet"/>

            <Tweet content="Tweet mtt legal" />

            <Separator />

            <form onSubmit={createNewAnswer} className='answer-tweet-form'>
              <label htmlFor="tweet">
                <img src="https://github.com/anaxuria.png" alt="anaxuria" />
                <textarea 
                id="tweet" 
                placeholder="Tweet your answer"
                value={newAnswer}
                onKeyDown={handleHotkeySubmit}
                onChange={(event) => {
                  setNewAnswer(event.target.value)
                }} />
              </label>

              <button type='submit'> <PaperPlaneRight /> <span>Answer</span></button>
            </form>


          {
            answers.map(answer => {
              return (<Tweet key={answer} content={answer} />)
            })
          }
        </main>
    )
}