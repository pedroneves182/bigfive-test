export default function calculateResult(data) {
  const result = {};

  data.forEach(item => {
    const { domain, facet, score } = item;

    if (!result[domain]) {
      result[domain] = {
        score: 0,
        count: 0,
        facet: {}
      };
    }

    result[domain].score += parseInt(score, 10);
    result[domain].count += 1;

    if (!result[domain].facet[facet]) {
      result[domain].facet[facet] = {
        score: 0,
        count: 0
      };
    }

    result[domain].facet[facet].score += parseInt(score, 10);
    result[domain].facet[facet].count += 1;
  });

  return result;
}