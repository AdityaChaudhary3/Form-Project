import React from 'react'
import FormSecond from '../components/FormSecond'
import { useMyContext } from '../Context/Mycontext'
function SecondForm() {
  const { globalObject } = useMyContext();
  const numofchildren = globalObject[0][25]["How many members in the Familly ?"];
  console.log(numofchildren);
  return (
    <div>
      <h1>Second Form for Now.</h1>
      {Array.from({ length: numofchildren }, (_, index) => (
        <>
          <div>Enter {index+1} family member data</div>
          <FormSecond key={index} />  
        </>
      ))}
    </div>
  )
}

export default SecondForm
