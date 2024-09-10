import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appStateModel } from 'src/app/shared/global/appState,model';
import { CounterandUserModel } from 'src/app/shared/store/counter.model';
import { getCounter } from 'src/app/shared/store/counter.selector';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.scss']
})
export class CounterdisplayComponent implements OnInit{

  displayConter:any;
  userName!:string;
  // Without subscribe using 
  counter$!:Observable<CounterandUserModel>;

  constructor(private store: Store<{counter:CounterandUserModel}>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe((res:any) =>{
      console.log(res)
      this.displayConter = res;
      console.log("CounterDisplay Work!")
    })

    // Without subscribe using 
    // this.counter$ = this.store.select('counter');
  }

}
