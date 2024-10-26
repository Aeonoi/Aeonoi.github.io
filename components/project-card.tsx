"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  link: string;
  description: string;
  image: string;
  title: string;
}
const ProjectCard: React.FC<Props> = ({
  link,
  description,
  image,
  title,
}: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Small delay to allow hover-out before hiding the large image
  const handleMouseLeave = () => {
    setTimeout(() => setIsHovered(false), 200); // Adjust delay as needed
  };

  return (
    // <div className="min-h-full max-w-3xl mx-auto p-3 bg-white shadow-md rounded-lg text-black">
    <div className="min-h-full max-w-3xl mx-auto p-3 text-black">
      <Link
        href={link}
        className="uppercase tracking-wide text-2xl text-catppuccin_mauve block mt-1 leading-tight font-bold hover:underline m-3"
      >
        {title}
      </Link>
      <div className="flex flex-col">
        <div className="flex w-full">
          <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="aspect-auto object-cover max-h-full rounded-lg block"
              src={image}
              alt={title}
            />
          </motion.div>
        </div>
        <div className="p-8">
          <p className="mt-2 text-sm text-catppuccin_teal font-semibold">
            {description}
          </p>
        </div>
      </div>
      {isHovered && (
        <motion.div
          className="fixed inset-0 z-100 flex justify-center items-center bg-black bg-opacity-70 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.img
            src={image}
            alt={title}
            className="rounded-lg max-w-2xl max-h-1/2 object-cover pointer-events-none"
            initial={{ scale: 0 }}
            animate={{ scale: 1.5 }}
            exit={{ scale: 0 }}
          />
        </motion.div>
      )}
    </div>
  );
};
export default ProjectCard;
