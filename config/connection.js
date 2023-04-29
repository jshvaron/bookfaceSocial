const { connect, connection } = require('mongoose');

connect('mongodb://localhost/bookFaceSocialDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;