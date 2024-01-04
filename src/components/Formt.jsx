import React from 'react';
import { useForm } from 'react-hook-form';

export default function Formt() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log("data",data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="1.What is Name of Block ?" {...register("1.What is Name of Block ?", {required: true})} />
      <input type="text" placeholder="2.What is Name of Gram Panchayat." {...register("2.What is Name of Gram Panchayat.", {required: true})} />
      <input type="text" placeholder="3.What is the Name of the head of the Familly ?" {...register("3.What is the Name of the head of the Familly ?", {required: true})} />
      <input type="text" placeholder="4.What is the Familly ID ? (Ration Card ID)" {...register("4.What is the Familly ID ? (Ration Card ID)", {required: true})} />
      <input type="text" placeholder="6.How much is the Familly Income ? (In Lakhs)" {...register("6.How much is the Familly Income ? (In Lakhs)", {required: true})} />
      <input type="text" placeholder="7.What is the Address of the Familly ?" {...register("7.What is the Address of the Familly ?", {required: true})} />

      <input {...register("8.What is the category of the Familly ? (SC/ST/OBC/General)", { required: true })} type="radio" value="SC" />
      <input {...register("8.What is the category of the Familly ? (SC/ST/OBC/General)", { required: true })} type="radio" value="ST" />
      <input {...register("8.What is the category of the Familly ? (SC/ST/OBC/General)", { required: true })} type="radio" value="OBC" />
      <input {...register("8.What is the category of the Familly ? (SC/ST/OBC/General)", { required: true })} type="radio" value="Genral" />
      <input type="text" placeholder="9.How much land the Familly Owns ? (In Bigha)" {...register("9.How much land the Familly Owns ? (In Bigha)", {required: true})} />

      <input {...register("10.Type of House  Ownership ?", { required: true })} type="radio" value="Self Owned" />
      <input {...register("10.Type of House  Ownership ?", { required: true })} type="radio" value="Rent" />
      <input {...register("10.Type of House  Ownership ?", { required: true })} type="radio" value="Unauthorized" />

      <input {...register("11.Religion of the Familly ?", { required: true })} type="radio" value="Hinduism" />
      <input {...register("11.Religion of the Familly ?", { required: true })} type="radio" value="Islam" />
      <input {...register("11.Religion of the Familly ?", { required: true })} type="radio" value="Christanity" />

      <input {...register("12.Do the Familly have MGNREGA Job Card ?", { required: true })} type="radio" value="Yes" />
      <input {...register("12.Do the Familly have MGNREGA Job Card ?", { required: true })} type="radio" value="No" />

      <input {...register("13.Type of House ?", { required: true })} type="radio" value="Pucca" />
      <input {...register("13.Type of House ?", { required: true })} type="radio" value="Kachha" />
      <input {...register("13.Type of House ?", { required: true })} type="radio" value="Half Pucca" />

      <input {...register("14.Do the Familly have electricity connection ?", { required: true })} type="radio" value="Yes" />
      <input {...register("14.Do the Familly have electricity connection ?", { required: true })} type="radio" value="No" />

      <input {...register("15.Do the Familly have Gas Connection ?", { required: true })} type="radio" value="Yes" />
      <input {...register("15.Do the Familly have Gas Connection ?", { required: true })} type="radio" value="No" />

      <input {...register("16.Do the Familly benefited through Ujjwala Scheme ?", { required: true })} type="radio" value="Yes" />
      <input {...register("16.Do the Familly benefited through Ujjwala Scheme ?", { required: true })} type="radio" value="No" />

      <input {...register("17.Do the Familly have Individual toilets ?", { required: true })} type="radio" value="Yes" />
      <input {...register("17.Do the Familly have Individual toilets ?", { required: true })} type="radio" value="No" />

      <input {...register("18.Whether received Awas under PMAY/CMAY ?", { required: true })} type="radio" value="Yes" />
      <input {...register("18.Whether received Awas under PMAY/CMAY ?", { required: true })} type="radio" value="No" />

      <input {...register("19.Familly have taken loan under any scheme ?", { required: true })} type="radio" value="Yes" />
      <input {...register("19.Familly have taken loan under any scheme ?", { required: true })} type="radio" value="No" />

      <input {...register("20.Does the Familly covered under Fasal Bima Yojana ?", { required: true })} type="radio" value="Yes" />
      <input {...register("20.Does the Familly covered under Fasal Bima Yojana ?", { required: true })} type="radio" value="No" />

      <input {...register("21.Familly got connection under Har Ghar Jal Jal Jeevan Mission ?", { required: true })} type="radio" value="Yes" />
      <input {...register("21.Familly got connection under Har Ghar Jal Jal Jeevan Mission ?", { required: true })} type="radio" value="No" />

      <input {...register("22.Whether Familly got benefitted from CM Vivah Yojana ?", { required: true })} type="radio" value="Yes" />
      <input {...register("22.Whether Familly got benefitted from CM Vivah Yojana ?", { required: true })} type="radio" value="No" />

      <input {...register("23.Familly got connection under Har Ghar Jal ?", { required: true })} type="radio" value="Yes" />
      <input {...register("23.Familly got connection under Har Ghar Jal ?", { required: true })} type="radio" value="No" />

      <input {...register("24.Main Occupation of the Familly ?", { required: true })} type="radio" value="Government Job" />
      <input {...register("24.Main Occupation of the Familly ?", { required: true })} type="radio" value="Private Job" />
      <input {...register("24.Main Occupation of the Familly ?", { required: true })} type="radio" value="Agriculture" />
      <input {...register("24.Main Occupation of the Familly ?", { required: true })} type="radio" value="Daily Wage" />

      <input {...register("25. How many members in the Familly ?", { required: true })} type="radio" value="1" />
      <input {...register("25. How many members in the Familly ?", { required: true })} type="radio" value="2" />
      <input {...register("25. How many members in the Familly ?", { required: true })} type="radio" value="3" />
      <input {...register("25. How many members in the Familly ?", { required: true })} type="radio" value="4" />
      <input {...register("25. How many members in the Familly ?", { required: true })} type="radio" value="5" />
      <input {...register("25. How many members in the Familly ?", { required: true })} type="radio" value="6" />
      <input {...register("25. How many members in the Familly ?", { required: true })} type="radio" value="7" />
      <input {...register("25. How many members in the Familly ?", { required: true })} type="radio" value="8" />

      <input type="submit" />
    </form>
  );
}