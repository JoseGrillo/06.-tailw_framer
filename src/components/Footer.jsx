"use client"
import React from 'react'
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-Teal p-[3.1rem]"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        <div>
          <div className="font-bold mb-6">Empezar</div>
          <p className="text-sm leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo neque
            saepe cumque. Veritatis sunt commodi
          </p>
        </div>
        <div>
          <div className="font-bold mb-6">Services</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Diseño web
            </a>
            <a href="" className="text-sm hover:underline">
              Desarrollo web
            </a>
            <a href="" className="text-sm hover:underline">
              {" "}
              Ciencia
            </a>
            <a href="" className="text-sm hover:underline">
              Publicidad digital
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Company</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              política de privacidad
            </a>
            <a href="" className="text-sm hover:underline">
              mapa del sitio
            </a>
            <a href="" className="text-sm hover:underline">
              Carreras
            </a>
            <a href="" className="text-sm hover:underline">
              Términos y condiciones
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Síguenos</div>
          <div className="text-sm mb-4">micorreo@gmail.com</div>
          <div className="text-sm">+959883271929</div>
          <div className="flex gap-4 mt-4">
            <a href="" className="hover:scale-110 text-xl">
              <BsFacebook />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsInstagram />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsTwitter />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsPinterest />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
