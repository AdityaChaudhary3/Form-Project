import React from 'react'
import FormSecond from '../components/SecondFormComponent'
import { useMyContext } from '../Context/Mycontext'
import { useNavigate } from 'react-router-dom';
function SecondForm() {
  const { globalObject } = useMyContext();
  const navigate = useNavigate();
  const numofchildren = globalObject[0][25]["How many members in the Familly ?"];
  const handlefinalsubmit=()=>{
       navigate('/result');
  }
  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-bold'>Second Form for Now.</h1>
      {Array.from({ length: numofchildren }, (_, index) => (
        <div key={index}>
          <div className='mt-6 font-bold'>Enter {index+1} family member data</div>
          <FormSecond key={index} />  
        </div>
      ))}
      <div onClick={handlefinalsubmit} className='border border-black rounded-lg cursor-pointer w-full p-4 mt-3 sm:w-2/3'>Final Submit</div>
    </div>
  )
}

export default SecondForm
