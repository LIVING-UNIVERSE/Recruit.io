import React from 'react'
import { getTechLogos } from '@/lib/utils'
import Image from 'next/image';

const DisplayTechStack = async ({techstack}) => {
    const techIcons = await getTechLogos({techstack:techstack});
  return (
    <div className='flex flex-row'>
        {techIcons.slice(0,3).map(({tech,url},index)=>(
            <div key={tech} className={cn("relative group bg-dark-300 rounded-full p-2 flex-center", index >=1 && '-ml-3' </div>)}>
                <span className='tech-tooltip'>{tech}</span>
                <Image src={url} alt='techlogo' width={100} height={100} className='size-5' />
            </div>
        ))}
    </div>
  )
}

export default DisplayTechStack