import { Component, OnInit } from '@angular/core';
import { QuoteClass } from '../quote-class';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  myQuotes:QuoteClass[] = [
    new QuoteClass(0,"The time is always right to do what is right.","Martin L.K.J","Sterling",0,0,new Date(2020,2,1)),
    new QuoteClass(1,"You may never be good enough for everybody, but you will always be the best for somebody.","Rihanna","Awiti",0,0,new Date(2015,4,3)),
    new QuoteClass(2,"quote2","author2","concoctor2",0,0,new Date(2018,4,9))

  ];


  deleteMe(deleteThis:any, index:any){
    if (deleteThis) {
      let deleteConfirmation = confirm(`Delete This Quote?`)
      if(deleteConfirmation){
        this.myQuotes.splice(index,1);
      }
    }
  }

  addNewQuote(newQuote:any){
    let quoteLength = this.myQuotes.length;
    newQuote.id = quoteLength+1;
    newQuote.addDate = new Date(newQuote.adddate);
    this.myQuotes.push(newQuote);
  }




  constructor() { }

  ngOnInit(): void {
  }

}
