import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appStateModel } from 'src/app/shared/global/appState,model';
import { getCounter } from 'src/app/shared/store/counter.selector';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.scss']
})
export class CounterdisplayComponent implements OnInit{

  displayCounter:any;

  constructor(private store: Store<appStateModel>) { }

  ngOnInit(): void {
    this.store.select(getCounter).subscribe((res:any) =>{
      console.log(res)
      this.displayCounter = res;
      console.log("CounterDisplay Work!")
    })
  }

}
