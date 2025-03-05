import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Scale, Clock, Video, MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SearchButton } from "@/components/ui/search-btn";
import { GridBeam } from "@/components/ui/gridBeam";

export default function Home() {

  return (
    <div className="container mx-auto lg:">
      
      <section className="text-center mb-8 relative flex h-full flex-col gap overflow-hidden rounded-lg border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] dark:bg-grid-white/[0.05] bg-grid-black/[0.07] md: p-6 ">
      <GridBeam className="sm:pl-16 pt-28 pl-4 flex  justify-center">
      <div className="grid gap-2">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
        Connect with your Next Lawyer
        </h1>
        </div>
      </GridBeam>
        <div>
        <SearchButton />
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          {
            icon: Scale,
            title: 'Expert Lawyers',
            description:
              'Connect with qualified legal professionals across various specializations',
          },
          {
            icon: Clock,
            title: '24/7 Availability',
            description:
              'Get legal assistance any time with our instant consultation feature',
          },
          {
            icon: Video,
            title: 'Video Consultations',
            description:
              'Face-to-face consultations from the comfort of your home',
          },
          {
            icon: MessageSquare,
            title: 'Secure Chat',
            description:
              'Private and secure communication with your legal advisor',
          },
        ].map((feature, index) => (
          <Card key={index} className="p-6">
            <feature.icon className="h-12 w-12 mb-4 text-primary" />
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: '1',
              title: 'Choose Your Lawyer',
              description:
                'Browse through our network of verified lawyers or get instantly matched',
            },
            {
              step: '2',
              title: 'Book Consultation',
              description:
                'Schedule a meeting or start an instant consultation',
            },
            {
              step: '3',
              title: 'Get Legal Advice',
              description:
                'Connect via chat, audio, or video call for your consultation',
            },
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {item.step}
              </div>
              <Card className="pt-8 p-6">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}