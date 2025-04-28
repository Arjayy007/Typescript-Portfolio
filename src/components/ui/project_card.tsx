interface ProjectCardProps {
    title: string;
    role: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    link?: string; // Optional link prop
  }
  
  export default function ProjectCard({ title, role, description, imageUrl, imageAlt, link }: ProjectCardProps) {
    const Wrapper = link ? 'a' : 'div'; // Use <a> if link is provided, otherwise <div>
  
    return (
      <Wrapper
        href={link}
        target={link ? "_blank" : undefined} // Open in a new tab if link is provided
        rel={link ? "noopener noreferrer" : undefined} // Security for external links
        className="overflow-hidden rounded-lg bg-white transition-all hover:shadow-black hover:shadow-md hover:scale-105"
      >
        <div className="relative h-80 w-full">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={imageAlt}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-5">
          <h2 className="mb-1 text-2xl font-bold text-gray-900">{title}</h2>
          <h3 className="mb-3 text-lg font-medium text-gray-700">{role}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </Wrapper>
    );
  }