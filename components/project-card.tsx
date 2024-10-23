import Link from "next/link";

interface Props {
  children?: React.ReactNode;
  link: string;
  description: string;
  image: string;
  title: string;
}
const ProjectCard: React.FC<Props> = ({
  children,
  link,
  description,
  image,
  title,
}: Props) => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg text-black">
      <div className="flex flex-col">
        <div className="flex w-full">
          <img
            className="aspect-auto object-cover rounded-t-lg block"
            src={image}
            alt={title}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
          <Link
            href={link}
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            <p className="flex">View Source Code</p>
          </Link>
          <p className="mt-2 text-slate-500">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
