import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class HistoryService {

    public who: any;
    public what: any;
    public when: any;
    public tid: any;
    public note:any;
    public status: any;

    constructor( private db: AngularFireDatabase) { }
    
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

    
}