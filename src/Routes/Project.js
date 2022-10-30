import React from "react";
import {AiOutlineCheckCircle} from 'react-icons/ai'

export default function Project() {
  return (
    <>
      <div className="mx-w-full min-h-fit p-4 m-2 " id="project">
        <h1 className="text-center text-3xl animate__animated animate__flipInX">Projects</h1>
        <div className="md:grid grid-cols-2 gap-3 my-8">
          <section className="p-4 my-4 rounded-3xl shadow-md">
            <h1 className="text-center text-2xl">Project-1</h1>
            <div className="md:flex space-x-3">
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
                  alt="" width={640} className='my-4 rounded-3xl'
                />
              </div>
              <div>
                <article className="p-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam incidunt libero, distinctio nemo quam consequatur
                  debitis! Alias modi facilis nam.
                </article>
                <div className="">
                  <p >
                <span className="flex items-center"><AiOutlineCheckCircle className="mx-2" size={20}/>Html</span>
                <span className="flex items-center"><AiOutlineCheckCircle className="mx-2" size={20}/>Tailwind</span>
                <span className="flex items-center"><AiOutlineCheckCircle className="mx-2" size={20}/>Javascript</span>
                <span className="flex items-center"><AiOutlineCheckCircle className="mx-2" size={20}/>React</span>
                <span className="flex items-center"><AiOutlineCheckCircle className="mx-2" size={20}/>Redux</span>
                </p>
                </div>
              </div>
            </div>
          </section>
          <section className="">
          <section className="p-4 my-4 rounded-3xl shadow-md">
            <h1 className="text-center text-2xl">Project-2</h1>
            <div className="md:flex space-x-3">
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
                  alt="" width={640} className='my-4 rounded-3xl'
                />
              </div>
              <div>
                <article className="p-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam incidunt libero, distinctio nemo quam consequatur
                  debitis! Alias modi facilis nam.
                </article>
                <div className="">
                  <p >
                <span className="flex items-center"><AiOutlineCheckCircle className="mx-2" size={20}/>Html</span>
                <span className="flex items-center"><AiOutlineCheckCircle className="mx-2" size={20}/>Tailwind</span>
                <span className="flex items-center"><AiOutlineCheckCircle className="mx-2" size={20}/>Javascript</span>
                <span className="flex items-center"><AiOutlineCheckCircle className="mx-2" size={20}/>React</span>
                <span className="flex items-center"><AiOutlineCheckCircle className="mx-2" size={20}/>Redux</span>
                </p>
                </div>
              </div>
            </div>
          </section>
          </section>
          <section >
          <section className="p-4 my-4 rounded-3xl shadow-md">
            <h1 className="text-center text-2xl">Project-1</h1>
            <div className="md:flex space-x-3">
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
                  alt="" width={640} className='my-4 rounded-3xl'
                />
              </div>
              <div>
                <article className="p-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam incidunt libero, distinctio nemo quam consequatur
                  debitis! Alias modi facilis nam.
                </article>
                <div className="">
                  <p >
                <span className="flex items-center"><AiOutlineCheckCircle className="mx-2" size={20}/>Html</span>
                <span className="flex items-center"><AiOutlineCheckCircle className="mx-2" size={20}/>Tailwind</span>
                <span className="flex items-center"><AiOutlineCheckCircle className="mx-2" size={20}/>Javascript</span>
                <span className="flex items-center"><AiOutlineCheckCircle className="mx-2" size={20}/>React</span>
                <span className="flex items-center"><AiOutlineCheckCircle className="mx-2" size={20}/>Redux</span>
                </p>
                </div>
              </div>
            </div>
          </section>
          </section>
        
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </>
  );
}
