'use client'
import { useEffect, useState } from 'react';
import Questions from '@/components/questions';
import Result from '@/components/result';

export default function Home() {
  const [result, setResult] = useState(null);
  const [isResultVisible, setIsResultVisible] = useState(false);

  // Function to handle setting answers and toggling the visibility
  function handleSetResult(newResult) {
    setResult(newResult);
    setIsResultVisible(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isResultVisible]);

  return (
    <main className="p-4 lg:p-12 max-w-screen-lg mx-auto">
      {isResultVisible ? (
        <Result result={result} />
      ) : (
        <Questions setResult={handleSetResult} result={result}/>
      )}
    </main>
  );
}