import { Quote } from '../../../interfaces/quote-interface';
import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/services/quotes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  edit: boolean = false;
  progressValue: number = 0;
  quote: Quote = { id: 0, name:'', movieName:'', text: '' }

  constructor(private quoteService: QuotesService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(data => {
      this.edit = !!data['id'];
      if (this.edit) {
        this.quoteService.getQuoteById(data['id']).subscribe(quoteData => {
          this.quote = quoteData;
        })
      }
    })
  }

  save() {
    if (this.edit) {
      this.quoteService.updateQuote(this.quote, this.quote.id).subscribe(data => {
        alert('Quote updated!')
      })
    } else {
      this.quoteService.insertQuote(this.quote).subscribe(data => {
        if (data.id) {
          this.router.navigateByUrl('/quotes')
        }
      });
    };
  }

  calculateProgress() {
    this.progressValue = 0;
    if (this.quote.name) {
      this.progressValue += 33
    }
    if (this.quote.movieName) {
      this.progressValue += 33
    }
    if (this.quote.text) {
      this.progressValue += 34
    }
  }
}
