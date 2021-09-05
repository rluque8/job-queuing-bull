"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAdapter = void 0;
class BaseAdapter {
    constructor(options = {}) {
        this.formatters = {};
        this.readOnlyMode = options.readOnlyMode === true;
    }
    setFormatter(field, formatter) {
        this.formatters[field] = formatter;
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    format(field, data) {
        return typeof this.formatters[field] === 'function' ? this.formatters[field](data) : data;
    }
}
exports.BaseAdapter = BaseAdapter;
//# sourceMappingURL=base.js.map