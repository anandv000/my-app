import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { routerData } from 'src/app/shared/Router/router.selector';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit{

  userId: number = 0;
  userTitle: string = '';
  userDescription: string = '';

  constructor( private store:Store ) { }

  ngOnInit(): void {

    this.store.select(routerData).subscribe((data:any) => {
      this.userId = data.id;
      this.userTitle = data.title;
      this.userDescription = data.description;
    })
    
  }

}
