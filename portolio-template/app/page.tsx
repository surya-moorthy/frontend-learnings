import Container from "@/components/Container";
import Projects from "@/components/Projects";

export default function Home() {
  return (
     <div className="flex justify-start items-start min-h-screen">
      <Container className="min-h-[200vh] p-4 md:p-10"> 
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight dark:text-neutral-100 text-neutral-800"> 
              Hello World!
            </h1>
            <p className="dark:text-neutral-400 text-neutral-600 text-sm md:text-md pt-4 max-w-lg">
                I am a developer , passionate on building products and systems that solves real world problems 
                either via design or structural code based.
            </p>
            <Projects/>
      </Container>
     </div>
  );
}
