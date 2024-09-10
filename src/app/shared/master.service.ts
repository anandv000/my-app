import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { blogModel } from './store/blog/blog.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  getAll():Observable<blogModel[]> {
    return this.http.get<blogModel[]>('http://localhost:3000/blogs');
  }

  postAll(blogData:any):Observable<blogModel[]> {
    return this.http.post<blogModel[]>('http://localhost:3000/blogs',blogData);
  }

  updateAll(blogData:any):Observable<blogModel[]> {
    return this.http.put<blogModel[]>('http://localhost:3000/blogs/'+blogData.id,blogData);
  }

  deleteAll(blogId:number):Observable<blogModel[]> {
    return this.http.delete<blogModel[]>('http://localhost:3000/blogs/'+blogId);
  }

}
