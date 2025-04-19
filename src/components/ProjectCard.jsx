import { ExternalLink } from 'react-feather'; 

function ProjectCard({ title, description, image, link, tags }) {
    return (
      <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl 
                      transition-all duration-300 hover:scale-[1.02]">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 
                         rounded-full text-sm transition-transform hover:scale-105"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline group"
          >
            View Project <ExternalLink className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    );
}

export default ProjectCard;