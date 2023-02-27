"use client"
import React from 'react'
import { motion } from 'framer-motion';
import Categorias from './Categorias';
import Curso from './Curso';
import { categorias, cursos } from "../../Data";


export const Cursos = () => {
  const containerMOTION = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="section " id="cursos">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our Top <span className="text-Teal">Categorias</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          tempora illo laborum ex cupiditate tenetur doloribus non velit atque
          amet repudiandae ipsa modi numquam quas odit optio, totam voluptate
          sit! Lorem ipsum dolor sit amet.
        </p>
      </div>

      {/* categorias */}
      <motion.div
        variants={containerMOTION}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8"
      >
        {
          categorias.map((categoria) => {
            return (<Categorias key={categoria.id} {...categoria} />)
          })
        }
      </motion.div>

      {/* Cursos */}
      <div className="text-xl font-bold mt-32">Cursos más populares</div>
      <div className="mt-12 overflow-x-hidden w-full  relative">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
          {cursos.map((curso) => {
            return <Curso key={curso.id} {...curso} />;
          })}
        </div>
      </div>
    </div >
  )
}
