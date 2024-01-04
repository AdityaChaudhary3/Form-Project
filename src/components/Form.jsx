import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} class="bg-gray-200 p-4 flex flex-col justify-center items-center"> 
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">1. What is the Name of Block</label>
      <input class="w-1/2 h-2/3 p-3" type="text" placeholder="What is Name of Block ?" {...register("What is Name of Block ?", {required: true})} />
      </div>
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">2.What is Name of Gram Panchayat.</label>
      <input class="w-1/2" type="text" placeholder="What is Name of Gram Panchayat." {...register("2.What is Name of Gram Panchayat.", {required: true})} />
      </div>
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">3.What is the Name of the head of the Familly ?</label>
      <input class="w-1/2" type="text" placeholder="What is the Name of the head of the Familly ?" {...register("3.What is the Name of the head of the Familly ?", {required: true})} />
      </div>
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">4.What is the Familly ID ? (Ration Card ID)</label>
      <input class="w-1/2" type="text" placeholder="What is the Familly ID ? (Ration Card ID)" {...register("4.What is the Familly ID ? (Ration Card ID)", {required: true})} />
      </div>
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">6.How much is the Familly Income ? (In Lakhs)</label>
      <input class="w-1/2" type="text" placeholder="How much is the Familly Income ? (In Lakhs)" {...register("6.How much is the Familly Income ? (In Lakhs)", {required: true})} />
      </div>
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">7.What is the Address of the Familly ?"</label>
      <input class="w-1/2" type="text" placeholder="What is the Address of the Familly ?" {...register("7.What is the Address of the Familly ?", {required: true})} />
      </div>
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">8.What is the category of the Familly ? (SC/ST/OBC/General)"</label>
      <select class="w-1/2" {...register("What is the category of the Familly ? (SC/ST/OBC/General)", { required: true })}>
      <option value="sc">SC</option>
       <option value="general">ST</option>
            <option value="obc">OBC</option>
            <option value="general">General</option>
      </select>
      </div>
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">9.How much land the Familly Owns ? (In Bigha)"</label>
      <input class="w-1/2" type="text" placeholder="How much land the Familly Owns ? (In Bigha)" {...register("9.How much land the Familly Owns ? (In Bigha)", {required: true})} />
      </div>
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">10.Type of House  Ownership ?</label>
      <select class="w-1/2" {...register("Type of House  Ownership ?", { required: true })}>
       <option value="general">Self Owned</option>
            <option value="obc">Rent </option>
            <option value="Unauthorized">Unauthorized</option>
      </select>
      </div>
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">11.Religion of the family?</label>
      <select class="w-1/2" {...register("Religion of the family?", { required: true })}>
      <option value="Hinduism">Hinduism</option>
       <option value="Muslim">Muslim</option>
            <option value="Christianity">Christianity </option>
      </select>
      </div>
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">12.Do the Familly have MGNREGA Job Card ?</label>
      <select class="w-1/2" {...register("Do the Familly have MGNREGA Job Card", { required: true })}>
      <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">13.Type of house</label>
      <select class="w-1/2" {...register("Type of house ?", { required: true })}>
      <option value="Kaccha">Kaccha</option>
       <option value="Pucca">Pucca</option>
       <option value="Half Pucca">Half Pucca</option>
      </select>
      </div>
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">14.Do the Familly have electricity connection </label>
      <select class="w-1/2" {...register("Do the Familly have electricity connection ?", { required: true })}>
      <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">15. Do the Familly have Gas Connection ?</label>
      <select class="w-1/2" {...register("Do the Familly have Gas Connection ?", { required: true })}>
      <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">16.Do the Familly benefited through Ujjwala Scheme ? ?</label>
      <select class="w-1/2" {...register("Do the Familly benefited through Ujjwala Scheme ?", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">17.Do the Familly have Individual toilets ?</label>
      <select class="w-1/2" {...register("Do the Familly have Individual toilets ?", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">18.Whether received Awas under PMAY/CMAY?</label>
      <select class="w-1/2" {...register("Whether received Awas under PMAY/CMAY?", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">19.Familly have taken loan under any scheme ?</label>
      <select class="w-1/2" {...register("Familly have taken loan under any scheme?", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">20.Does the Familly covered under Fasal Bima Yojana ?</label>
      <select class="w-1/2" {...register("Does the Familly covered under Fasal Bima Yojana?", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">21.Familly got connection under Har Ghar Jal Jal Jeevan Mission ?</label>
      <select class="w-1/2" {...register("Familly got connection under Har Ghar Jal Jal Jeevan Mission?", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">22.Whether Familly got benefitted from CM Vivah Yojana ?</label>
      <select class="w-1/2" {...register("Whether Familly got benefitted from CM Vivah Yojana ?", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">23. Familly got connection under Har Ghar Jal ?</label>
      <select class="w-1/2" {...register("Familly got connection under Har Ghar Jal ?", { required: true })}>
       <option value="Yes">Yes</option>
       <option value="No">No</option>
      </select>
      </div>
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">24. Main Occupation of the Familly ?</label>
      <select class="w-1/2" {...register("Familly got connection under Har Ghar Jal ?", { required: true })}>
       <option value="Yes">Government Job</option>
       <option value="No">Private Job</option>
       <option value="Yes">Agriculture</option>
       <option value="No">Daily Wage</option>
      </select>
      </div>
      <div class="bg-white mb-4 w-2/3 h-10 flex flex items-center justify-around">
      <label class="w-1/2">25.How many members in the Familly ?</label>
      <input class="w-1/2" {...register("25.How many members in the Familly ?", { required: true })} type="number"/>
      </div>
      <input class="w-1/2 curser " type="submit" />
      </form>
  );
}