export class Queries{

    public async getViolationQuery(assetCode:string){
        let violationQuery:string = `select aa.assl_id as violation_id,as2.asv_name as severity,aat.asat_type as alert_type,to_char(aa.assl_last_updated, 'YYYY-MM-DD HH12:MI:SS') as alert_Raised_On,to_char(aa.assl_last_updated, 'YYYY-MM-DD HH12:MI:SS') as last_updated_on, aa.assl_description as alert_text from asset_alerts aa
        left join asset_dfn ad
        on ad.asdn_id =aa.asdn_id
        left join alert_severity as2
        on ad.asv_id =as2.asv_id
        left join asset_alert_types aat
        on aat.asat_id = aa.asat_id
        where aa.delete_fl =false and ad.asdn_code= '${assetCode}'`;
        // console.log(violationQuery);
        return violationQuery;
    }

    public async asdnIdQuery(assetCode:string){
        let asdnIdQuery:string = `select asdn_id from asset_dfn ad where ad.asdn_code = '${assetCode}'`;
        console.log(asdnIdQuery);
        return asdnIdQuery;
    }


}