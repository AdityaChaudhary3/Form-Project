import React from 'react';
import { useForm } from 'react-hook-form';
import { useMyContext } from '../Context/Mycontext';
import { useNavigate } from 'react-router-dom';
export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate=useNavigate();
  const { globalObject, setGlobalObject } = useMyContext();
  const onSubmit = data =>{
    data[26]=[];
    setGlobalObject([...globalObject,data]);
    console.log("data",data);
    navigate("/secondform")
  } ;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-gray-200 p-4 flex flex-col justify-center items-center"> 
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">1. What is the Name of Block</label>
      <input className="w-1/2 p-3  h-2/3" type="text" placeholder="What is Name of Block ?" {...register("1.What is Name of Block ?", {required: true})} />
      </div>
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">2.What is Name of Gram Panchayat.</label>
      <input className="w-1/2 p-3"  type="text" placeholder="What is Name of Gram Panchayat." {...register("2.What is Name of Gram Panchayat.", {required: true})} />
      </div>
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">3.What is the Name of the head of the Familly ?</label>
      <input className="w-1/2 p-3"  type="text" placeholder="What is the Name of the head of the Familly ?" {...register("3.What is the Name of the head of the Familly ?", {required: true})} />
      </div>
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">4.What is the Familly ID ? (Ration Card ID)</label>
      <input className="w-1/2 p-3"  type="text" placeholder="What is the Familly ID ? (Ration Card ID)" {...register("4.What is the Familly ID ? (Ration Card ID)", {required: true})} />
      </div>
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">6.How much is the Familly Income ? (In Lakhs)</label>
      <input className="w-1/2 p-3"  type="text" placeholder="How much is the Familly Income ? (In Lakhs)" {...register("6.How much is the Familly Income ? (In Lakhs)", {required: true})} />
      </div>
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">7.What is the Address of the Familly ?"</label>
      <input className="w-1/2 p-3"  type="text" placeholder="What is the Address of the Familly ?" {...register("7.What is the Address of the Familly ?", {required: true})} />
      </div>
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">8.What is the category of the Familly ? (SC/ST/OBC/General)"</label>
      <select className="w-1/2" {...register("8.What is the category of the Familly ? (SC/ST/OBC/General)", { required: true })}>
      <option value="sc">SC</option>
       <option value="general">ST</option>
            <option value="obc">OBC</option>
            <option value="general">General</option>
      </select>
      </div>
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">9.How much land the Familly Owns ? (In Bigha)"</label>
      <input className="w-1/2 p-3"  type="number" placeholder="How much land the Familly Owns ? (In Bigha)" {...register("9.How much land the Familly Owns ? (In Bigha)", {required: true})} />
      </div>
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">10.Type of House  Ownership ?</label>
      <select className="w-1/2" {...register("10.Type of House  Ownership ?", { required: true })}>
            <option value="Self owned">Self Owned</option>
            <option value="Rent">Rent </option>
            <option value="Unauthorized">Unauthorized</option>
      </select>
      </div>
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">11.Religion of the family?</label>
      <select className="w-1/2" {...register("11.Religion of the family?", { required: true })}>
      <option value="Hinduism">Hinduism</option>
       <option value="Muslim">Muslim</option>
            <option value="Christianity">Christianity </option>
      </select>
      </div>
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">12.Do the Familly have MGNREGA Job Card ?</label>
      <select className="w-1/2" {...register("12.Do the Familly have MGNREGA Job Card", { required: true })}>
      <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">13.Type of house</label>
      <select className="w-1/2" {...register("13.Type of house ?", { required: true })}>
      <option value="Kaccha">Kaccha</option>
       <option value="Pucca">Pucca</option>
       <option value="Half Pucca">Half Pucca</option>
      </select>
      </div>
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">14.Do the Familly have electricity connection </label>
      <select className="w-1/2" {...register("14.Do the Familly have electricity connection ?", { required: true })}>
      <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">15. Do the Familly have Gas Connection ?</label>
      <select className="w-1/2" {...register("15.Do the Familly have Gas Connection ?", { required: true })}>
      <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">16.Do the Familly benefited through Ujjwala Scheme ? ?</label>
      <select className="w-1/2" {...register("16.Do the Familly benefited through Ujjwala Scheme ?", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">17.Do the Familly have Individual toilets ?</label>
      <select className="w-1/2" {...register("17.Do the Familly have Individual toilets ?", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">18.Whether received Awas under PMAY/CMAY?</label>
      <select className="w-1/2" {...register("18.Whether received Awas under PMAY/CMAY?", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">19.Familly have taken loan under any scheme ?</label>
      <select className="w-1/2" {...register("19.Familly have taken loan under any scheme?", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">20.Does the Familly covered under Fasal Bima Yojana ?</label>
      <select className="w-1/2" {...register("20.Does the Familly covered under Fasal Bima Yojana?", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">21.Familly got connection under Har Ghar Jal Jal Jeevan Mission ?</label>
      <select className="w-1/2" {...register("21.Familly got connection under Har Ghar Jal Jal Jeevan Mission?", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">22.Whether Familly got benefitted from CM Vivah Yojana ?</label>
      <select className="w-1/2" {...register("22.Whether Familly got benefitted from CM Vivah Yojana ?", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">23. Familly got connection under Har Ghar Jal ?</label>
      <select className="w-1/2" {...register("23.Familly got connection under Har Ghar Jal ?", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">24. Main Occupation of the Familly ?</label>
      <select className="w-1/2" {...register("24.Familly got connection under Har Ghar Jal ?", { required: true })}>
       <option value="Yes">Government Job</option>
       <option value="No">Private Job</option>
       <option value="Yes">Agriculture</option>
       <option value="No">Daily Wage</option>
      </select>
      </div>
      <div className="bg-white w-full rounded-lg h-auto p-3 mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">25.How many members in the Familly ?</label>
      <input className="w-1/2 p-3"  {...register("25.How many members in the Familly ?", { required: true })} type="number"/>
      </div>
      <input className="w-1/2 p-3  cursor-pointer " type="submit" />
      </form>
  );
}