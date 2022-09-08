import React, {useState, ChangeEvent } from 'react';

export interface IAppProps {
    btnSend: string
}

const Taksform = ({btnSend}: IAppProps) => {
    
    const [form, setForm] = useState<String| null>('')
    const HandSubmit = (e:ChangeEvent <HTMLInputElement> ) => {
        e.preventDefault()
        setForm(e.target.value)
    }
   
   
   
    return (
    <div>
      <form>
       <div> 
         <label>Title</label>
            <input type="text" name='title' placeholder='write your tasks' onChange={HandSubmit} />
            {form}
        </div> 
        
        <div> 
         <label>Hard tasks.</label>
            <input type="text" name='title' placeholder='how hard is your tasks?' onChange={HandSubmit} />
            {form}
        </div>

        <input type="submit" value={btnSend} />    
          
      </form>
      
    </div>
    );
}


export default Taksform
