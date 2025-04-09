"use client"
import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Service from "@/components/Service";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
   const [showModal, setShowModal] = useState(false);
  return (
    <>
    <Header openModal={() => setShowModal(true)}/>
    <HeroSection/>
    <Service/>
    <Gallery/>
    <FormModal show={showModal} closeModal={() => setShowModal(false)}/>
    <Footer/>
    </>
  );
}
