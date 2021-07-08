function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getArrayOfInt (array) {
    let tab = [];
    while (tab.length < 11) {
        let albumIndex = getRandomInt(0, array.length);
        if (!tab.includes(albumIndex)) {
          tab.push(array[albumIndex]);
        }
    }
    return tab
}


module.exports = {
    getRandomInt,
    getArrayOfInt
}