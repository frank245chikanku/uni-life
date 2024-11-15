import React from "react";

const Introduction: React.FC = () => {
  return (
    <div
      className="py-8 px-8 max-w-4xl mx-auto rounded-lg shadow-lg"
      style={{ backgroundColor: "#d2548e", color: "white" }}
    >
      <h2 className="font-bold text-3xl mb-6 text-center">Introduction to Financial Strain</h2>
      <p className="text-lg leading-relaxed mb-4">
        Financial strain refers to difficulty affording food, clothing, housing, major items such as furniture/household equipment, leisure activities, and bills. It represents an undesirable mismatch between income and the combination of expenses and accumulated debt. In this way, financial strain does not represent objective measures of socioeconomic status (SES), but rather income inadequacy relative to expenses. 
      </p>

      <p className="text-lg leading-relaxed mb-4">
        Importantly, financial strain is related to, but distinct from, income and other traditional SES indicators. As evidence of its distinction, there is considerable variation in the severity of financial strain experienced by people of a similar income strata. Additionally, unlike traditional, objective measures of SES, financial strain is applicable to individuals of all SES strata. Heightened financial strain can negatively impact self-esteem and personal control. 
      </p>

      <p className="text-lg leading-relaxed mb-4">
        Theoretical models of stress posit that the chronic stress that develops as a byproduct of financial strain can lead to poorer health outcomes, including cardiovascular disease, elevated blood pressure, overall poor physical health, and depression.
      </p>
    </div>
  );
};

export default Introduction;
