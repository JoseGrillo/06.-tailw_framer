import Image from 'next/image'
import React from 'react'
import profe1 from "../../assets/profe1.webp"
import profe2 from "../../assets/profe2.webp"
import { acordion } from "../Data";
import { Acordion } from "./Acordion"

export const Profesor = () => {
  return (
    <div className="section" id="profesor">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Conviértase en <span className="text-Teal">un Instructor</span> <br /> de Nuestra Plataforma
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis debitis dolorum facilis culpa, quidem voluptate suscipit
            deserunt. Magni neque at eos dolore dignissimos fugit repudiandae?
            Aut laudantium asperiores et!
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Empezar a enseñar
          </button>
        </div>
        {/* <div className="border-[3px] border-solid border-Teal rounded-lg"> */}
        <div className="p-4 border-[3px] border-solid border-Teal rounded-lg  md:w-3/4 sm:row-start-1">
          <Image className="rounded-lg" src={profe1} alt="" />
        </div>
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Conviértase en <span className="text-Teal">un Instructor</span> <br /> de Nuestra Plataforma
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis debitis dolorum facilis culpa, quidem voluptate suscipit
            deserunt. Magni neque at eos dolore dignissimos fugit repudiandae?
            Aut laudantium asperiores et!
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Empezar a enseñar
          </button>
        </div>
        <div className="p-4 border-[3px] border-solid border-Teal rounded-lg  md:w-3/4">
          <Image className="rounded-lg" src={profe2} alt="" />
        </div>
      </div>
      <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Preguntas <span className="text-Teal">Frecuentes</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
        {acordion.map((item) => {
          return <Acordion key={item.id} {...item} />;
        })}
      </div>
    </div>
  )
}

