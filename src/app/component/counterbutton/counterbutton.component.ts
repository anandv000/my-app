import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { appStateModel } from 'src/app/shared/global/appState,model';
import { changeUserName, decrement, increment, reset } from 'src/app/shared/store/counter.actions';
import { CounterandUserModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.scss']
})
export class CounterbuttonComponent {

  constructor(private store:Store<{counter:CounterandUserModel}>) { }

  onInc() {
    this.store.dispatch(increment())
  }

  onDec() {
    this.store.dispatch(decrement())
  }

  onRes() {
    this.store.dispatch(reset())
  }

  onchangeUserName() {
    this.store.dispatch(changeUserName({userName:'Welcome John dow'}))
  }

}
