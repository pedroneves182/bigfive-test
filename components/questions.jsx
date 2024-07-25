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



  return (
    <div className='max-w-screen-lg m-auto'>
      <form action="" onSubmit={handleSubmit}>
        <div className='space-y-8 divide-y'>
          {questionsList.map((question => <Question key={question.id} {...question} onChoiceChange={handleChoiceChange} />))}
        </div>
        <div className='w-max mx-auto mt-4'>
          <button type='submit' className='bg-blue-700 text-blue-50 text-lg font-semibold px-8 py-2 rounded-md'>
            SALVAR
          </button>
        </div>
      </form>
      <pre>{JSON.stringify(selectedChoices, null, 2)}</pre>
    </div>
  )
}
