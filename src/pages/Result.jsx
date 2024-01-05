import { useMyContext } from "../Context/Mycontext"
const Result=()=>{
    const { globalObject} = useMyContext();
    console.log(globalObject);
    return (
    <div>
            {globalObject.map((result, index) => (
                <div key={index} className="flex flex-col">
                    {Object.entries(result).map(([key, nestedObject]) => (
                        <div key={key} className="mb-2">
                            {Object.entries(nestedObject).map(([question, answer]) => (
                                <div key={question} className="flex flex-row justify-center bg-gray">
                                   <div className="mr-6">{question} </div>
                                   <div>{answer}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
export default Result