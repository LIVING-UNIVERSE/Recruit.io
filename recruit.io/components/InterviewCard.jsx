import React from 'react'
import dayjs from 'dayjs';
import Image from 'next/image';
import { getRandomInterviewCover } from '@/lib/utils';
import { Button } from './ui/button';
import Link from 'next/link';
import DisplayTechStack from '@/components/DisplayTechStack';


function InterviewCard(
    {interviewId,
    userId,
    role,
    type,
    techstack,
    createdAt,
    }) {

    const feedback= null;
    const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
    const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY');

  return (
    <div className='card-border w-[360px] max-sm:w-full min-h-96'>
        <div className='card-interview w-full min-h-96 '>
            <div>
                <div className=' absolute top-0 right-0 px-4 py-2 w-fit bg-light-600 rounded-bl-lg'>
                    <p className='badge-text'>{normalizedType}</p>
                </div>
                <Image src={getRandomInterviewCover()} alt='cover'
                 width={90} height={90} className='rounded-full object-fit size-[90px]' 
                 />
                <h3 className='mt-5 capitalize' >{role} Interview</h3>
                <div className='flex flex-row gap-5 mt-3'>
                    <div className='flex flex-row gap-2'>
                        <Image src={'\calendar.svg'} width={22} height={22} />
                        <p>{formattedDate}</p>
                    </div> 

                    <div className='flex flex-row gap-2 items-center' >
                        <Image src={'\star.svg'} width={22} height={22} />
                        <p>{feedback?.score || '--- '} / 100</p>
                    </div>

                </div>
                <p className='line-clamp-2 mt-5'>{feedback && feedback.finalVerdict? feedback.finalVerdict:
                'You haven\'t given this interview'}</p>
            </div>
            <div className='flex flex-row justify-between mb-0 '>
                    <div className='flex flex-row justify-between'>
                        <DisplayTechStack techstack={techstack} />

                    </div>
                    <Button className='btn-primary'>
                        <Link href={feedback?`/interview/${interviewId}/feedback`
                                        :`/interview/${interviewId}`}>
                            {feedback ? 'View Interview':'Take Interview'}
                        </Link>
                    </Button>
            </div>
        </div>
    </div>
  )
}

export default InterviewCard