"use client"
import { motion } from 'framer-motion'
import React from 'react'

export const Ztemporal = () => {
  return (
    <div className="section" id="ztemporal">
      <motion.h1
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: -10, opacity: 1 }}
      >Ztemporal</motion.h1></div >
  )
}
