import { useMyContext } from "../Context/Mycontext"
import ResultComponent from "../components/ResultComponents";
const Result=()=>{
    const { globalObject} = useMyContext();
    const GenralData=globalObject[globalObject.length-1]
    console.log(GenralData);
    const familymembersData=globalObject[globalObject.length-1][26];
    console.log(familymembersData);
    return (
        <div className="flex flex-col">
            <div className="font-bold">Genral Data</div>
             <ResultComponent  Data={GenralData} />
             <div className="font-bold mt-5">Family Members Data</div>
             {familymembersData.map((Data,index)=>(
                <>
                <div className='mt-6 font-bold'> {index+1} family member data</div>
                <ResultComponent Data={Data} />
                </>
             ))}
        </div>
    )
}
export default Result