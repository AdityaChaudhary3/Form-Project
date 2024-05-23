import React from 'react';
import { useForm } from 'react-hook-form';
import { useMyContext } from '../Context/Mycontext';
import "./Form.css"
export default function FormSecond() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {globalObject,setGlobalObject}=useMyContext();
  const onSubmit = (data) =>{
    globalObject[globalObject.length-1][26].push(data);
    console.log(globalObject);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 flex flex-col justify-center items-center">
      <div className="mb-4 w-full h-auto p-3 rounded-lg flex flex-col md:flex-row items-center justify-around">
      <label className="w-full md:w-1/2 mb-6 md:mb-0 ">1.Family Members Name ?</label>
      <input className="w-full md:w-1/2 h-2/3 p-3" type="text" placeholder="1.Family Members Name ?" {...register("1.Family Members Name ?", {})} />
      </div>

      <div className="mb-4 w-full h-auto p-3 rounded-lg flex flex-col md:flex-row items-center justify-around">
      <label className="w-full md:w-1/2 mb-6 md:mb-0 ">2.Family Members Age ?</label>
      <input className="w-full md:w-1/2 h-2/3 p-3" type="text" placeholder="2.Family Members Age ?" {...register("2.Family Members Age ?", {})} />
      </div>

      <div className="mb-4 w-full h-auto p-3 rounded-lg flex flex-col md:flex-row items-center justify-around">
      <label className="w-full md:w-1/2 mb-6 md:mb-0 ">3.Mobile number</label>
      <input className="w-full md:w-1/2 h-2/3 p-3" type="text" placeholder="3.Mobile number" {...register("3.Mobile number", {})} />
      </div>

      <div className="mb-4 w-full h-auto p-3 rounded-lg flex flex-col md:flex-row items-center justify-around">
      <label className="w-full md:w-1/2 mb-6 md:mb-0 ">4.Family Members Education details</label>
      <input className="w-full md:w-1/2 h-2/3 p-3" type="text" placeholder="4.Family Members Education details " {...register("4.Family Members Education details ", {})} />
      </div>

      <div className="mb-4 w-full h-auto p-3 rounded-lg flex flex-col md:flex-row items-center justify-around">
      <label className="w-full md:w-1/2 mb-6 md:mb-0 ">5.Family Members Employment details</label>
      <input className="w-full md:w-1/2 h-2/3 p-3" type="text" placeholder="5.Family Members Employment details " {...register} />
      </div>

      <div className="mb-4 w-full h-auto p-3 rounded-lg flex flex-col md:flex-row items-center justify-around">
      <label className="w-full md:w-1/2 mb-6 md:mb-0 ">6.Number of children studying in primary and upper primary school in family</label>
      <input className="w-full md:w-1/2 h-2/3 p-3" type="text" placeholder="6.Number of children studying in primary and upper primary school in family" {...register("6.Number of children studying in primary and upper primary school in family", {})} />
      </div>

      <div className="mb-4 w-full h-auto p-3 rounded-lg flex flex-col md:flex-row items-center justify-around">
      <label className="w-full md:w-1/2 mb-6 md:mb-0 ">7.Number of children studying in aganbadi</label>
      <input className="w-full md:w-1/2 h-2/3 p-3" type="text" placeholder="7.Number of children studying in aganbadi" {...register("7.Number of children studying in aganbadi", {})} />
      </div>

      <div className="mb-4 w-full h-auto p-3 rounded-lg flex flex-col md:flex-row items-center justify-around">
      <label className="w-full md:w-1/2 mb-6 md:mb-0 ">8.Shram card scheme</label>
      <select className="w-full md:w-1/2" {...register("8.Shram card scheme", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>

      <div className="mb-4 w-full h-auto p-3 rounded-lg flex flex-col md:flex-row items-center justify-around">
      <label className="w-full md:w-1/2 mb-6 md:mb-0 ">9.Pension scheme</label>
      <select className="w-full md:w-1/2" {...register("9.Pension scheme", { required: true })}>
       <option value="Vriddha pension">Vriddha pension</option>
       <option value="Nirashrit Mahila pension">Nirashrit Mahila pension</option>
       <option value="Divyang pension">Divyang pension</option>
      </select>
      </div>

      <div className="mb-4 w-full h-auto p-3 rounded-lg flex flex-col md:flex-row items-center justify-around">
      <label className="w-full md:w-1/2 mb-6 md:mb-0 ">10.Divyang Equipment</label>
      <select className="w-full md:w-1/2" {...register("10.Divyang Equipment", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>

      <div className="mb-4 w-full h-auto p-3 rounded-lg flex flex-col md:flex-row items-center justify-around">
      <label className='w-full md:w-1/2 mb-6 md:mb-0 '>11.Any woman in the faimly should be associated with self help group</label>
      <select className="w-full md:w-1/2" {...register("11.Any woman in the faimly should be associated with self help group", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>

      <div className="mb-4 w-full h-auto p-3 rounded-lg flex flex-col md:flex-row items-center justify-around">
      <label className='w-full md:w-1/2 mb-6 md:mb-0 '>12.Ayushman card scheme</label>
      <select className="w-full md:w-1/2" {...register("12.Ayushman card scheme", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      
      <div className="mb-4 w-full h-auto p-3 rounded-lg flex flex-col md:flex-row items-center justify-around">
      <label className='w-full md:w-1/2 mb-6 md:mb-0 '>13.PMJY</label>
      <select className="w-full md:w-1/2" {...register("13.PMJY", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>

      <div className="mb-4 w-full h-auto p-3 rounded-lg flex flex-col md:flex-row items-center justify-around">
      <label className='w-full md:w-1/2 mb-6 md:mb-0 '>14.PMJJBY</label>
      <select className="w-full md:w-1/2" {...register("14.PMJJBY", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>

      <div className="mb-4 w-full h-auto p-3 rounded-lg flex flex-col md:flex-row items-center justify-around">
      <label className='w-full md:w-1/2 mb-6 md:mb-0 '>15.PMBY</label>
      <select className="w-full md:w-1/2" {...register("15.PMBY", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>

      <div className="mb-4 w-full h-auto p-3 rounded-lg flex flex-col md:flex-row items-center justify-around">
      <label className='w-full md:w-1/2 mb-6 md:mb-0 '>16.APY</label>
      <select className="w-full md:w-1/2" {...register("16.APY", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>

      <div className="mb-4 w-full h-auto p-3 rounded-lg flex flex-col md:flex-row items-center justify-around">
      <label className='w-full md:w-1/2 mb-6 md:mb-0 '>17.Kaushal vikas scheme</label>
      <select className="w-full md:w-1/2" {...register("17.Kaushal vikas scheme", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>

      <input className='w-full md:cursor-pointer' type="submit" />
    </form>
  );
}