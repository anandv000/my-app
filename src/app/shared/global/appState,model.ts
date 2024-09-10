import { blogModel } from "../store/blog/blog.model";
import { CounterandUserModel } from "../store/counter.model";

export interface appStateModel {
    counter:CounterandUserModel,
    // userName:CounterandUserModel;
    blog:blogModel[]
}