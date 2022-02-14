export class ViolationDetails_db{

    violation_id:string;
    severity:string;
    alert_type:string;
    alert_raised_on:string;
    last_updated_on:string;
    alert_text:string;

    constructor(violation_id:string, severity:string, alert_type:string, alert_raised_on:string, last_updated_on:string, alert_text:string){
        this.violation_id = violation_id;
        this.severity = severity;
        this.alert_type = alert_type;
        this.alert_raised_on = alert_raised_on;
        this.last_updated_on = last_updated_on;
        this.alert_text = alert_text;
    }

    public async get_violationId(){
        return this.violation_id;
    }

    public async get_severity(){
        return this.severity;
    }

    public async get_alertType(){
        return this.alert_type;
    }

    public async get_alertRaisedOn(){
        return this.alert_raised_on;
    }

    public async get_lastUpdatedOn(){
        return this.last_updated_on;
    }

    public async get_alertText(){
        return this.alert_text;
    }


}