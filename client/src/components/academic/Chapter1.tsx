import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const chapters = [
  {
    title: "Phase 1: Understanding Academic Integrity",
    content: `Academic integrity is an interdisciplinary concept that provides the foundation for every aspect and all levels of education. The term evokes strong emotions in teachers, researchers, and students—not least because it is usually associated with negative behaviors.

When considering academic integrity, the discussion tends to revolve around cheating, plagiarism, dishonesty, fraud, and other academic malpractice and how best to prevent these behaviors. A more productive approach entails a focus on promoting the positive values of honesty, trust, fairness, respect, responsibility, and courage as the intrinsically motivated drivers for ethical academic practice.

Academic integrity is much more than “a student issue” and requires commitment from all stakeholders in the academic community, including undergraduate and postgraduate students, teachers, researchers, senior managers, policymakers, support staff, and administrators.`,
  },
  {
    title: "Phase 2: Implementing Best Practices",
    content: `Understanding how to avoid plagiarism is not just a student problem; staff also need support and education to teach students. Some lecturers may not have experienced the explicit teaching of acknowledgment skills when they were students, some may not have learnt how to teach such academic skills in their professional education, and some, having become acculturated into academic culture and their discipline, may not be conscious of all the skills that students need to master in order to successfully construct an academic text.

Strategies to redress this could include face-to-face and online workshops. Registration in these could be tied to professional development to ensure that staff take advantage of such workshops. Also useful would be models and teaching examples which can be adapted, and guides which are available when staff need them. Presenting information in an appealing way is strategic. At Swinburne University, workshops to explain the university’s approach to dealing with plagiarism were knowingly titled “Quick Fix” workshops.

From a learning perspective, the development of citation skills takes time and practice and requires explanation, guidance, and modelling. Formative assessment can be a means for students to learn how to avoid plagiarism, attribute sources, and use quotations to provide evidence.

While explanations about the problem of plagiarism and models of good practice can be accessed on websites and through class activities, without the impetus of assessment, students would be unlikely to use these sources. In fact, for most people, the need to acknowledge sources only happens when they make texts for assessment because this is when they have an audience.

Students are alert to assessment, and feedback from assessment is a critical motivator for their engagement with academic integrity practices. This external pressure encourages them to understand the importance of acknowledging sources and adhering to ethical standards, as they recognize that doing so not only impacts their grades but also contributes to their growth as responsible learners and professionals.`,
  },
  {
    title: "Phase 3: Addressing Violations",
    content: `Academic dishonesty has been a persistent part of the higher education landscape. Understanding the potential causes and complexities of academic dishonesty is critical in building an effective academic culture and system to try to counter this phenomenon.

Causal factors for academic dishonesty may be separated into:
1. External and situational ones
2. Internal, developmental ones

Values may be socially created between people and embedded in a culture. Some values are situationally based and relativistic, while others may be internal to individuals and a factor of their developmental stages.

External factors related to competition affect academic dishonesty. These may include pressures to achieve good grades, test anxiety, the classroom environment, the relative risk of detection, institutional policies on academic honesty, and performance and achievement issues. Students read their environments and decide how to proceed. In a cost-benefit assessment, if they see a situation as low-risk, they may engage in academic dishonesty. A majority will choose not to report their peers, even if it is an institutional requirement.

Some internal risk factors relate to study skills, such as poor time management, lack of preparation, lack of skills to find resources, unwillingness to follow recommended good practices, inability to seek appropriate help, and low intrinsic interest in the subject. If students do not feel that they can generate their own knowledge, they might believe it would be redundant to cite knowledge sources or to promise to refrain from accepting assistance on papers and examinations.`,
  },
  {
    title: "Phase 4: Promoting a Culture of Integrity",
    content: `Much has been written in recent years about honesty and integrity in the classroom. Academic integrity is a core value in our schools—for teaching, learning, and scholarly activities. However, the education literature contains a myriad of reports suggesting that cheating and plagiarizing by students have increased in recent years. The ready availability of technology has contributed to student behaviors ranging from cutting and pasting material from the Internet to sharing online quizzes and texting answers to classmates.

Many important steps have been taken within the academy to achieve a culture of academic integrity. Starting on the first day of professional and graduate programs, we must instill the principles of professionalism as an essential step in developing our culture of academic integrity. Assessing students in performance-based and problem-solving examinations rather than multiple-choice tests is another strategy to shift the focus to learning and away from an emphasis on getting high grades.

Technology will surround students during their education and when they become professionals. We should embrace technology and allow its use to the fullest and logical extent to enhance education, research, and service missions—while educating students about appropriate use and encouraging them to think critically and ethically about new challenges associated with advancing technologies such as cloud computing, mobile computing, and open content.`,
  },
  {
    title: "Phase 5: Continuous Improvement",
    content: `Providing education and professional development ensures that students, instructors, and staff are aware of policies and procedures related to cheating, plagiarism, and reporting academic misconduct—specifically who to contact, how, when, and what evidence to provide.

Multiple respondents stressed that compliance and commitment, including taking potential misconduct cases seriously, need to be demonstrated by administrators as well as instructors and students. Instructors should keep in mind that they are role models in their writing and teaching. Faculty demonstrate their commitment by changing assessments frequently and ensuring that they are interesting, meaningful, and relevant to students’ lives.

In line with our findings and interpretations, we encourage a balanced strategy for supporting academic integrity that considers the three key areas of concern we identified. We learned that policy and procedures, compliance and commitment, and resources are interdependent. Failing to achieve balance weakens overall academic integrity. For example, for faculty to comply, they depend on resources and support for their commitment, as well as on the guidelines provided, while administrators may tend to focus on the quasi-legal aspects of policy and procedures.`,
  },
];

