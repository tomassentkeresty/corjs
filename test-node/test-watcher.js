var U = require('../dist/utils.git');

var w = new U.Watcher();
w.push('./files/watchme1.md');
w.push('./files/watchme2.md');
w.on('change', function(filepath, prev, curr) {
    U.log('filepath: ' + filepath);
    U.log('prev:', prev);
    U.log('curr:', curr);
});
