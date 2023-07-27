import instance from "./request";
export const run =async (content:string,name:string) => {
    return new Promise((resolve,reject)=>{
        instance.post('action',{action:'run',name,content,show:false}).then(
            res=>resolve(res),
            error=>reject(error))
    })
}