import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from './app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-app';

  rForm:any;
  userSubscription!:Subscription
  userData:any;
  currentId:any;
  editMode:boolean = false;

  constructor(private apiService:AppService) { }

  ngOnInit(): void {
    this.rForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
      age: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(3)]),
      email: new FormControl('', [Validators.required, Validators.minLength(1), Validators.email]),
      skills: new FormArray([
        new FormGroup({
          field1: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
          field2: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
        })
      ])
    })

    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
    this.userSubscription = this.apiService.getAllData().subscribe((response)=>{
      this.userData = response;
    })
  }

  onSubmit() {
    if (!this.editMode) {
      if (this.userSubscription) {
        this.userSubscription.unsubscribe();
      }
      this.apiService.saveData(this.rForm.value).subscribe((response) => {
        console.log(response);
      })
    } else {
      if (this.userSubscription) {
        this.userSubscription.unsubscribe();
      }
      this.apiService.updateData(this.rForm.value, this.currentId).subscribe((response) => {
        console.log(response);
      })
      this.editMode = false;
    }
    this.rForm.reset();
    this.ngOnInit();
  }

  onEdit(id:any) {
    this.currentId = id;
    const currentUser = this.userData.find((ele:any)=> ele.id == id);
    this.rForm.setValue({
      name:currentUser.name,
      age:currentUser.age,
      email:currentUser.email,
      skills: [
        {
          field1:currentUser.skills[0].field1,
          field2:currentUser.skills[0].field2
        }
      ]
    })
    this.editMode = true;
  }

  onRemove(id: any) {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
    this.userSubscription = this.apiService.removeData(id).subscribe((response) => {
      console.log(response);
    })
  }

  get data() {
    return this.rForm.controls
  }

  onAddSkill() {
    const control = new FormGroup({
      field1: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      field2: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
    });
    this.rForm.controls.skills.push(control);
  }

  onRenoveSkill(index:number) {
    this.rForm.controls.skills.removeAt(index);
  }

}
