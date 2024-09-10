export interface blogModel {
    id:number,
    title:string,
    description:string
}

export interface newblog {
    blogList:blogModel[],
    errorMessage:string
}