const ResultComponent=({Data})=>{
   console.log(Data);
    return (
                <div className="flex flex-col rounded-lg">
                    {Object.entries(Data).map(([key, nestedObject]) => (
                        <div key={key} className="mb-2">
                            {key!=26 && Object.entries(nestedObject).map(([question, answer]) => (
                                <div key={question} className=" font-bold p-4 flex flex-row justify-between bg-gray">
                                   <div className="mr-6">{question}</div>
                                   <div>{answer}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
    )
}
export default ResultComponent;