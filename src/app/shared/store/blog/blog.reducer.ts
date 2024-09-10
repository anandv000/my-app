import { createReducer, on } from "@ngrx/store";
import { blogState } from "./blog.state";
import { addBlog, addBlogSuccess, blogData, deleteBlog, deleteBlogSuccess, loadBlogFail, loadBlogSuccess, updateBlog, updateBlogSuccess } from "./blog.actions";

const _blogReducer = createReducer(blogState,
    // on(blogData,(state)=> {
    //     return {
    //         ...state
    //     }
    // }),
    // on(addBlog,(state,action)=> {
    //     const blogaction = {...action.blogInput}
    //     blogaction.id  = state.blogList.length+1
    //     return {
    //         ...state,
    //         blogList:[...state.blogList,blogaction]
    //     }
    // }),
    on(addBlogSuccess,(state,action)=> {
        const blogaction = {...action.blogInput};
        blogaction.id  = state.blogList.length+1;
        return {
            ...state,
            blogList:[...state.blogList,blogaction]
        }
    }),
    // on(updateBlog,(state,action)=> {
    //     const blogaction = {...action.blogInput}
    //     const updateblog = state.blogList.map((res:any) => {
    //         return blogaction.id == res.id ? blogaction:res;
    //     })
    //     return {
    //         ...state,
    //         blogList:updateblog
    //     }
    // }),
    on(updateBlogSuccess,(state,action)=> {
        const blogaction = {...action.blogInput}
        const updateblog = state.blogList.map((res:any) => {
            return blogaction.id == res.id ? blogaction:res;
        })
        return {
            ...state,
            blogList:updateblog
        }
    }),
    // on(deleteBlog,(state,action)=>{
    //     const deleteaction = state.blogList.filter((data:any)=>{
    //         return data.id !== action.id
    //     });
    //     return {
    //         ...state,
    //         blogList:deleteaction
    //     }
    // }),
    on(deleteBlogSuccess,(state,action)=>{
        const deleteaction = state.blogList.filter((data:any)=>{
            return data.id !== action.id
        });
        return {
            ...state,
            blogList:deleteaction
        }
    }),
    on(loadBlogSuccess, (state, action) => {
        if (action?.bloglist) {
            return {
                ...state,
                blogList: [...action.bloglist]  
            };
        }
        return state;
    }),
    on(loadBlogFail,(state,action)=> {
        return {
            ...state,
            errorMessage:action.errorMessages?.message
        }
    })
);

export function blogReducer(state:any,action:any) {
    return _blogReducer(state,action)
}