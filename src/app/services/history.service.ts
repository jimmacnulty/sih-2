import { AngularFireDatabase } from 'angularfire2/database';

export class HistoryService {

    public who: any;
    public what: any;
    public when: any;
    public tid: any;
    public status: any;

    constructor(private db: AngularFireDatabase) { }
    
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

        this.db.app.database().ref('issues/' + this.tid + '/history/').push(this);
    }

    
}