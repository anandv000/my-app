import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
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
  action = 'add';

  onCusInc() {
    this.store.dispatch(caustomeIncrement({value: Number(this.counter), action: this.action}));
  }

  onchangeUserName() {
    this.store.dispatch(changeUserName({userName:this.ChangeUserName}));
    this.ChangeUserName = '';
  }

}
