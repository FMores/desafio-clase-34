"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
// Configuracion para inicializar las tablas en la DB
// Para cargar las tablas a la DB => npx knex migrate:latest
const up = async (knex) => {
    try {
        await knex.schema.createTable('products', (prod_table) => {
            prod_table.increments();
            prod_table.string('title').notNullable();
            prod_table.decimal('price', 4, 2);
            prod_table.string('thumbnail').notNullable();
            prod_table.timestamp('createdAt').defaultTo(knex.fn.now());
        });
    }
    catch (err) {
        console.log('Error en migrations up');
        throw Error(err.message);
    }
};
exports.up = up;
// Configuracion para borrar las tablas en la DB
// Para eliminar las tablas => npx knex migrate:rollback
const down = async (knex) => {
    try {
        await knex.schema.dropTable('products');
    }
    catch (err) {
        throw Error(err);
    }
};
exports.down = down;
//# sourceMappingURL=20220506030316_init.js.map