import uni from "../../assets/pr-graphic-11.png";

const AboutUs = () => {
  return (
    <div className="p-6 w-full min-h-screen justify-center flex flex-col bg-[#bcd8ec] text-black py-20">
      <p className="text-center font-bold text-4xl mb-8">About Uni</p>
      <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-0 items-center justify-center">
        <div className="h-full">
          <img
            src={uni}
            alt={uni}
            className="w-full md:object-cover object-contain md:h-full h-auto"
          />
        </div>
        <div>
          <p className="text-start text-lg">
            Uni Life Guide is an innovative application designed to facilitate
            ethical decision-making within the unique landscape of university
            life. This tool provides a comprehensive framework comprising
            guidelines, decision trees, and case studies with great attention
            crafted to address the ethical dilemmas frequently encountered by
            students. By offering practical insights and solutions, Uni Life
            Guide empowers students to navigate complex moral challenges with
            clarity and confidence, fostering a culture of integrity and ethical
            responsibility within academic communities.
          </p>
          <p className="text-start text-lg mt-8">
            The Aim is to equip students with the tools and principles needed to
            navigate complex ethical issues such as Academic integrity, Peer
            pressure, Social responsibility, Financial strain, Career
            uncertainty, Discrimination & bias, entrepreneurship uncertainty
            Adjustment to adjusctment.
          </p>
          <p className="text-start text-lg mt-8">
            Uni Life Guide offers a robust framework for ethical
            decision-making, providing students with a structured approach to
            evaluating and resolving moral dilemmas. This framework integrates
            ethical principles, critical thinking skills, and real-world
            considerations to guide students in making informed and principled
            decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
