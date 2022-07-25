import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Quote } from 'src/app/interfaces/quote-interface';
import { QuotesService } from 'src/app/services/quotes.service';
import { ConfirmDialogComponent } from '../helpers/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  
  displayedColumns: string[] = ['id','name','text','movieName', 'edit', 'delete'];
  quotes: Quote[] = []
  showSpinner: boolean = true;
  constructor(private quotesService: QuotesService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    
  }

  deleteQuote(id: number) {
    
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete quote',
        message: 'Are you sure?'
      }
    })
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.showSpinner = true;
        this.quotesService.deleteQuote(id).subscribe((data) => {
          if (data.success) {
            const snackBarRef = this.snackBar.open('Quote deleted', 'Undo')
            snackBarRef.afterDismissed().subscribe(() => {
              console.log('AFTER_DISMISSED')
            })
            snackBarRef.onAction().subscribe(() => {
              console.log('ON_ACTION')
            })
            this.fillData()
          }
        })
      }
    })
  }

  ngOnInit(): void {
    this.fillData()

    
  }

  fillData() {
    this.quotesService.getAllQuotes().subscribe(data => {
      this.quotes = data;
      this.showSpinner = false;
    })
  }
}
