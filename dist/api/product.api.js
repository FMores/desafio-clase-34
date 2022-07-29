"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product_api = void 0;
const winston_logger_1 = require("../utils/winston.logger");
const MySQL_Service_1 = require("../services/MySQL.Service");
class ProductsApi {
    constructor(table_name = 'products') {
        this.table_name = table_name;
        this.getAll = async () => {
            try {
                const current_product_list = await MySQL_Service_1.mysql_service.get_all(this.table_name);
                if (current_product_list.length > 0) {
                    return current_product_list;
                }
                else {
                    return null;
                }
            }
            catch (err) {
                winston_logger_1.logger.error(`Class ProductApi function getAll() => error= ${err.message}`);
            }
        };
        this.save = async (new_product_data) => {
            try {
                await MySQL_Service_1.mysql_service.save(new_product_data, this.table_name);
            }
            catch (err) {
                winston_logger_1.logger.error(`Class ProductApi function save() => error= ${err.message}`);
            }
        };
    }
}
exports.product_api = new ProductsApi();
//# sourceMappingURL=product.api.js.map