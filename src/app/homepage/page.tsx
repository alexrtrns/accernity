import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Scale, Clock, Video, MessageSquare } from 'lucide-react';
import { SearchButton } from "@/components/ui/search-btn";
export default function Home() {



  return (
    <div className="container mx-auto px-4 py-12">
      
      <section className="text-center mb-16">
        <h1 className="text-3xl  tracking-tight lg:text-5xl mb-6">
        Find Your Next Lawyer
        </h1>
        <SearchButton />
      </section>
    </div>
  );
}