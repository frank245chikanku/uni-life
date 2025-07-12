import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const chapters = [
  {
    title: "Navigating Financial Failure",
    content: `Financial failure can indeed be a daunting experience, but it is also a powerful opportunity for personal growth and learning. As with any challenge, navigating financial setbacks requires resilience, a willingness to reflect on past mistakes, and a proactive approach to rebuilding your financial foundation.

The concept of failure is not one of defeat, but of a lesson to be learned. Financial difficulties often arise from a combination of factors, whether it's poor budgeting, unforeseen expenses, or even external economic changes. By examining the root causes of financial struggles, individuals can better understand their mistakes and make conscious efforts to avoid repeating them.

As the Babylonians taught, financial wisdom comes from both experience and discipline, and true wealth is built by learning from setbacks rather than being discouraged by them. The process of recovery begins with assessing your financial habits—identifying where things went wrong and understanding the patterns that led to your current situation.

Seeking professional advice, whether through a financial advisor or trusted mentor, can provide valuable insight into how to create a more sustainable plan moving forward.`
  },
  {
    title: "The Importance of Accountability",
    content: `Accountability ensures that you remain disciplined and responsible in your actions, particularly when it comes to managing your finances and achieving your goals. For students, this means taking ownership of your financial decisions, whether that involves tracking your expenses, saving for the future, or adhering to a budget.

Without accountability, it’s easy to make excuses, avoid difficult decisions, or allow distractions to derail your progress. The Babylonians understood that wealth is built on consistent actions, and they emphasized the need to commit to a plan and measure your results regularly.

By holding yourself accountable, you ensure that your goals are not just dreams but tangible objectives that you actively pursue. Moreover, accountability often involves seeking guidance from mentors or peers who help keep you on track, providing a network of support that strengthens your resolve.

This practice not only fosters financial discipline but also cultivates personal growth, as it encourages self-reflection and continuous improvement. In the context of your education and future aspirations, accountability can be the difference between success and stagnation, guiding you to take the necessary steps, stay focused, and fulfill your potential.

By embracing accountability, you align your actions with your values, creating a foundation for lasting success, as the Babylonians wisely taught: “It is not the amount of money, but how it is handled that brings true wealth.”`
  },
  {
    title: "Confronting Your Financial Fears",
    content: `Confronting your financial fears is a critical step toward mastering your finances and achieving true financial independence. Many people avoid confronting their financial fears because they fear failure, uncertainty, or the challenge of change. For students, this might manifest as the fear of not having enough money to cover tuition, or not being able to save for future goals.

However, the key to overcoming these fears lies in facing them head-on, acknowledging that uncertainty is part of life, and taking proactive steps to secure your financial future. The Babylonians understood that financial success isn’t built on avoiding risk, but on managing it wisely.

One of the most effective ways to confront financial fear is through education—learning how money works, understanding budgeting, and practicing disciplined saving. By taking small, manageable steps toward financial responsibility, such as setting aside a percentage of your income or cutting unnecessary expenses, you begin to build confidence.

This progressive approach helps diminish fear over time because it transforms overwhelming challenges into manageable tasks. Another important aspect of confronting financial fear is developing a mindset of abundance rather than scarcity. Fear often stems from the belief that there isn’t enough to go around, but by focusing on opportunities, growth, and investment, you can shift your perspective to one of empowerment.

The richest individuals are those who take calculated risks, learn from mistakes, and use setbacks as opportunities to improve. By confronting your financial fears, you not only protect yourself from the dangers of financial instability but also set yourself on a path to wealth and security, just as the ancient wisdom of Babylon teaches: true wealth is built by those who face their fears and take control of their destiny.`
  },
  {
    title: "The Ripple Effect of Financial Decisions",
    content: `The ripple effect of financial decisions is a powerful reminder that every financial choice you make, no matter how small, can have far-reaching consequences on your life and the lives of those around you. For students, this means understanding that each decision—whether it’s how you manage your student loans, what you spend your discretionary income on, or how you save for the future—creates a ripple that shapes your financial future.

The Babylonians understood that wealth is not built overnight; rather, it’s the result of consistent, deliberate decisions that accumulate over time. Just as a pebble tossed into a pond creates waves that extend outward, your financial choices have the potential to affect not only your own future but also the well-being of others.

For example, choosing to save regularly instead of overspending creates a foundation of financial security, which allows you to handle future challenges more easily, invest in opportunities, and avoid the stress of financial instability. On the other hand, failing to manage your finances responsibly can lead to unnecessary debt, missed opportunities, and greater stress in the future.

Additionally, the ripple effect can extend to those around you—your family, friends, and even your community—by setting an example of financial responsibility or by providing support when needed. The choice to make sound financial decisions today creates a positive ripple effect that fosters long-term stability and growth, while poor financial habits can perpetuate cycles of struggle and uncertainty.

As the Babylonians taught, “The way to wealth is to be wise in the management of your resources,” knowing that every decision, no matter how small, contributes to the larger picture of financial freedom and success.`
  },
  {
    title: "The Art of Delayed Gratification",
    content: `For students, this concept may be particularly relevant as you navigate the pressures of instant access to material desires, whether it's spending on the latest gadgets, eating out frequently, or indulging in non-essential luxuries. Delayed gratification involves resisting the temptation for immediate pleasure in order to gain a more significant, lasting reward in the future.

The Babylonians understood that wealth is not built through short-term pleasures but through patience, discipline, and wise investments that pay off over time. By choosing to save a portion of your income, investing in your education, and avoiding impulsive spending, you are laying the foundation for future prosperity.

This principle encourages you to focus on your long-term goals, such as financial independence, purchasing a home, or securing a comfortable retirement, rather than succumbing to the allure of instant gratification. The rewards of delayed gratification go beyond finances; they also foster personal growth, as you learn to exercise self-control and make thoughtful decisions that align with your deeper values.

By practicing delayed gratification, you shift your mindset from seeking immediate pleasure to understanding that true success comes from thoughtful planning, smart saving, and the wise use of your resources. The ancient wisdom of Babylon teaches us that “Wealth, like a tree, grows with patience,” and through this art of delayed gratification, you begin to nurture the roots of a future filled with security, stability, and the fulfillment of your greatest aspirations.`
  },
];

