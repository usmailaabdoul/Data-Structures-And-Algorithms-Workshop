// 1 split string to subStrings
// 2 sort all subStrings and compare each substirng with all the other substrings to find duplicate

function splitStrToSubstrs(string) {
    let subStr = [];

    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length + 1; j++) {
            subStr.push(string.slice(i, j))
        }
    }
    return subStr;
}

function Anagrams(string) {
    var i, j, anagrams = [];

    let arrOfSplitStrings = splitStrToSubstrs(string);

    for (i = 0; i < arrOfSplitStrings.length; i++) {
        for (j = i + 1; j < arrOfSplitStrings.length; j++) {
            let subStrings = arrOfSplitStrings[i].split('').sort().join('');
            let currentSubString = arrOfSplitStrings[j].split('').sort().join('');

            if (subStrings == currentSubString) {
                let anagram = [arrOfSplitStrings[i], arrOfSplitStrings[j]]
                anagrams.push(anagram)
            }

        }
    }
    let anagramsLength = anagrams.length;

    return { 
        anagramsLength, 
        anagramaticPairs: anagrams
    }
}




console.log(Anagrams('mom'));