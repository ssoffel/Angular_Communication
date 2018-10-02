import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input,
   OnChanges, 
   SimpleChanges,
   EventEmitter,
   Output} from '@angular/core';

@Component({
  selector: 'pm-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() displayDetail: boolean;
  @Input() hitCount: number;
  
  hitMessage: string = "loading...";
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  

  @ViewChild('filterElement') filterElementRef: ElementRef;

  private _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    this.valueChange.emit(value);
  }
  constructor() { }

 

  ngAfterViewInit(): void {
    this.filterElementRef.nativeElement.focus();

    // this.filterInput.valueChanges.subscribe(
    //     () => this.performFilter(this.listFilter)
    // )
  }

   ngOnChanges(changes: SimpleChanges): void{
    if (changes.hitCount.currentValue === 0){
      this.hitMessage = 'There are no matches'
    } else {
      if (!this.hitCount) {
         this.hitMessage = 'Loading...';
      } else {
        this.hitMessage = '' + this.hitCount;
      }
   }
  }

  ngOnInit() {
  }

}
