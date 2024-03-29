
   import { useContext, useState } from "react";
import { TaskContext } from "../../context";


const EditTaskModel = ({onCloseModal, isTaskEdit}) => {
  const { dispatch} = useContext(TaskContext)
 const [textValue, setTextValue] = useState(isTaskEdit ||{
  id:crypto.randomUUID(),
  title:"",
  description:"",
  tags:[],
  priority:"",
  isFavorite:false
 }) 

 const handleEdit=()=>{
   
    dispatch({ type: "TASK_EDIT", payload:textValue});
    setTextValue( {
        title:"",
        description:"",
        tags:[],
        priority:"",
       
       })
   }
 

    return (
<div className="relative">
<button onClick={onCloseModal} className="text-red-500 text-xl absolute top-16 right-8 " >CLOSE</button>
<form  className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
        <h2
          className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]"
        >
  Edit Task
        </h2>
  
    
        <div className="space-y-9 text-white lg:space-y-10">
      
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={textValue.title}
              onChange={(e)=> setTextValue({...textValue, title:e.target.value})}
        
              required
            />
          </div>
         
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              value={textValue.description}
               onChange={(e)=> setTextValue({...textValue, description:e.target.value})}
            
              required
            ></textarea>
          </div>
         
          <div
            className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20"
          >
    
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                value={textValue.tags}
                onChange={(e)=> setTextValue({...textValue, tags:e.target.value.split(',')})}
                required
              />
            </div>
       
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                value={textValue.priority}
                onChange={(e)=> setTextValue({...textValue, priority:e.target.value})}
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>
 
        <div className="mt-16 flex justify-center lg:mt-20">
          <button
           onClick={handleEdit}
            type="button"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
         
          >
           Update
          </button>
        </div>
      </form>
</div>
      
    )
};

export default EditTaskModel;