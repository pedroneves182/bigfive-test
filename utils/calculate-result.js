export default function calculateResult(answers) {
  const result = {};

  answers.forEach(answer => {
    const { domain, facet, score } = answer;

    if (!result[domain]) {
      result[domain] = {
        score: 0,
        count: 0,
        average: 0,
        facet: {}
      };
    }

    result[domain].score += parseInt(score, 10);
    result[domain].count += 1;

    if (!result[domain].facet[facet]) {
      result[domain].facet[facet] = {
        score: 0,
        count: 0,
        average: 0
      };
    }

    result[domain].facet[facet].score += parseInt(score, 10);
    result[domain].facet[facet].count += 1;
  });

  // Convert the result object to an array of entries, sort it, and then convert it back to an object
  const sortedResult = Object.entries(result)
    .sort((a, b) => b[1].score - a[1].score)
    .reduce((acc, [key, value]) => {
      // Calculate the average score for the domain
      value.average = Math.round(value.score * 100 / (value.count * 5));

      // Sort the facets within each domain
      const sortedFacets = Object.entries(value.facet)
        .sort((a, b) => b[1].score - a[1].score)
        .reduce((facetAcc, [facetKey, facetValue]) => {
          // Calculate the average score for the facet
          facetValue.average = Math.round(facetValue.score * 100 / (facetValue.count * 5));
          facetAcc[facetKey] = facetValue;
          return facetAcc;
        }, {});

      acc[key] = {
        ...value,
        facet: sortedFacets
      };
      return acc;
    }, {});

  return sortedResult;
}
