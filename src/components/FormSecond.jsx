import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormSecond() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-200 p-4 flex flex-col justify-center items-center">
      <div className="bg-white mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">1.Family Members Name ?</label>
      <input className="w-1/2 h-2/3 p-3" type="text" placeholder="1.Family Members Name ?" {...register("1.Family Members Name ?", {})} />
      </div>

      <div className="bg-white mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">2.Family Members Age ?</label>
      <input className="w-1/2 h-2/3 p-3" type="text" placeholder="2.Family Members Age ?" {...register("2.Family Members Age ?", {})} />
      </div>

      <div className="bg-white mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">3.Mobile number</label>
      <input className="w-1/2 h-2/3 p-3" type="text" placeholder="3.Mobile number" {...register("3.Mobile number", {})} />
      </div>

      <div className="bg-white mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">4.Family Members Education details</label>
      <input className="w-1/2 h-2/3 p-3" type="text" placeholder="4.Family Members Education details " {...register("4.Family Members Education details ", {})} />
      </div>

      <div className="bg-white mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">5.Family Members Employment details</label>
      <input className="w-1/2 h-2/3 p-3" type="text" placeholder="5.Family Members Employment details " {...register} />
      </div>

      <div className="bg-white mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">6.Number of children studying in primary and upper primary school in family</label>
      <input className="w-1/2 h-2/3 p-3" type="text" placeholder="6.Number of children studying in primary and upper primary school in family" {...register("6.Number of children studying in primary and upper primary school in family", {})} />
      </div>

      <div className="bg-white mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">7.Number of children studying in aganbadi</label>
      <input className="w-1/2 h-2/3 p-3" type="text" placeholder="7.Number of children studying in aganbadi" {...register("7.Number of children studying in aganbadi", {})} />
      </div>

      <div className="bg-white mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">8.Shram card scheme</label>
      <select className="w-1/2" {...register("8.Shram card scheme", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>

      <div className="bg-white mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">9.Pension scheme</label>
      <select className="w-1/2" {...register("9.Pension scheme", { required: true })}>
       <option value="Vriddha pension">Vriddha pension</option>
       <option value="Nirashrit Mahila pension">Nirashrit Mahila pension</option>
       <option value="Divyang pension">Divyang pension</option>
      </select>
      </div>

      <div className="bg-white mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className="w-1/2">10.Divyang Equipment</label>
      <select className="w-1/2" {...register("10.Divyang Equipment", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>

      <div className="bg-white mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className='w-1/2'>11.Any woman in the faimly should be associated with self help group</label>
      <select className="w-1/2" {...register("11.Any woman in the faimly should be associated with self help group", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>

      <div className="bg-white mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className='w-1/2'>12.Ayushman card scheme</label>
      <select className="w-1/2" {...register("12.Ayushman card scheme", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      
      <div className="bg-white mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className='w-1/2'>13.PMJY</label>
      <select className="w-1/2" {...register("13.PMJY", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>

      <div className="bg-white mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className='w-1/2'>14.PMJJBY</label>
      <select className="w-1/2" {...register("14.PMJJBY", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>

      <div className="bg-white mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className='w-1/2'>15.PMBY</label>
      <select className="w-1/2" {...register("15.PMBY", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>

      <div className="bg-white mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className='w-1/2'>16.APY</label>
      <select className="w-1/2" {...register("16.APY", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>

      <div className="bg-white mb-4 w-4/5 h-10 flex items-center justify-around">
      <label className='w-1/2'>17.Kaushal vikas scheme</label>
      <select className="w-1/2" {...register("17.Kaushal vikas scheme", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>

      <input type="submit" />
    </form>
  );
}