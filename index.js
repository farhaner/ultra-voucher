let arrays = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map', 'amp'];
const anagramGroup = (word) => {
    let resultMap = new Map();

    for (const words of word) {
        let cleansed = words.split("").sort().join("");
        
        if (resultMap.has(cleansed)) {
            resultMap.get(cleansed).push(words);
        } else {
            resultMap.set(cleansed, [words]);
        }
    }

    return Array.from(resultMap.values());
}
const endResult = anagramGroup (arrays);
console.log(endResult);

// function groupAnagram(words){
//     const anagramGroup = {};

//     for(const word of words){
//         const sortedWord = sortString(word);
//         if(!anagramGroup[sortedWord]){
//             anagramGroup[sortedWord] = [word];   
//         }else{
//             anagramGroup[sortedWord].push(word);
//         }
//     }
//     return Object.values(anagramGroup);
// }
// function sortString(s){
//     return s.split('').sort().join('');
// }
// const words = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map' ];
// const result = groupAnagram(words).map(group => group.sort());
// console.log(words);

// console.log("1");