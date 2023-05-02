const connection = require('../config/connection');
// lets us pull User/Thoughts to refrence in this file
const { User, Thoughts  } = require('../models');
const { getRandoName, getAssignedThought } = require('./data')
connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await User.deleteMany({});
    await Thoughts.deleteMany({});

    
    const usersArr = [];
    // const thoughtsArr = getAssignedThought(4);

    for(let i = 0 ; i < 11; i++) {
        const user = getRandoName();
        usersArr.push({
            username: `${user}`,
            email: `${user}@gmail.com`
        })
    }
    
    
    await User.collection.insertMany(usersArr);

    const thoughtsArr = [];
    for (let i = 0; i < 20; i++) {
        const thought = getAssignedThought();
        thoughtsArr.push({
            thoughtText: `${thought}`,
        });
    }


    await Thoughts.collection.insertMany(thoughtsArr);
    
    console.table(usersArr);
    console.table(thoughtsArr);
    console.info('Seeding complete!');
    process.exit(0);
});