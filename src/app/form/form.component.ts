import { QuoteClass } from './../quote-class';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuote = new QuoteClass(0,"","","",0,0,new Date());
  @Output() addQuote = new EventEmitter<QuoteClass>();
  submitQuote() {
    this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
