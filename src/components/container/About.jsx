import Image from 'next/image';
import React from 'react'
import about from "../../assets/About.webp"


export const About = () => {
  return (
    <div className="section" id="about">   {/*  bg-slate-400 */}
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <Image src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Nosotros proporcionamos  <br /> los mejores{" "}
            <span className="text-Teal">Cursos Online </span>
          </div>
          <p className="text-sm text-gray leading-7 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, totam earum. Minus deleniti repellat id! Ratione quia
            eum, explicabo quos eos magni vel corporis voluptatibus, inventore
            doloremque aliquam pariatur recusandae.
          </p>
          <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">
            Saber más
          </button>
        </div>
      </div>
    </div>
  )
}
