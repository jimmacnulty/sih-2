import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent {
  displayedColumns = ['noteid', 'issueid', 'description', 'stage', 'verification'];
  dataSource = ELEMENT_DATA;


  constructor(private af: AngularFireModule, private db: AngularFireDatabase) {
    
  }
}

export interface Element {
  noteid: any;
  issueid: any;
  description: string;
  stage: number;
  verification: string;
}

const ELEMENT_DATA: Element[] = [
  { noteid: 1, issueid: 2, description: 'This is first', stage: 3, verification: 'true' },
  { noteid: 2, issueid: 3, description: 'This is second', stage: 1, verification: 'true' },
  { noteid: 3, issueid: 1, description: 'This is third', stage: 4, verification: 'true' },
  { noteid: 4, issueid: 4, description: 'This is fourth', stage: 2, verification: 'true' },
  { noteid: 5, issueid: 6, description: 'This is fifth', stage: 3, verification: 'true' }
];
