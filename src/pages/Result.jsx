import { useMyContext } from "../Context/Mycontext"
const Result=()=>{
    const { globalObject} = useMyContext();
    return (
      <>
    <div>
      <h2>Object Keys and Values:</h2>
      <ul>
        {Object.entries(globalObject).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
      </>
    )
}
export default Result