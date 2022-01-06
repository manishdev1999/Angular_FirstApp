export class userclass{
    public id : string
    public email : string
    private _token : string
    private _tokenexpiry : Date

    gettoken()
    {
        if(!(this._token) || new Date() > this._tokenexpiry){
            return null
        }
        return this._token
    }
}