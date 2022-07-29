"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const seed = async (knex) => {
    const init_products = [
        {
            title: 'cartuchera',
            price: 20,
            thumbnail: 'photo-cartuchera',
        },
        {
            title: 'pendrive',
            price: 20,
            thumbnail: 'photo-pendrive',
        },
    ];
    try {
        await knex('products').del();
        await knex('products').insert(init_products);
    }
    catch (err) {
        console.log('Error en seeds mock.ts');
        throw Error(err);
    }
};
exports.seed = seed;
//# sourceMappingURL=mock.js.map