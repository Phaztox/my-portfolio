// components/About.tsx - SLIDE FROM BOTTOM
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-container px-4 sm:px-8 relative">
      <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>
        
        <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-200/30 dark:border-slate-600/30 shadow-2xl">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-100">
            I'm Antonin Gabet, an informatics student driven by a profound passion for Data & Artificial Intelligence. 
            My curiosity thrives on exploring optimization, statistics, logic, and new technologies. Beyond my studies, 
            I immerse myself in music, gaming, and Asian culture—each contributing unique facets to my perspective. 
            Music has not only refined my patience, precision, and creativity but also sharpened my understanding of emotions, 
            enhancing my ability to connect with people and ensure messages are delivered and received effectively. 
            Gaming has instilled in me perseverance, strategic planning, and a deep appreciation for logical thinking, 
            while also boosting my English proficiency and teamwork skills. My fascination with Asian culture has 
            broadened my horizons, fostering an open-mindedness that helps me appreciate diverse global viewpoints.
            <br />
            <br />
            This blend of experiences has shaped me into a highly conscientious individual who pays meticulous attention 
            to detail, always striving to do things right. My ultimate goal is to leverage AI and data science to empower 
            human understanding and practice across various domains—whether it's unraveling human behavior, exploring 
            natural phenomena, or delving into fields like biology, medicine, and economics. Even in niche areas like 
            video games or music, I'm motivated by the potential to provide insights that help people better 
            comprehend and excel in what they do, ultimately creating meaningful and impactful solutions.
          </p>
        </div>
      </div>
    </section>
  );
}