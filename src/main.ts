import {responseFactory} from "./utils/response.factory";

// @ts-ignore
export const start = async (event:any) =>{


    return responseFactory(200,{result:null,message:'healthy'})
}