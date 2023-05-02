const connection = require('../config/connection');
// lets us pull User/Thoughts to refrence in this file
const { User, Thought  } = require('../models');
const { getRandoName, getAssignedThought } = require('./data')
connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await User.deleteMany({});
    await Thought.deleteMany({});


    const thoughtsArr = [];
    for (let i = 0; i < 20; i++) {
        const thought = getAssignedThought();
        thoughtsArr.push({
            thoughtText: `${thought}`,
        });
    }


    await Thought.collection.insertMany(thoughtsArr);
    
    
    const usersArr = [];
    // const thoughtsArr = getAssignedThought(4);

    for(let i = 0 ; i < 11; i++) {
        const user = getRandoName();
        usersArr.push({
            username: `${user}`,
            email: `${user}@gmail.com`
        })
    }
    
    usersArr[0].thoughts = [thoughtsArr[0]._id, thoughtsArr[1]._id];
    
    await User.collection.insertMany(usersArr);



    console.table(usersArr);
    console.table(thoughtsArr);
    console.info('Seeding complete!');
    process.exit(0);
});