import { createFeatureSelector, createSelector } from "@ngrx/store";
import { blogModel, newblog } from "./blog.model";

const getBlogSelector = createFeatureSelector<newblog>('blog');

export const getBlog = createSelector(getBlogSelector,(state)=> {
    return state.blogList;
})

export const getBlogId=(blogId:number) => createSelector(getBlogSelector,(state)=>{
    return state.blogList.find((blog:any)=>blog.id == blogId);
})

export const getBlogInfo = createSelector(getBlogSelector,(state)=> {
    return state;
})

