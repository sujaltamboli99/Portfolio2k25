import React from 'react'

const ProjectCard = ({ image, tags, title, description, liveLink, codeLink , height }) => {
  return (
    <div className={`bg-[#282C33] border-1 border-[#ABB2BF]  overflow-hidden w-[300px] text-white shadow-lg ${height}`} >
      
      {/* Project Image */}
      <div className="w-full h-40 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Tech Tags */}
      <div className="border-t border-[#ABB2BF] text-sm px-4 py-2 text-[#ABB2BF] font-fira">
        {tags.join(' ')}
      </div>

      {/* Title + Description */}
      <div className="px-4 py-3 border-t border-[#ABB2BF]">
        <h3 className="font-fira text-lg font-semibold">{title}</h3>
        <p className="text-[#ABB2BF] text-sm mt-1">{description}</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between px-4 py-3">
        <a
          href={liveLink}
          target="_blank"
          rel="noreferrer"
          className="border border-[#C778DD] text-[#C778DD] px-3 py-1 text-sm font-fira hover:bg-[#C778DD] hover:text-white transition-all rounded"
        >
          Live ↔
        </a>
        <a
          href={codeLink}
          target="_blank"
          rel="noreferrer"
          className="border border-[#ABB2BF] text-[#ABB2BF] px-3 py-1 text-sm font-fira hover:bg-[#ABB2BF] hover:text-[#282C33] transition-all rounded"
        >
          Code ➜
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
