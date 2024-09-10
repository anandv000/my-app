import { createAction, props } from "@ngrx/store";
import { blogModel } from "./blog.model";

export const LOAD_BLOG = 'loadBlog';
export const LOAD_BLOG_SUCCESS = 'loadBlogSuccess';
export const LOAD_BLOG_FAIL = 'loadBlogFail';
export const ADD_BLOG = 'addBlog';
export const ADD_BLOG_SUCCESS = 'addBlogSuccess';
export const UPDATE_BLOG = 'updateBlog';
export const UPDATE_BLOG_SUCCESS = 'updateBlogSuccess';
export const DELETE_BLOG = 'deleteBlog';
export const DELETE_BLOG_SUCCESS = 'deleteBlogSuccess';


export const blogData = createAction(LOAD_BLOG);

export const loadBlogSuccess = createAction(LOAD_BLOG_SUCCESS,props<{bloglist:blogModel[]}>());

export const addBlog = createAction(ADD_BLOG,props<{blogInput:blogModel}>());

export const addBlogSuccess = createAction(ADD_BLOG_SUCCESS,props<{blogInput:blogModel}>());

export const updateBlog = createAction(UPDATE_BLOG,props<{blogInput:blogModel}>());

export const updateBlogSuccess = createAction(UPDATE_BLOG_SUCCESS,props<{blogInput:blogModel}>());

export const deleteBlog = createAction(DELETE_BLOG,props<{id:number}>());

export const deleteBlogSuccess = createAction(DELETE_BLOG_SUCCESS,props<{id:number}>());

export const loadBlogFail = createAction(LOAD_BLOG_FAIL,props<{errorMessages:any}>());