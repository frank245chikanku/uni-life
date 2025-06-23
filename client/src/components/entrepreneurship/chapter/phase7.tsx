import React from 'react';

const Phase7: React.FC = () => {
  return (
    <div
    className="py-10 px-8 max-w-4xl mx-auto rounded-2xl"
    style={{
      backgroundColor: "#ffffff",
      color: "#1f2937",
      boxShadow: "0 10px 25px rgba(210, 84, 142, 0.2)",
    }}    
  >
    <h2 className="font-bold text-3xl mb-6 text-center text-[#050505]">Fail Fast, Fail Smart</h2>
      <p className="text-lg leading-relaxed">
        This approach suggests that failure, rather than being avoided, should be embraced as a critical part of the learning process. The idea is to experiment, identify what doesn’t work, and pivot or adapt 
        without wasting excessive time or resources. For instance, in the world of startups, launching a minimum viable product (MVP) to test assumptions allows entrepreneurs to gather feedback, recognize mistakes, 
        and refine their approach before committing fully.
        <br />
        <br />
        Failing smart means analyzing what went wrong, extracting lessons, and applying those insights to future endeavors. It’s about taking calculated risks, ensuring that setbacks are manageable, and leveraging them 
        for improvement. By adopting this mindset, individuals cultivate resilience, adaptability, and the ability to innovate in the face of challenges, setting a foundation for long-term success.
      </p>
    </div>
  );
};

export default Phase7;
