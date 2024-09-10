// import { routerReducer } from "@ngrx/router-store";
import { routerReducer } from "@ngrx/router-store";
import { blogReducer } from "../store/blog/blog.reducer";
import { counterReducer } from "../store/counter.reducer";

export const appState = {
    couter:counterReducer,
    blog:blogReducer,
    router:routerReducer
}