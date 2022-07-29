"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = void 0;
const random = (qty) => {
    const numRandoms = [];
    const repeatRandom = {};
    const quantity = qty || 100000000;
    for (let i = 0; i < quantity; i++) {
        const min = Math.ceil(1);
        const max = Math.floor(1000);
        numRandoms.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    numRandoms.forEach((e) => {
        repeatRandom[e] = (repeatRandom[e] || 0) + 1;
    });
    return repeatRandom;
};
exports.random = random;
//# sourceMappingURL=num.random.js.map