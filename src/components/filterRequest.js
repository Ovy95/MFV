/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
export function mostCommonLanguage(dataArray, name) {
  const counts = dataArray.reduce((value, count) => {
    value[count] = (value[count] || 0) + 1;
    return value;
  }, {});
  const maxCount = Math.max(...Object.values(counts));
  const mostFrequent = Object.keys(counts).filter((k) => counts[k] === maxCount);

  if (mostFrequent.length > 1) {
    return [
      `${name} has join favourite language's ${mostFrequent.sort().join(', ')}`,
    ];
  }
  return [`${name}'s favourite is ${mostFrequent}`];
}

export function filterDataByLanguages(data) {
  const langarray = [];
  data.map((element) => {
    if (`${element.language}` !== 'null') langarray.push(`${element.language}`);
  });

  if (langarray.length === 0) {
    return ["Couldn't determine user's favourite language"];
  }
  return langarray;
}
export function noRepos(data) {
  return Object.keys(data).length === 0;
}

export function FavouriteLanguage(data, name) {
  if (noRepos(data) === true) {
    return [`${name} has no repositories to check against`];
  }
  const filterdata = filterDataByLanguages(data);
  return mostCommonLanguage(filterdata, name);
}
