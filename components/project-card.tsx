import Link from "next/link";

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
  return (
    <div className="min-h-full max-w-full mx-auto p-6 bg-white shadow-md rounded-lg text-black">
      <div className="flex flex-col">
        <div className="flex w-full">
          <img
            className="aspect-auto object-cover rounded-t-lg block"
            src={image}
            alt={title}
          />
        </div>
        <div className="p-8">
          <Link
            href={link}
            className="uppercase tracking-wide text-lg text-indigo-500 block mt-1 leading-tight font-medium hover:underline"
          >
            {title}
          </Link>
          <p className="mt-2 text-sm text-slate-500">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
