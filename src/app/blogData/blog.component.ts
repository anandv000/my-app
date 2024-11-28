import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { blogModel } from '../shared/store/blog/blog.model';
import { getBlogId, getBlogInfo } from '../shared/store/blog/blog.selector';
import { appStateModel } from '../shared/global/appState,model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { addBlog, blogData, deleteBlog, updateBlog } from '../shared/store/blog/blog.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blogList: any;
  blogError: any;
  isOpen: boolean = false;
  blogForm!: FormGroup;
  isedit:boolean = false;
  editFormData:any;

  constructor( private store: Store<appStateModel>, private builder: FormBuilder, private router:Router ) { }

  ngOnInit(): void {
    this.store.dispatch(blogData())
    this.store.select(getBlogInfo).subscribe((res: any) => {
      this.blogList = res.blogList;
      this.blogError = res.errorMessage;
      console.log(res);
    });

    this.blogForm = this.builder.group({
      id: this.builder.control(0),
      title: this.builder.control('', Validators.required),
      description: this.builder.control('', Validators.required),
    });
  }

  onAddBlog() {
    if (this.blogForm.valid) {
      const _blogInput: blogModel = {
        id: this.blogForm.value.id,
        title: this.blogForm.value.title,
        description: this.blogForm.value.description,
      };
      if(this.isedit) {
        this.store.dispatch(updateBlog({ blogInput: _blogInput }));
      } else {
        this.store.dispatch(addBlog({ blogInput: _blogInput }));
      }
      this.blogForm.reset();
      this.onClose();
    }
  }

  onClose() {
    this.isOpen = !this.isOpen;
  }

  onEdit(id:any) {
    this.store.select(getBlogId(id)).subscribe((blogList:any) => {
       console.log(blogList)
       this.isedit = true;
       this.editFormData = blogList;
       this.blogForm.setValue({
          id:this.editFormData?.id,
          title:this.editFormData?.title,
          description:this.editFormData?.description
       })
    });
    // this.store.select(getBlog).subscribe((blogList:any) => {
    //   const blogToEdit = blogList.find((blog:any) => blog.id === id);
    //   if (blogToEdit) {
    //     this.blogForm.patchValue({
    //       title: blogToEdit.title,
    //       description: blogToEdit.description,
    //     });
    //   }
    // });
    this.isOpen = !this.isOpen;
  }

  onDetails(data:any) {
    this.router.navigate(['/blog/details/'+data.id,data]);
  }

  onDelete(id:any) {
    if(confirm('Are you sure want to remove?')) {
      this.store.dispatch(deleteBlog({id:id}));
    }
  }
  
}
