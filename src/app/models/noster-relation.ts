export class NosterRelation {
    constructor() { }

    private _userName : string;
    private _displayName : string;
    private _relatedUserName : string;
    private _relatedDisplayName : string;
    private _creationDate : string;
    private _relationStatus : string;
    private _relationType : string;    

    public get userName() : string {
        return this._userName;
    }
    public set userName(v : string) {
        this._userName = v;
    }

    public get displayName() : string {
        return this._displayName;
    }
    public set displayName(v : string) {
        this._displayName = v;
    }    

    public get relatedUserName() : string {
        return this._relatedUserName;
    }
    public set relatedUserName(v : string) {
        this._relatedUserName = v;
    }

    public get relatedDisplayName() : string {
        return this._relatedDisplayName;
    }
    public set relatedDisplayName(v : string) {
        this._relatedDisplayName = v;
    }

    public get creationDate() : string {
        return this._creationDate;
    }
    public set creationDate(v : string) {
        this._creationDate = v;
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