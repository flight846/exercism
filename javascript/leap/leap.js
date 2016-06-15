var Leap = function() {};

Leap.prototype.isLeap = function(year) {
    if (year % 4 !== 0 || year % 100 === 0 && year % 400 !== 0) {
        return false;
    } else {
        return true;
    }
};

module.exports = Leap;