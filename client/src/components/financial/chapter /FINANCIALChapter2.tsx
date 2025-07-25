import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const chapters = [
  {
    title: "Financial Literacy",
    content: `Financial literacy is the ability to understand and make use of a variety of financial skills, including personal financial management, budgeting, and investing. It also means comprehending certain financial principles and concepts, such as the time value of money, compound interest, managing debt, and financial planning.

Financial literacy is the ability to understand and make use of a variety of financial skills, including personal financial management, budgeting, and investing. It also means comprehending certain financial principles and concepts, such as the time value of money, compound interest, managing debt, and financial planning.

Educating yourself on these topics also involves learning how money works, setting and achieving financial goals, becoming aware of unethical/discriminatory financial practices, and managing financial challenges that life throws your way.`,
  },
  {
    title: "Tracking Your Expenses",
    content: `Financial stability and prosperity—a lesson that is particularly valuable for students at the start of their financial journey. The text teaches that wealth is not determined by how much you earn but by how much you keep, and keeping wealth begins with knowing exactly where your money is going. Start by diligently recording every single expense, from the smallest purchase to the largest, as this creates a clear picture of your spending habits. This awareness allows you to separate your needs from your wants and ensure that your desires do not overshadow your responsibilities.

For instance, if you’re spending excessively on non-essentials, you may find it difficult to save for critical goals such as tuition, books, or even starting a savings fund for the future. By consistently tracking expenses, you develop the habit of intentionality with your finances, learning to direct your money toward investments that create value rather than fleeting pleasures.

As the wise men of Babylon remind us, "That which we call necessary expenses will always grow to equal our income unless we protest to the contrary." Therefore, live within your means, challenge the assumption of "necessities," and always ensure that you allocate a portion of your income toward savings and growth. This simple but powerful habit sets the foundation for financial success, giving you control over your resources and the confidence to build a secure and abundant future.`,
  },
  {
    title: "Creating a Financial Safety Net",
    content: `Creating a financial safety net, as inspired by the principles in The Richest Man in Babylon, is an essential step toward securing your future and protecting yourself from unexpected challenges.

For students, this concept is particularly important because life is unpredictable, and preparing for uncertainties ensures you remain stable during tough times. A financial safety net begins with saving a portion of all your income, no matter how small. The Babylonians advised setting aside at least 10% of your earnings as the "first step toward wealth," and this principle remains timeless. Think of this as your buffer—a reserve that shields you from emergencies, such as unexpected medical expenses, tuition adjustments, or unforeseen living costs.

Building this reserve requires discipline and patience; it means avoiding unnecessary spending and prioritizing your long-term security over short-term desires. Moreover, as you grow your savings, consider where you store it. Ensure your money is kept in a secure, easily accessible place where it can serve its purpose when needed. By consistently saving and safeguarding your financial resources, you create a safety net that not only provides peace of mind but also lays the groundwork for future opportunities.

In doing so, you learn to live wisely and responsibly, embodying the ancient wisdom of the Babylonians, who taught that "good luck waits to bless those who are prepared." Start small, stay consistent, and let your financial safety net be your first shield in the journey toward financial independence.`,
  },
  {
    title: "Assessing Your Financial Values",
    content: `Assessing your financial values is a crucial step toward understanding how you approach money and aligning your spending and saving habits with what truly matters to you. Your financial values are the principles and priorities that guide your decisions about earning, spending, saving, and giving.

For students, this begins with reflecting on what you believe money represents—whether it’s security, freedom, opportunity, or a tool for helping others. Ask yourself: What do I want my money to achieve? Is it to fund my education, support my family, build a safety net, or invest in future opportunities? The Babylonians remind us that wealth grows when it serves a meaningful purpose and is managed wisely.

When you assess your financial values, you gain clarity about where your priorities lie, making it easier to make disciplined choices. For instance, if you value education and growth, you may allocate more resources to books and courses rather than fleeting luxuries. Similarly, if generosity is important to you, you might include a portion of your budget for helping others, knowing that giving strengthens communities and builds goodwill.

Aligning your financial habits with your values prevents unnecessary spending on things that do not truly matter to you and helps you stay focused on achieving your goals. By regularly reassessing your financial values, you ensure that your money is not just spent but invested in creating a life of purpose, stability, and fulfillment, embodying the timeless wisdom of the Babylonians who believed that wealth flows toward those who respect its power and use it wisely.`,
  },
  {
    title: "The Benefits of Minimalism",
    content: `The benefits of minimalism extend far beyond simply owning less; they offer a pathway to clarity, focus, and financial freedom. Minimalism encourages you to prioritize what truly adds value to your life and eliminate the distractions of unnecessary possessions and expenses. For students, adopting this philosophy means understanding that fulfillment doesn’t come from accumulating things but from pursuing meaningful goals and experiences.

By choosing minimalism, you learn to spend intentionally, directing your money and energy toward investments that enrich your life—like education, personal development, and building a financial safety net. This approach not only reduces waste but also cultivates gratitude for what you already have, freeing you from the constant pressure to keep up with trends or satisfy fleeting desires.

The Babylonians taught that wealth grows not through excessive consumption but through disciplined saving and careful management, principles that align perfectly with the minimalist mindset. Living with less also reduces stress, as you avoid the financial burdens of debt and the emotional toll of clutter, allowing you to focus on what matters most.

Ultimately, minimalism empowers you to achieve greater freedom, enabling you to live with intention and purpose, unburdened by the distractions of excess and guided by the wisdom of simplicity.`,
  },
];

const FinancialLiteracyReader: React.FC = () => {
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


      <div className="no-print w-full bg-gray-300 rounded-full h-3 mb-4 md:mb-6">
        <div
          className="bg-pink-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>


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


      <div className="no-print mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <button
          onClick={prevChapter}
          disabled={current === 0}
          className={`w-full md:w-auto ${current === 0
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





export default FinancialLiteracyReader;