const ChapterReader: React.FC = () => {
  const [current, setCurrent] = useState(0);


  const location = useLocation();
  useEffect(() => {
    const chapterMatch = location.pathname.match(/sub(\d+)/);
    if (chapterMatch) {
      const index = parseInt(chapterMatch[1]) - 1;
      if (!isNaN(index) && index >= 0 && index < chapters.length) {
        setCurrent(index);
      }
    }
  }, [location]);

  const progress = ((current + 1) / chapters.length) * 100;

  const nextChapter = () => current < chapters.length - 1 && setCurrent(current + 1);
  const prevChapter = () => current > 0 && setCurrent(current - 1);
  const restart = () => setCurrent(0);

  const printPDF = () => {
    window.print();
  };

  return (
    <div className="w-full h-screen py-6 px-4 md:px-6 flex flex-col">

      {/* Progress bar - hidden in print */}
      <div className="no-print w-full bg-gray-300 rounded-full h-3 mb-4 md:mb-6">
        <div
          className="bg-pink-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Chapter content to print */}
      <div id="print-area" className="flex-1 overflow-y-auto pb-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {chapters[current].title}
        </h2>
        {chapters[current].content.split("\n\n").map((para, i) => (
          <p
            key={i}
            className="mb-4 text-base md:text-lg leading-relaxed whitespace-pre-wrap"
          >
            {para}
          </p>
        ))}
      </div>

      {/* Navigation buttons - hidden in print */}
      <div className="no-print mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <button
          onClick={prevChapter}
          disabled={current === 0}
          className={`w-full md:w-auto ${
            current === 0
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-800 text-white hover:bg-gray-900"
          } font-semibold px-6 py-2 rounded-lg shadow transition`}
        >
          Previous
        </button>

        <button
          onClick={printPDF}
          className="w-full md:w-auto bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
        >
          📄 Print / Save
        </button>

        {current < chapters.length - 1 ? (
          <button
            onClick={nextChapter}
            className="w-full md:w-auto bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
          >
             Next Chapter
          </button>
        ) : (
          <div className="text-center w-full">
            <p className="text-green-600 font-semibold mb-4">🎉 You’ve completed all chapters!</p>
            <button
              onClick={restart}
              className="w-full md:w-auto bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
            >
              🔁 Restart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ChapterReader;
