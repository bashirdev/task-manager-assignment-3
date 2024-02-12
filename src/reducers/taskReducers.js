/* eslint-disable no-unreachable */
/* eslint-disable no-case-declarations */
export const taskReducers=(state, action)=>{
    switch (action.type) {
        case "CREATE_TASK":
            return [...state, action.payload];
            case "TASK_EDIT":
            
              return state.map((item)=> {
                if(item.id === action.payload.id){
                   
                   return  action.payload
                }else{
                   
                    return item
                }
            });
            case "DELETE_TASK":
              
                return state.filter(item=> item.id !== action.payload)
           break;
           case "DELETE_ALL":
            return state=[];
            case "FAVORITE":
            return state.map(item=> {
                if(item.id === action.payload.id){
                    return action.payload
                }else{
                  return item
                }
            });
            case "SEARCH_TASK":
                const searchTerm=action.payload.toLowerCase();
               const SearchItem=state.filter(item=> item.title.toLowerCase().includes(searchTerm))
               if(searchTerm == ''){
                return state
               }else{
                return SearchItem
               }
              
               
        default:
            return state;
    }
}