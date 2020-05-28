

export class NosterMessage {
    constructor() {    }

    
    private _messageSource : string;
    private _originTime : Date;
    private _messageBody : string;
    private _isSeen : boolean;
    private _nosterTargetUserName : string;


    public get messageSource() : string {
        return this._messageSource;
    }
    public set messageSource(v : string) {
        this._messageSource = v;
    }
    
    public get originTime() : Date {
        return this._originTime;
    }
    public set originTime(v : Date) {
        this._originTime = v;
    }

    public get messageBody() : string {
        return this._messageBody;
    }
    public set messageBody(v : string) {
        this._messageBody = v;
    }

    public get isSeen() : boolean {
        return this._isSeen;
    }
    public set isSeen(v : boolean) {
        this._isSeen = v;
    }
    
    public get nosterTargetUserName() : string {
        return this._nosterTargetUserName;
    }
    public set nosterTargetUserName(v : string) {
        this._nosterTargetUserName = v;
    }
    
    
}