const FINANCIALChapter3Reader: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const match = location.pathname.match(/sub(\d+)/);
    if (match) {
      const index = parseInt(match[1]) - 1;
      if (!isNaN(index) && index >= 0 && index < chapters.length) {
        setCurrent(index);
      }
    }
  }, [location]);

  const progress = ((current + 1) / chapters.length) * 100;

  const next = () => current < chapters.length - 1 && setCurrent(current + 1);
  const prev = () => current > 0 && setCurrent(current - 1);
  const restart = () => setCurrent(0);

  const print = () => {
    const content = `
      <div>
        <h2>${chapters[current].title}</h2>
        ${chapters[current].content
          .split("\n\n")
          .map((para) => `<p>${para}</p>`)
          .join("")}
      </div>
    `;
    const printWindow = window.open("", "", "width=800,height=600");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head><title>${chapters[current].title}</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; color: #1f2937; background: white; }
              h2 { font-size: 24px; margin-bottom: 16px; text-align: center; }
              p { font-size: 16px; margin-bottom: 12px; white-space: pre-wrap; }
            </style>
          </head>
          <body>${content}</body>
        </html>
      `);
      printWindow.document.close();
      printWindow.onload = () => {
        printWindow.focus();
        printWindow.print();
        printWindow.close();
      };
    }
  };

  return (
    <div className="w-full h-screen py-6 px-4 md:px-6 flex flex-col">
      <div className="w-full bg-gray-300 rounded-full h-3 mb-6">
        <div
          className="bg-pink-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">{chapters[current].title}</h2>
        {chapters[current].content.split("\n\n").map((para, idx) => (
          <p key={idx} className="mb-4 text-base md:text-lg leading-relaxed whitespace-pre-wrap">
            {para}
          </p>
        ))}
      </div>

      <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <button
          onClick={prev}
          disabled={current === 0}
          className={`w-full md:w-auto ${current === 0
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-gray-800 text-white hover:bg-gray-900"
            } font-semibold px-6 py-2 rounded-lg shadow transition`}
        >
          Previous
        </button>

        <button
          onClick={print}
          className="w-full md:w-auto bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
        >
          📄 Print / Save
        </button>

        {current < chapters.length - 1 ? (
          <button
            onClick={next}
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

export default FINANCIALChapter3Reader;
