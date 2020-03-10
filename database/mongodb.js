const mongoose = require('mongoose');

// Prints the operations mongoose sends to MongoDB to the console.
mongoose.set('debug', true);

// Make findOneAndUpdate() and findOneAndRemove() use native findOneAndUpdate() rather than findAndModify().
mongoose.set('useFindAndModify', false);

// Make all connections set the useNewUrlParser option by default.
mongoose.set('useNewUrlParser', true);

// Make all connections set the useUnifiedTopology option by default.
mongoose.set('useUnifiedTopology', true);

// Specifies a cumulative time limit in milliseconds for processing operations on the cursor. 
// MongoDB interrupts the operation at the earliest following interrupt point.
mongoose.set('maxTimeMS', 30000);

module.exports = mongoose;