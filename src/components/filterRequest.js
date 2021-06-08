 export function mostCommonLanguage(dataArray,name){

    let counts = dataArray.reduce((value, count) => {
      value[count] = (value[count] || 0) + 1;
      return value;
    }, {});
    let maxCount = Math.max(...Object.values(counts));
    let mostFrequent = Object.keys(counts).filter(k => counts[k] === maxCount);
    
    if (mostFrequent.length>1){
      return [name+" has join favourite language's "+mostFrequent.sort().join(', ')]
    }
    return [name+"'s favourite is "+mostFrequent]
  }


  export function filterDataByLanguages(data){
    let langarray = []
    data.map(function(element){
      if(`${element.language}`!== 'null')
       langarray.push(`${element.language}`)
       }
      )

     if (langarray.length === 0){
       return ["Couldn't determine user's favourite language"]
     }
     else {
    return langarray
    }
  }

  export function FavouriteLanguage(data,name){

    if (noRepos(data) === true){
      return [name+ " has no repositories to check against"]
    }
    let filterdata = filterDataByLanguages(data)
    return mostCommonLanguage(filterdata,name)
  }

  export function noRepos(data){
    return Object.keys(data).length === 0;
  }



