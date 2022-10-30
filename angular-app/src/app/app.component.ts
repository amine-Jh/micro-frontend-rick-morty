import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  @Input() trackname:string;
  @Input() selectedvalue: string;
  newArray: any[];
  charArray: any[];
  filtervalue: string;
  lang: any[];
  ngOnInit() {
    this.lang = ['Java', 'DotNet', 'Python'];
    this.newArray = this.selectedvalue && this.selectedvalue !== '0' ? this.lang.filter(item => item === this.selectedvalue ) : this.lang;
    this.charArray=[];

  }

  ngOnChanges(changes: SimpleChanges) {

    let url=`https://rickandmortyapi.com/api/location/?name=${changes.trackname.currentValue}`;

fetch(url)
.then((response) => response.json())
  .then((data) =>{ 
    this.charArray=data.results;
    console.log("fron angular dta",data)
  })
.catch((err) => console.error(`Fetch problem: ${err.message}`));


    console.log("changes  from react to angular ..",changes.trackname)
    if (changes.selectedvalue.currentValue !== changes.selectedvalue.previousValue) {
      const curr = changes.selectedvalue.currentValue;
      this.newArray = curr && curr !== '0' ? this.lang.filter(item => item === curr ) : this.lang;
    }
  }
}
