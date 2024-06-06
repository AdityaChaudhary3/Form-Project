const ResultComponent=({Data})=>{
   console.log(Data);
    return (
                <div className="flex flex-col rounded-lg">
                    {Object.entries(Data).map(([key, nestedObject]) => (
                        <div key={key} className="mb-2">
                            {key!=26 && Object.entries(nestedObject).map(([question, answer]) => (
                                <div key={question} className="text-left border-b-2 font-bold p-4 flex flex-col md:flex-row justify-between bg-gray">
                                   <div className="mr-6 mb-5 md:mb-0">{question}</div>
                                   <div>{answer}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
    )
}
export default ResultComponent;