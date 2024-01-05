import React from 'react'
import FormSecond from '../components/SecondFormComponent'
import { useMyContext } from '../Context/Mycontext'
import { useNavigate } from 'react-router-dom';
function SecondForm() {
  const { globalObject } = useMyContext();
  const navigate = useNavigate();
  const numofchildren = globalObject[0][25]["How many members in the Familly ?"];
  console.log(globalObject[0]);
  console.log(numofchildren);

  return (
    <div>
      <h1 className='font-bold'>Second Form for Now.</h1>
      {Array.from({ length: numofchildren }, (_, index) => (
        <>
          <div className='mt-6 font-bold'>Enter {index+1} family member data</div>
          <FormSecond key={index} />  
        </>
      ))}
      <button onClick={() => navigate("result")} className='cursor-pointer'>Final Submit.</button>
    </div>
  )
}

export default SecondForm
