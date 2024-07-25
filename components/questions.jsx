'use client'
import questionsList from '@/data/questions.json'
import Question from './question'
import { useState } from 'react';
import calculateResult from '@/utils/calculate-result';

export default function Questions() {
  const [selectedChoices, setSelectedChoices] = useState([]);

  function handleChoiceChange(questionId, selectedChoice) {
    setSelectedChoices((prevChoices) => {
      const updatedChoices = prevChoices.filter(choice => choice.id !== questionId);
      return [...updatedChoices, { ...selectedChoice }];
    });
  };

  function handleSubmit(e) {
    e.preventDefault()
    console.log(calculateResult(selectedChoices))
  }

  function randomize() {
    const inputs = document.querySelectorAll('input');

    for (let i = 0; i < inputs.length; i += 5) {
      // Generate a random index between 0 and 4
      const randomIndex = Math.floor(Math.random() * 5);
      // Click the input at the random index within the current group of 5 inputs
      inputs[i + randomIndex].click();
    }
    document.getElementById('button').scrollIntoView()
  }


  return (
    <div className='max-w-screen-lg m-auto'>
      <button className='bg-blue-700 text-blue-50 text-lg font-semibold px-8 py-2 rounded-md' onClick={randomize}>
        RANDOM
      </button>
      <form action="" onSubmit={handleSubmit}>
        <div className='space-y-8 divide-y'>
          {questionsList.map((question => <Question key={question.id} {...question} onChoiceChange={handleChoiceChange} />))}
        </div>
        <div className='w-max mx-auto mt-4' id='button'>
          <button type='submit' className='bg-blue-700 text-blue-50 text-lg font-semibold px-8 py-2 rounded-md'>
            SALVAR
          </button>
        </div>
      </form>
      <pre>{JSON.stringify(selectedChoices, null, 2)}</pre>
    </div>
  )
}
