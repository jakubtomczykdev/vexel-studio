
import { projects } from "@/lib/projectsData";
import { notFound } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import { ArrowUpRight, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import kowalskiImage from '../../assets/projects/kowalski_preview.png'
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/app/components/AnimatedBackground";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black/95 overflow-x-hidden relative text-white">
      <AnimatedBackground />
      
      <header className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Link href="/" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Wszystkie projekty
        </Link>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="text-emerald-400 mb-2">{project.category}</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">{project.title}</h1>
          </div>
          <div className="text-left md:text-right mt-4 md:mt-0 flex-shrink-0">
            <p className="text-slate-300 mb-2">Rok</p>
            <p className="text-3xl font-light">{project.year}</p>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="p-8 sm:p-12 rounded-3xl border border-emerald-500/10 bg-gradient-to-b m-2 from-emerald-500/5 to-transparent backdrop-blur-sm mb-16">
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed">{project.longDescription}</p>
          <a href={project.href} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="mt-8 bg-emerald-500 cursor-pointer hover:bg-emerald-600 text-black rounded-full px-8 py-6 text-lg transition-all hover:scale-105">
              Zobacz wersję live <ArrowUpRight className="w-5 h-5 ml-2"/>
            </Button>
          </a>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 tracking-tight">Kluczowe korzyści</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {project.benefits.map((benefit, i) => (
              <div key={i} className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 backdrop-blur-sm">
                <CheckCircle className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-slate-300 font-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 tracking-tight">Podgląd strony</h2>
          <div className="p-4 rounded-3xl border border-emerald-500/20 bg-black/50">
             <div className=" bg-black/30 rounded-2xl flex items-center justify-cente">
                <Image src={project.fullPageImage} width={1500} height={1000} className="rounded-xl" alt={`Zdjecie strony ${project.title}`}/>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
