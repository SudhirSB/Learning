"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbConfig = void 0;
const pg_1 = require("pg");
const Queries_1 = require("./Queries");
class DbConfig {
    constructor() {
        this.user = 'postgres';
        this.host = '10.113.113.81';
        this.database = 'testdb';
        this.password = 'postgres';
        this.port = 5431;
    }
    connectToDb() {
        return __awaiter(this, void 0, void 0, function* () {
            this.client = new pg_1.Client({
                user: this.user,
                host: this.host,
                database: this.database,
                password: this.password,
                port: this.port
            });
            yield this.client.connect();
            return this.client;
        });
    }
    fetchCountOfRecs(q) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client
                .query(q)
                .then(res => {
                this.countOfRecs = res.rows[0].count; // ['brianc']
            })
                .catch(e => {
                console.error(e.stack);
            });
            yield this.client.end();
            return this.countOfRecs;
        });
    }
    fetchMaxOrMinOf(q) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client
                .query(q)
                .then(res => {
                this.maxOrMinOf = res.rows[0].asdn_code;
            })
                .catch(e => {
                console.error(e.stack);
            });
            yield this.client.end();
            return this.maxOrMinOf;
        });
    }
    fetchViolationsFromDB(q) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client
                .query(yield new Queries_1.Queries().getViolationQuery(q))
                .then(res => {
                // console.log(res.rows);
                this.output = res.rows;
            })
                .catch(e => {
                console.error(e.stack);
            });
            yield this.client.end();
            return this.output;
        });
    }
    // public async fetchAssetDetailsFromDB(q: string): Promise<JSON[]> {
    //     await this.client
    //         .query(await this.queries.getViolationQuery(q))
    //         .then(res => {
    //             this.output = res.rows;
    //         })
    //         .catch(e => {
    //             console.error(e.stack)
    //         })
    //     await this.client.end();
    //     return this.output;
    // }
    fetchAsdnId(q) {
        return __awaiter(this, void 0, void 0, function* () {
            let asdnId;
            yield this.client
                .query(yield new Queries_1.Queries().asdnIdQuery(q))
                .then(res => {
                asdnId = res.rows[0].asdn_id;
                console.log(`fetched asdn_id ${asdnId} from db for asset code ${q}`);
            })
                .catch(e => {
                console.error(e.stack);
            });
            yield this.client.end();
            return asdnId;
        });
    }
    endConn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.end();
        });
    }
}
exports.DbConfig = DbConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGJDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9VdGlsaXR5L0RiQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJCQUFnRDtBQUVoRCx1Q0FBb0M7QUFFcEMsTUFBYSxRQUFRO0lBYWpCO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVZLFdBQVc7O1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFNLENBQUM7Z0JBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTthQUNsQixDQUFDLENBQUE7WUFDRixNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDNUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7S0FBQTtJQUVZLGdCQUFnQixDQUFDLENBQVM7O1lBQ25DLE1BQU0sSUFBSSxDQUFDLE1BQU07aUJBQ1osS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDUixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQSxDQUFDLGFBQWE7WUFDdEQsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxD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