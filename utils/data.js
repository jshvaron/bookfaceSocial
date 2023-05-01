const userNames =  [
    'Amelia',
    'Isaac',
    'Eleanor',
    'Gabriel',
    'Olivia',
    'Elijah',
    'Sophia',
    'Levi',
    'Charlotte',
    'Lucas',
    'Ava',
    'Caleb',
    'Mia',
    'Daniel',
    'Harper',
    'Samuel',
    'Emily',
    'Jacob',
    'Lily',
    'Alexander',
];

const userthoughts = [
    '#1 no cheese',
    'im hungry',
    'I need to get groceries',
    'some coffee sounds great',
    'thinking......',
    'time to listen to music',
    'lets build',
    'I need to workout today',
    'feeling pretty lazy',
    'cant wait to get a new job',
    'im full',
    'I love my dogs',
    'I need to buy more candles',
    'zzzzzzzzzz sleepy',
    'ooooops for got to charge my phone',
    'what do yall think?',
    'red, blue, green, bacon',
    'I just got new glasses!',
    'New project!',
    'call of duty new season has been fun.',
];

const userReactions = [
    'uhhhhhhh',
    'FTW',
    'wow love this',
    'tell me more',
    'like',
    'dislike',
    'this sucks',
    'no thanks',
    'double it and pass it to the next person',
    'who cares',
    'and then?',
    'YATA',
    '......',
];


// Get a random item given an array
const getFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];

// get random name form get array function using userNames data array strings
const getRandoName = () => 
    `${getFromArray(userNames)}${getFromArray(userNames)}`;

const getAssignedThought = (init) => {
    let thoughtResult = [];
    for (let i = 0; i < int; i++) {
        thoughtResult.push({
            thoughtContent: getFromArray,
            reactionContent: [...getRandomReaction(2)]//will refrence getRandomReaction function @ line: 82
        })
    }
};


// generates responses from userReaction data array strings
const getRandomReaction = (int) => {
    if (int === 1) { 
        return getFromArray(userReactions);
    }
}
let results = [];
for (let i = 0; i < int; i++) {
  results.push({
    userReactions: getFromArray(userReactions),
    userNames: getRandoName(),
  });
  return results;
}

module.exports = { getRandoName, getAssignedThought, getRandomReaction };



