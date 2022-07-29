"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product_Controller = void 0;
const MySQL_Service_1 = require("../services/MySQL.Service");
class Product_controller {
    constructor(table_name = 'products') {
        this.table_name = table_name;
        this.getAll = async () => {
            const current_product_list = await MySQL_Service_1.mysql_service.get_all(this.table_name);
            if (current_product_list.length > 0) {
                return current_product_list;
            }
            else {
                return null;
            }
        };
        this.save = async (new_product_data) => {
            await MySQL_Service_1.mysql_service.save(new_product_data, this.table_name);
        };
    }
}
exports.product_Controller = new Product_controller();
//# sourceMappingURL=product.controller.js.map