export class NosterRelation {
    constructor() { }

    
    private _userName : string;
    private _relatedUserName : string;
    private _relationStatus : string;
    private _relationType : string;

    public get userName() : string {
        return this._userName;
    }
    public set userName(v : string) {
        this._userName = v;
    }

    public get relatedUserName() : string {
        return this._relatedUserName;
    }
    public set relatedUserName(v : string) {
        this._relatedUserName = v;
    }

    public get relationStatus() : string {
        return this._relationStatus;
    }
    public set relationStatus(v : string) {
        this._relationStatus = v;
    }

    public get relationType() : string {
        return this._relationType;
    }
    public set relationType(v : string) {
        this._relationType = v;
    }
    
    
    
    
}