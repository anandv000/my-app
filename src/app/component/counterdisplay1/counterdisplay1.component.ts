import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appStateModel } from 'src/app/shared/global/appState,model';
import { CounterandUserModel } from 'src/app/shared/store/counter.model';
import { getUserName } from 'src/app/shared/store/counter.selector';

@Component({
  selector: 'app-counterdisplay1',
  templateUrl: './counterdisplay1.component.html',
  styleUrls: ['./counterdisplay1.component.scss']
})
export class Counterdisplay1Component implements OnInit{

  userName:any;

  constructor(private store:Store<appStateModel>) { }

  ngOnInit(): void {

    this.store.select(getUserName).subscribe((res:any) =>{
      this.userName = res;

      console.log("CounterDisplay1 Work!")
    })
    
  }

}
