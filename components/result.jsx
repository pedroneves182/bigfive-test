import { useState } from 'react';
import resultText from '../data/result.json'
import DomainCombobox from './ui/domain-combobox';


export default function Result({ result }) {
  const [expandedDomains, setExpandedDomains] = useState({});
  let factor = 0;

  Object.entries(result).forEach(([domain, data]) => {
    const currentFactor = (100 - data.average) / 2;
    if (currentFactor > factor) {
      factor = currentFactor;
    }
  });

  function toggleExpand(domain) {
    setExpandedDomains(prevState => ({
      ...prevState,
      [domain]: !prevState[domain]
    }));
  };

  return (
    <div className='space-y-6' id='result'>
      <h1 className='text-4xl font-bold text-blue-950'>Os Cinco Grandes</h1>

      <div className='space-y-2'>
        {Object.entries(result).map(([domain, data]) => {
          const domainText = resultText[domain];
          return (
            <div key={domainText.title} className='flex space-y-1 items-center'>
              <div className='bg-blue-600 py-3 px-3 rounded-md' style={{ width: `${data.average + factor}%` }}>
                <h2 className='text-sm lg:text-2xl font-semibold text-white'>{domainText.title}</h2>
              </div>
              <p className='ml-2 text-sm lg:text-xl text-blue-950'>{data.score}</p>
            </div>
          );
        })}
      </div>
      <div>
        {/* <p className='text-base text-blue-950 font-semibold'>Selecione um dominio...</p> */}
        <DomainCombobox />
      </div>

      {Object.entries(result).map(([domain, data]) => {
        const domainText = resultText[domain];

        return (
          <div key={domain}>
            <h2 className='text-2xl'>{domainText.title}</h2>
            <p>{domainText.shortDescription}</p>
            <button onClick={() => toggleExpand(domain)} className='text-blue-600'>
              {expandedDomains[domain] ? 'Ler Menos' : 'Ler Mais'}
            </button>
            {expandedDomains[domain] && <p>{domainText.description}</p>}
          </div>
        )
      })}
    </div>
  );
}
