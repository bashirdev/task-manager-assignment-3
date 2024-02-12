import { useContext, useState } from "react";
import { TaskContext } from "../../context";


const AddTaskModel = ({onCloseModal}) => {
  const { dispatch} = useContext(TaskContext)
  const [errors, setError] = useState('');
 const [textValue, setTextValue] = useState({
  id:crypto.randomUUID(),
  title:"",
  description:"",
  tags:[],
  priority:"",
  isFavorite:false
 }) 
console.log(textValue.tags)
 const validateForm = () => {
  let errors = {};
  if (!textValue.title) {
    errors.title = 'Username is required';
  }
  if (!textValue.description) {
    errors.description = 'Description is required';
  } 
  if (!textValue.tags.length === 0) {
    errors.tags  = 'Tags is required';
  } 
  if(!textValue.priority){
    errors.priority = 'Priority is required';
  }
  return errors;
};


 const handleSubmit=(e)=>{
  e.preventDefault();
  const validationErrors = validateForm();
  if (Object.keys(validationErrors).length === 0) {
    dispatch({
      type:"CREATE_TASK",
      payload:textValue,
    })

    setTextValue( {
      title:"",
      description:"",
      tags:[],
      priority:"",
     
     })
   
  } else {
    setError(validationErrors);
  }
   
  }

    return (
<div className="relative">
<button onClick={onCloseModal} className="text-red-500 text-xl absolute top-16 right-8 " >CLOSE</button>
<form  className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
        <h2
          className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]"
        >
  Create task
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
           {errors.title && <span>{errors.title}</span>}
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
      {errors.description && <span>{errors.description}</span>}
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
            {errors.tags && <span>{errors.tags}</span>}
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
              {errors.priority && <span>{errors.priority}</span>}
            </div>
          </div>
          
        </div>
 
        <div className="mt-16 flex justify-center lg:mt-20">
          <button
       
           onClick={handleSubmit}
            type="button"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
         
          >
            Create new Task
          </button>
        </div>
      </form>
</div>
      
    )
};

export default AddTaskModel;