/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { TaskContext } from '../../context';
import AddTaskModel from './AddTaskModel';
import EditTaskModel from './EditTaskModel ';
import SearchTask from './SearchTask';
import TaskActions from './TaskActions';
import TaskList from './TaskList';



const TaskBoard = () => {
    const {state} = useContext(TaskContext)
    const [showModal, setShowModal] = useState(false)
    const [isTaskEdit,setIstaskEdit] = useState(null)

    const handletaskEdit=(task)=>{
   
        setIstaskEdit(task)
        if(task !== null){
            setShowModal(true)
        }
        
    }
const handleClose=()=>{
    setShowModal(false)
    setIstaskEdit(null)
}



    return (
        <section className="mb-20 relative" id="tasks">
		
		<div className="container">
			
		<div className="p-2 flex justify-end">
            <SearchTask  />
		</div>
		
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				<TaskActions onShowModal={()=> setShowModal(true)}  />
			     <TaskList handletaskEdit={handletaskEdit}  />
			</div>
		</div>
      <div className="absolute -top-32 left-72 m-auto z-20">
       {showModal && isTaskEdit === null && <AddTaskModel 
       onCloseModal={handleClose} 
 
        />
       }
       {showModal && isTaskEdit !== null && <EditTaskModel 
       onCloseModal={handleClose} 
       isTaskEdit={isTaskEdit}
        />
     
       }
      </div>
    
	</section>
    );
};

export default TaskBoard;