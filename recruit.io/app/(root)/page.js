"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import InterviewCard from "@/components/InterviewCard";
import { dummyInterviews } from "@/constants";


export default function Home() {
  return (
    <>
      <section className="card-cta flex flex-row gap-10" >
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">Practice real interview questions & get instant feedback.</p>
          <Button className='btn-primary max-sm:w-full' >
            <Link href={'/interview'}>Start an Interview</Link>
          </Button>
        </div>
        <div>
          <Image src={'/robot.png'} alt="robot" height={400} width={400} className="max-sm:hidden" />
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {
            dummyInterviews.map((interview)=>(
              <InterviewCard key={interview.id} {...interview} />
            ))
          }
        </div>
        <p>You haven't taken any interviews.</p>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interviews</h2>
        <div className="interviews-section">
          {
            dummyInterviews.map((interview)=>(
              <InterviewCard key={interview.id} {...interview} />
            ))
          }
        </div>
        You haven't taken any interviews.
      </section>
    </>
  );
}
