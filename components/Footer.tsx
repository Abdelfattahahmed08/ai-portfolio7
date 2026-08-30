import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="text-center md:text-left">
          <Link href="#hero" className="text-2xl font-bold tracking-tighter inline-block mb-2">
            <span className="text-gradient">AA</span>
          </Link>
          <p className="text-sm text-gray-400 max-w-sm">
            Machine Learning Engineer specializing in AI, NLP, Computer Vision, and Intelligent Automation.
          </p>
        </div>
        
        <div className="text-center md:text-right text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Abdelfattah Ahmed.</p>
          <p className="mt-1">
            Built with <span className="text-white font-medium">Next.js</span>, <span className="text-white font-medium">TypeScript</span>, <span className="text-white font-medium">Tailwind CSS</span> & <span className="text-primary font-medium">AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
