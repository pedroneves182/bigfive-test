'use client'

export default function Question({ id, text, domain, facet, choices, onChoiceChange }) {

  const handleChange = (event) => {
    onChoiceChange(id, {
      id,
      domain,
      facet,
      score: event.target.value,
    });
  };

  return (
    <div className="space-y-4">
      <fieldset className="space-y-4 mt-8">
        <legend className="text-xl font-semibold">{text}</legend>

        {choices.map((choice) => (
          <div id={id} key={`${id}-${choice.score}`} className="flex">
            <input type="radio" name={id} id={`${id}-${choice.score}`} value={choice.score} onChange={handleChange} />
            <label className="ml-3 block text-lg font-medium text-gray-700" htmlFor={`${id}-${choice.score}`}>{choice.text}</label>
          </div>
        ))}

        {/* <div>
          <p>Selected Domain: {selectedChoice?.domain}</p>
          <p>Selected Facet: {selectedChoice?.facet}</p>
          <p>Selected Score: {selectedChoice?.score}</p>
        </div> */}
      </fieldset>
    </div>
  );
}
