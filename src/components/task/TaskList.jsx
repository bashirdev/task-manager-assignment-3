import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { TaskContext } from "../../context";

const TaskList = ({handletaskEdit}) => {
    const {state, dispatch} = useContext(TaskContext) 

  const handleDelete=(id)=>{
    dispatch({type:"DELETE_TASK", payload:id})
  };

const handleFavorite=(id)=>{
    const taskIndex=state.findIndex(task=> task.id === id)
    const existingTaskClone=[...state]
  existingTaskClone[taskIndex].isFavorite = !existingTaskClone[taskIndex].isFavorite;
dispatch({type:"FAVORITE", payload:existingTaskClone[taskIndex]})
};
  
 function RandomColor() {
      const rndColor=Math.floor(Math.random() * 3 )
      const colors=['bg-green-600', 'bg-orange-600', 'bg-blue-600']
return colors[rndColor]
}

RandomColor()

    return (
        <div className="overflow-auto">
        {state.length <= 0 ? (<h2 className="text-3xl text-red-700">Task List is Empty</h2>) : ""}
        <table className="table-fixed overflow-auto xl:w-full">
            <thead>
                <tr>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]"> Title </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-full"> Description </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]"> Tags </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Priority </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Options </th>
                </tr>
            </thead>
            <tbody>
            
          {state?.map((item)=>(
            <tr key={item.id} className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                    <td>
                    <button onClick={()=>handleFavorite(item.id)} >
                     {item.isFavorite ? (<FaStar color='orange' />) : (<FaStar color='gray' />) }
                    </button>
                        </td>
                    <td>{item.title}</td>
                    <td>
                        <div>
                          {item.description}
                        </div>
                    </td>
                    <td>
                        <ul className="flex justify-center gap-1.5 flex-wrap">
                   
                            <li>
                            {item?.tags.map(tag=>(
                                <span key={tag} className={`ml-1 inline-block h-5 whitespace-nowrap rounded-[45px] ${RandomColor()} px-2.5 text-sm capitalize text-[#F4F5F6]`}>{tag}</span>
                            ))}
                               
                            </li>
                
                          
                        </ul>
                    </td>
                    <td className="text-center">{item.priority}</td>
                    <td>
                        <div className="flex items-center justify-center space-x-3">
                            <button className="text-red-500" onClick={()=> handleDelete(item.id)} >Delete</button>
                            <button className="text-blue-500" onClick={()=> handletaskEdit(item)} >Edit</button>
                        </div>
                    </td>
                </tr>
          ))}
        
       
               
              
            </tbody>
        </table>
    </div>
    );
};

export default TaskList;