import React from "react";

const Phase3: React.FC = () => {
  return (
    <div
      className="py-8 px-8 max-w-4xl mx-auto rounded-lg shadow-lg"
      style={{ backgroundColor: "#d2548e", color: "white" }}
    >
      <h2 className="font-bold text-3xl mb-6 text-center">
        Phase 3: Addressing Violations
      </h2>
      <p className="text-lg leading-relaxed mb-4">
        Academic dishonesty has been a persistent part of the higher education
        landscape. Understanding the potential causes and complexities of
        academic dishonesty is critical in building an effective academic
        culture and system to try to counter this phenomenon.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Causal factors for academic dishonesty may be separated into:
        <ol className="list-decimal list-inside mt-2">
          <li>External and situational ones</li>
          <li>Internal, developmental ones</li>
        </ol>
        Values may be socially created between people and embedded in a culture.
        Some values are situationally based and relativistic, while others may
        be internal to individuals and a factor of their developmental stages.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        External factors related to competition affect academic dishonesty.
        These may include pressures to achieve good grades, test anxiety, the
        classroom environment, the relative risk of detection, institutional
        policies on academic honesty, and performance and achievement issues.
        Students read their environments and decide how to proceed. In a
        cost-benefit assessment, if they see a situation as low-risk, they may
        engage in academic dishonesty. A majority will choose not to report
        their peers, even if it is an institutional requirement. A so-called
        thick trust culture will also result in low levels of reporting friends
        because loyalty trumps an honor policy. A contextual approach to
        e-learning uses organizational theory to situate the student cheating
        problem in the context of the educational institution as a complex
        organization affected by people, time, and social forces.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Some internal risk factors relate to study skills, such as poor time
        management, lack of preparation, lack of skills to find resources,
        unwillingness to follow recommended good practices, inability to seek
        appropriate help, and low intrinsic interest in the subject. If students
        do not feel that they can generate their own knowledge, they might
        believe it would be redundant to cite knowledge sources or to promise to
        refrain from accepting assistance on papers and examinations.
      </p>
      <p className="text-lg leading-relaxed">
        When the environment is populated by individuals at the same
        developmental stage, it can lead to the construction and reproduction of
        certain social realities in a student culture that defines cheating as
        more acceptable or less serious misconduct than it was considered
        previously.
      </p>
    </div>
  );
};

export default Phase3;
