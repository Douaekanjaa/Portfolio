"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const { data, error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Email sent successfully!");
    event.currentTarget.reset();
  };

  return (
    <motion.section
      id="contact"
      className="mb-20 px-5 sm:mb-28 m-auto justify-center w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Toaster />
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-100 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:kanjaadouae1@gmail.com">
          kanjaadouae1@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col dark:text-black" onSubmit={handleSubmit}>
        <input
          className="h-14 px-4 rounded-lg borderBlack bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-48 my-3 rounded-lg borderBlack p-4 bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
