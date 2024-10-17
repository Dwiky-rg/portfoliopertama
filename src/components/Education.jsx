import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Education() {
  const education = [
    {
      id: "01",
      company: "Universitas Dinamika Bangsa",
      position: "College",
      duration: "2021 - Present",
    },
    {
      id: "02",
      company: "SMAS Jambi IX Lurah",
      position: "Senior High School",
      duration: "2017 - 2020",
    },
    {
      id: "03",
      company: "SMPS YPMM",
      position: "Junior High School",
      duration: "2013 - 2016",
    },
  ];

  return (
    <section className="section" id="education">
      <div className="container mx-auto">
        {education.map((item, index) => (
          <EducationCard
            key={item.company}
            index={index}
            company={item.company}
            position={item.position}
            duration={item.duration}
            isLast={education.length === index + 1}
          />
        ))}
      </div>
    </section>
  );
}

const EducationCard = ({ company, position, duration, index, isLast }) => {
  return (
    <div className="relative w-full">
      {/* Garis dashed di sebelah kiri (atas dan bawah) */}
      <div
        className={`hidden md:block h-[140px] border-b w-full
        ${index > 0 ? "border-l" : "ml-auto w-40"}
        ${isLast ? "w-40 mr-auto" : ""} border-blue-500 border-dashed`}
      />

      {/* Garis dashed di sebelah kanan (bawah) jika bukan elemen terakhir */}
      {!isLast && (
        <div className="hidden md:block h-[140px] border-r border-b border-blue-500 border-dashed w-full" />
      )}

      {/* Konten card */}
      <div className="bg-slate-600 rounded-lg border-blue-800/40 p-4 w-full max-w-[90%] mx-auto ml-14 md:absolute top-[98px] mb-6 md:mb-0">
        <div className="flex items-center justify-between flex-1">
          <div>
            <p className="text-white text-[13.5px] md:text-base font-medium leading-4 md:leading-5">
              {company}
            </p>
            <span className="text-blue-400 text-xs">{position}</span>
          </div>
          <div className="text-sky-200 text-[11px] md:text-xs font-medium bg-blue-950 rounded border border-blue-700/50 border-dashed justify-center items-center px-4 py-2">
            {duration}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
