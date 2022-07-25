import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('mainHeading')
  mainHeading: ElementRef;



  angualarConcepts = ['components', 'hello']//

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.mainHeading.nativeElement.style.color = "red";
  }

  

}
