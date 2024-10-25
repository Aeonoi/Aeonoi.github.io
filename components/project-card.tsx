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
    // <div className="min-h-full max-w-3xl mx-auto p-3 bg-white shadow-md rounded-lg text-black">
    <div className="min-h-full max-w-3xl mx-auto p-3 text-black">
      <Link
        href={link}
        className="uppercase tracking-wide text-2xl text-indigo-500 block mt-1 leading-tight font-bold hover:underline m-3"
      >
        {title}
      </Link>
      <div className="flex flex-col">
        <div className="flex w-full">
          <img
            className="aspect-auto object-cover max-h-full rounded-t-lg block"
            src={image}
            alt={title}
          />
        </div>
        <div className="p-8">
          <p className="mt-2 text-sm text-catppuccin_teal font-semibold">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
