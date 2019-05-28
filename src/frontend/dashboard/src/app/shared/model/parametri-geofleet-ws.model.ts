export class ParametriGeoFleetWS {

    public richiestaAPI: string;
    public attSec:  Number;
    public lat1:    Number;
    public lon1:    Number;
    public lat2:    Number;
    public lon2:    Number;
    public classiMezzo: String[];
    constructor() {}
/*
    constructor(
        public richiestaAPI: string,
        public attSec:  Number,
        public lat1:    Number,
        public lon1:    Number,
        public lat2:    Number,
        public lon2:    Number,
        public classiMezzo: String[]
    ) {}
*/

    private defaultAttSecStandard: Number = 259200; // 3 giorni (3 * 24 * 60 * 60)
    private defaultAttSec: Number = 259200; // 3 giorni (3 * 24 * 60 * 60)
    //private defaultAttSec: Number = 604800; // 1 settimana (7 * 24 * 60 * 60)
    private defaultrichiestaAPI: string = 'posizioneFlotta';

    public reset() {
        this.richiestaAPI = this.defaultrichiestaAPI;
        this.attSec = this.defaultAttSec;
        this.lat1 = null;
        this.lon1 = null;
        this.lat2 = null;
        this.lon2 = null;
        this.classiMezzo = null;
    }

    public setRichiestaAPI(richiestaAPI : string) {
        if ( richiestaAPI != null) {this.richiestaAPI = richiestaAPI;} 
        else {this.richiestaAPI = this.defaultrichiestaAPI; }
    }

    public setAttSec(attSec : Number) {
        if ( attSec != null) {this.attSec = attSec;} 
        else {this.attSec = this.defaultAttSec; }
    }

    public setDefaultAttSec(attSec : Number) {
        if ( attSec != null) {this.defaultAttSec = attSec;} 
        else {this.defaultAttSec = this.defaultAttSecStandard; }
    }
        
    public setLat1(lat1 : Number) { this.lat1 = lat1; }

    public setLon1(lon1 : Number) { this.lon1 = lon1; }

    public setLat2(lat2 : Number) { this.lat2 = lat2; }

    public setLon2(lon2 : Number) { this.lon2 = lon2; }

    public setClassiMezzo(classiMezzo : String[]) { this.classiMezzo = classiMezzo; }

}