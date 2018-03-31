import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { LocationService } from './location.service';

@Injectable()
export class HistoryService {

    public who: any;
    public what: any;
    public when: any;
    public tid: any;
    public note:any;
    public status: any;

    constructor( 
        private db: AngularFireDatabase, private loc:LocationService) { }
    
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
        this.db.object('issues/0/' + this.tid).update({ verified: true, status: 1 });
        this.db.database.ref('users/' + this.who).once('value', data => {
            console.log(data.val());
            let d = {
                contact: data.val()['contact'],
                message: 'You query for ticket ID:' + this.tid +' has been verified and under process.'
            }
            console.log(d);
            this.db.list('SMSQueue').push(d);
        })
    }

    alert(tid, uid, timestamp, location) {
        this.loc.getAddress(location.lat, location.lng).subscribe(res => {
        let results = res.json().results;
            results.forEach(x => {
                if(x['types'] == "administrative_area_level_2,political"){
                let city = x.address_components[0].long_name;
                this.db.list('alerts/' + city).push({
                    tid : tid,
                    timestamp: timestamp
                })
            }
        })
    });
        
        // this.db.list('alerts/')
    }

    
}