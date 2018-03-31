import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import *  as maps from '@google/maps';
const maps = require('@google/maps').createClient({
    apiKey: 'AIzaSyC9YhXuCIwp98IRGMMbJypBPVhJaTonx3k'
});

@Injectable()
export class HistoryService {

    public who: any;
    public what: any;
    public when: any;
    public tid: any;
    public note:any;
    public status: any;

    constructor( 
        private db: AngularFireDatabase) { }
    
    create(tid:any, who: any, what: any, status:any, when: any = Date.now()):HistoryService {
        this.who = who;
        this.what = what;
        this.when = when;
        this.tid = tid;
        this.status = status;

        console.log(this);
        return this;
    }

    save() {
        let data = {
            'who' : this.who,
            'what' : this.what,
            'when' : this.when,
            'status' : this.status,
        }
        this.db.list('issues/0/' + this.tid + '/history/').push(data);
    }

    alert(tid, uid, timestamp, location) {
        maps.getAddress(location.lat, location.lng).subscribe(res => {
        let results = res.json().results;
            results.forEach(x => {
                if(x['types'] == "administrative_area_level_2,political"){
                let city = x.address_components[0].long_name;
                console.log(city);
                }
            })
        });
            
        // this.db.list('alerts/')
    }

    
}