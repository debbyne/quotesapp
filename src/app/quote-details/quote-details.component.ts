import { QuoteClass } from './../quote-class';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {


  @Input() quote!:QuoteClass;

  @Output() deleteThis = new EventEmitter<boolean>();
  deleteMe(deleteNow:boolean){
    this.deleteThis.emit(deleteNow);
  }
  AddUpvote(){
    this.quote.upvotes++;
  }
  AddDownvote(){
    this.quote.downvotes++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
