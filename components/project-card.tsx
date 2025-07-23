"use client";
import Link from "next/link";
import Image from "next/image";
import { Card, CardDescription, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

interface Props {
  link: string;
  description: string;
  image: string;
  title: string;
  stack: string[];
}
const ProjectCard: React.FC<Props> = ({
  link,
  description,
  image,
  title,
  stack,
}: Props) => {
  return (
    <Card className="overflow-hidden group bg-background border border-[#778f52]">
      <div className="relative overflow-hidden max-h-[25rem]">
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }} // optional
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent>
        <div className="m-3 grid grid-rows-3 text-[#d3c6aa]">
          {/* Title */}
          <div className="flex font-bold text-2xl justify-between w-full m-2 mt-4">
            <div>{title}</div>
            <Link href={link}>
              <ExternalLink />
            </Link>
          </div>
          {/* Description */}
          <div className="text-xl">{description}</div>
          <div className="flex flex-row items-center gap-3">
            {stack.map((tech) => (
              <div key={tech} className="flex flex-wrap gap-2">
                <Badge className="text-[#d3c6aa]">{tech}</Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default ProjectCard;
