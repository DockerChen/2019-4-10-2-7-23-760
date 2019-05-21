module.exports = function main(inputs) {
    // write your code here...
    var price;
    if (inputs.distance <= 2) {
        price=6+inputs.parkTime*0.25;

    } else if (inputs.distance > 2 && inputs.distance <= 8) {
        price=6+(inputs.distance-2)*0.8+inputs.parkTime*0.25;
    } else {
        price=6+(8-2)*0.8+(inputs.distance-8)*1.2+inputs.parkTime*0.25;
    }

    return Math.round(price);
};
