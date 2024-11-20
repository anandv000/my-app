import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { appStateModel } from 'src/app/shared/global/appState,model';
import { caustomeIncrement, changeUserName } from 'src/app/shared/store/counter.actions';
import { CounterandUserModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-caustomeincrement',
  templateUrl: './caustomeincrement.component.html',
  styleUrls: ['./caustomeincrement.component.scss']
})
export class CaustomeincrementComponent {

  constructor(private store:Store<{counter:CounterandUserModel}>) { }

  counter:any;
  ChangeUserName:any;
  action = 'Add';

  // @ViewChild('counter') counter:any;

  onCusInc() {
    // console.log(this.counter)
    this.store.dispatch(caustomeIncrement({value: Number(this.counter), action: this.action}))
    // this.store.dispatch(caustomeincrement({value: Number(this.counter.nativeElement.value)}))
  }

  onchangeUserName() {
    this.store.dispatch(changeUserName({userName:this.ChangeUserName}));
  }

}
