import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit,AfterViewInit {

  languages: any[];
  angcounter: number;
  reccounter: number;
  reactvalue: '';
  ngvalue: '';
  ngselectedval: '';
  trackname:'';
  toggleval: boolean;
  constructor(private elementRef: ElementRef) {
    }

  ngOnInit() {
    this.languages = ['Java', 'DotNet', 'Python'];
    this.angcounter = 0;
    this.reccounter = 0;
    this.toggleval = false;

  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('#reset_filter')
                                  .addEventListener('click', this.reset.bind(this), false);
  }


  reactincrementer = () => {
    this.reccounter++;
  }

  reset = () => {
    console.log("reset ...")
    const rele = this.elementRef.nativeElement.querySelector('react-app');
    rele.setAttribute('artistName', undefined);

    const rele1 = this.elementRef.nativeElement.querySelector('angular-app');
    rele1.setAttribute('trackname', undefined);
  }
  filterReact(filterVal: any) {
    this.reactvalue = filterVal;
    const rele = this.elementRef.nativeElement.querySelector('react-app');
    rele.setAttribute('selectedvalue', this.reactvalue);
  }
  filterAngular(filterVal: any) {
    this.reactvalue = filterVal;
    const rele = this.elementRef.nativeElement.querySelector('angular-app');
    console.log(rele)
    rele.setAttribute('selectedvalue', this.reactvalue);
  }
  filterArtist(filterVal: any) {
    this.reactvalue = filterVal;
    const rele = this.elementRef.nativeElement.querySelector('react-app');
    rele.setAttribute('artistName', this.reactvalue);
  }

  filterTrack(filterVal: any) {
    this.reactvalue = filterVal;
    const rele = this.elementRef.nativeElement.querySelector('angular-app');
    rele.setAttribute('trackname', this.reactvalue);
  }
  
  
}
