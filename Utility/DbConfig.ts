import { Client, Query, QueryResult } from "pg";
import * as props from "properties-reader";
import { Queries } from "./Queries";

export class DbConfig {

    user: string;
    host: string;
    database: string;
    password: string;
    port: number;
    client: Client;
    countOfRecs: number;
    maxOrMinOf: string;
    output: JSON[];


    constructor() {
        this.user = 'postgres';
        this.host = '10.113.113.81';
        this.database = 'testdb';
        this.password = 'postgres';
        this.port = 5431;
    }

    public async connectToDb(): Promise<any> {
        this.client = new Client({
            user: this.user,
            host: this.host,
            database: this.database,
            password: this.password,
            port: this.port
        })
        await this.client.connect();
        return this.client;
    }

    public async fetchCountOfRecs(q: string): Promise<number> {
        await this.client
            .query(q)
            .then(res => {
                this.countOfRecs = res.rows[0].count // ['brianc']
            })
            .catch(e => {
                console.error(e.stack)
            })
        await this.client.end();
        return this.countOfRecs;
    }

    public async fetchMaxOrMinOf(q: string): Promise<string> {
        await this.client
            .query(q)
            .then(res => {
                this.maxOrMinOf = res.rows[0].asdn_code
            })
            .catch(e => {
                console.error(e.stack)
            })
        await this.client.end();
        return this.maxOrMinOf;
    }

    public async fetchViolationsFromDB(q: string): Promise<JSON[]> {

        await this.client
            .query(await new Queries().getViolationQuery(q))
            .then(res => {
                // console.log(res.rows);
                this.output = res.rows;
            })
            .catch(e => {
                console.error(e.stack)
            })
        await this.client.end();

        return this.output;
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

    public async fetchAsdnId(q:string): Promise<number>{
        let asdnId:number;
        await this.client
            .query(await new Queries().asdnIdQuery(q))
            .then(res => {
               asdnId = res.rows[0].asdn_id;
               console.log(`fetched asdn_id ${asdnId} from db for asset code ${q}`);
            })
            .catch(e => {
                console.error(e.stack)
            })
        await this.client.end();
        return asdnId;
    }

    public async endConn() {
        await this.client.end();
    }

}