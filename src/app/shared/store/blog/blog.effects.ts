import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "../../master.service";
import { addBlog, addBlogSuccess, deleteBlog, deleteBlogSuccess, LOAD_BLOG, loadBlogFail, loadBlogSuccess, updateBlog, updateBlogSuccess } from "./blog.actions";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import { emptyNotifications, showNotifications } from "../../global/app.action";

@Injectable()

export class blogEffects {

    constructor(private action$:Actions, private service:MasterService, private snckBar:MatSnackBar) { }

    _blog = createEffect(()=> 
        this.action$.pipe(
            ofType(LOAD_BLOG),
            exhaustMap((action)=> {
                return this.service.getAll().pipe(
                    map((data) => {
                        return loadBlogSuccess({bloglist:data});
                    }),
                    catchError((error)=>of(loadBlogFail({errorMessages:error})))
                )
            })
        )
    )

    _post = createEffect(()=>
        this.action$.pipe(
            ofType(addBlog),
            switchMap((action)=> {
                return this.service.postAll(action.blogInput).pipe(
                    switchMap((data) => of(
                        addBlogSuccess({blogInput:action.blogInput}),
                        showNotifications({message:'Added Successfully.'})
                    )),
                    catchError((error)=>of(loadBlogFail({errorMessages:error})))
                )
            })
        )
    )

    _update = createEffect(()=>
        this.action$.pipe(
            ofType(updateBlog),
            switchMap((action) => {
                return this.service.updateAll(action.blogInput).pipe(
                    switchMap((data) => of(
                        updateBlogSuccess({blogInput:action.blogInput}),
                        showNotifications({message:'Updated Successfully.'})
                    )),
                    catchError((error)=>of(loadBlogFail({errorMessages:error})))
                )
            })
        )
    )

    _delete = createEffect(()=>
        this.action$.pipe(
            ofType(deleteBlog),
            switchMap((action) => {
                return this.service.deleteAll(action.id).pipe(
                    switchMap((data)=> of(
                        deleteBlogSuccess({id:action.id}),
                        showNotifications({message:'Deleted Successfully.'})
                    )),
                    catchError((error)=>of(loadBlogFail({errorMessages:error})))
                )
            })
        )
    )

    _showNotifications = createEffect(()=>
        this.action$.pipe(
            ofType(showNotifications),
            exhaustMap((action) => {
                return this.snackBarNotifications(action.message).afterDismissed()
                    .pipe(
                        map(() => {
                            return emptyNotifications();
                        })
                    )
            })
        )
    )

    snackBarNotifications(message:string) {
        return this.snckBar.open(message,'ok',{
            verticalPosition:'top',
            horizontalPosition:'left'
        })
    }

}













// _post  = createEffect(()=>
//     this.action$.pipe(
//         ofType(addBlog),
//         exhaustMap((action)=> {
//             return this.service.postAll(action.blogInput).pipe(
//                 map((data) => {
//                     return addBlogSuccess({blogInput:action.blogInput});
//                 }),
//                 catchError((error)=>of(loadBlogFail({errorMessages:error})))
//             )
//         })
//     )
// )

// _update = createEffect(()=>
//     this.action$.pipe(
//         ofType(updateBlog),
//         exhaustMap((action) => {
//             return this.service.updateAll(action.blogInput).pipe(
//                 map((data) => {
//                     return updateBlogSuccess({blogInput:action.blogInput});
//                 }),
//                 catchError((error)=>of(loadBlogFail({errorMessages:error})))
//             )
//         })
//     )
// )

// _delete = createEffect(()=>
//     this.action$.pipe(
//         ofType(deleteBlog),
//         exhaustMap((action) => {
//             return this.service.deleteAll(action.id).pipe(
//                 map((data)=> {
//                     return deleteBlogSuccess({id:action.id});
//                 }),
//                 catchError((error)=>of(loadBlogFail({errorMessages:error})))
//             )
//         })
//     )
// )