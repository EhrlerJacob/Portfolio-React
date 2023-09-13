import React from 'react'
import { useForm } from 'react-hook-form';


const Contact = () => {

    const {
        register,
        trigger,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (e) => {
        console.log("~ e", e);
        const isValid = await trigger();
        if (!isValid) {
          e.preventDefault();
        }
      };

  return (
    <div name="contact" 
    className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className=' max-sm:mt-20 pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-4'>Reach Out To Me!</p>
            </div>
            <div className='flex justify-center items-center'>
                <form 
                action="https:formsubmit.co/99b53c0edb98c2592afd49337cb8b04a" 
                className='flex flex-col w-full md:w-1/2'
                onSubmit={onSubmit}
                method='POST'>

                    <input 
                    type='text' 
                    name='name' 
                    placeholder='Name' 
                    className='p-2 mb-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    {...register("name", {
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    {errors.name && (
                      <p className="text-red mt-1">
                        {errors.name.type === "required" && "This field is required."}
                        {errors.name.type === "maxLength" && "Max length is 100 char."}
                      </p>
                    )}
                
                    <input 
                    type='text' 
                    name='company' 
                    placeholder='Company' 
                    className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    {...register("company", {
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    {errors.company && (
                      <p className="text-red mt-1">
                        {errors.company.type === "required" && "This field is required."}
                        {errors.company.type === "maxLength" && "Max length is 100 char."}
                      </p>
                    )}
                    
                    <input 
                    type='text' 
                    name='email' 
                    placeholder='Email' 
                    className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                    />
                    {errors.email && (
                      <p className="text-red mt-1">
                        {errors.email.type === "required" && "This field is required."}
                        {errors.email.type === "pattern" && "Invalid email address."}
                      </p>
                    )}
                    
                    <textarea 
                    name='message' 
                    rows="10" 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    placeholder="Comments"
                    {...register("message", {
                        required: true,
                        maxLength: 2000,
                      })}
                    />
                    {errors.message && (
                      <p className="text-red mt-1">
                        {errors.message.type === "required" &&
                          "This field is required."}
                        {errors.message.type === "maxLength" &&
                          "Max length is 2000 char."}
                      </p>
                    )}
                    
                    <button className='text-white bg-gradient-to-b from-green-400 to-cyan-400
                    px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-150 duration-200'>
                        Contact Me
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;