//jshint: esversion:6

module.exports.getDate = function() {

    const today = new Date();

    let options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };

    return today.toLocaleDateString("en-US", options);

};

module.exports.getDay = function() {

    const today = new Date();

    let options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };

    return today.toLocaleDateString("en-US", options);

};