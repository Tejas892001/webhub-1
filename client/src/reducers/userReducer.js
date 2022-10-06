export const initialState = null;

export const reducer = (state, action)=>{
    if(action.type == "USER"){
        return action.payload
    }
    if(action.type == "CLEAR"){
        return null
    }

    if(action.type=="UPDATE"){
        return{
            ...state
        }
    }

    if(action.type=="UPDATEPIC"){
        return{
            ...state,
            pic: action.payload.pic
        }
    }

    // if(action.type=="UPDATEBIO"){
    //     return{
    //         ...state,
    //         bio: action.payload.bio
    //     }
    // }

    return state
}