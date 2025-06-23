import React from "react";

const Phase5: React.FC = () => {
  return (
    <div
      className="py-10 px-8 max-w-4xl mx-auto rounded-2xl"
      style={{
        backgroundColor: "#ffffff",
        color: "#1f2937",
        boxShadow: "0 10px 25px rgba(210, 84, 142, 0.2)",
      }}
    >
      <h2 className="font-bold text-3xl mb-6 text-center text-[#050505]">
        Phase 5: Challenge Bias in Yourself
      </h2>
      <p className="text-lg leading-relaxed">
        As troubling as it is to admit, the way we perceive people and treat them is
        significantly correlated with the stereotypes we hold to be true, even in spite of
        our best intentions. We may consider ourselves to already be inclusive of
        others. Unfortunately, we may not be aware that some of the stereotypes we
        have learned have in fact sunk in, whether we wanted them to, or not. The
        good news is that it is possible to challenge those automatic, unconscious,
        reductive stereotypes so we can begin to treat people as the complex
        individuals that they are.
      </p>

      <div className="mt-4 space-y-4">
        <h3 className="font-bold text-xl">Steps to Challenge Bias:</h3>
        <ul className="list-decimal pl-6 space-y-2">
          <li>We must be willing to accept that we do, in fact, have biases, and to make ourselves aware of them.</li>
          <li>We must be determined not only to unearth our own stereotypes but also to challenge them.</li>
          <li>
            We need to learn how to exchange those automatic biases for different,
            more inclusive, notions and challenge those prejudices before we act on them.
          </li>
        </ul>

        <h3 className="font-bold text-xl">Strategies for Challenging Biases and Behaviors:</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Know your own biases!</li>
          <li>Priming – identify and utilize counter-stereotypic examples.</li>
          <li>Increase exposure and interaction with people from groups you have a bias against.</li>
          <li>Build relationships across differences.</li>
          <li>Ask questions! Avoid making assumptions about people.</li>
          <li>
            Acknowledge that differences exist and embrace those differences 
            (vs. colorblindness or identity-blindness).
          </li>
          <li>
            In every space you are in, ask yourself:
            <ul className="list-inside list-disc mt-2 space-y-1">
              <li>Who is in this room?</li>
              <li>Whose voice is being heard?</li>
              <li>Whose voice(s) are missing from the conversation? And WHY?</li>
            </ul>
          </li>
          <li>
            Get involved in your community:
            <ul className="list-inside list-disc mt-2 space-y-1">
              <li>Join a multicultural organization.</li>
              <li>Attend a local meeting and see how you can be of service.</li>
            </ul>
          </li>
          <li>Be willing to make mistakes and show up again anyway.</li>
        </ul>
      </div>
    </div>
  );
};

export default Phase5;
