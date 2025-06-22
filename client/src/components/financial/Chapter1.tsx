import React, { useState } from "react";

const phases = [
  {
    title: "Phase 1: Understanding Financial Strain",
    content: `Like any source of overwhelming stress, financial problems can take a huge toll on your mental and physical health, your relationships, and your overall quality of life. Feeling beaten down by money worries can adversely impact your sleep, self-esteem, and energy levels. It can leave you feeling angry, ashamed, or fearful, fuel tension and arguments with those closest to you, exacerbate pain and mood swings, and even increase your risk of depression and anxiety.

You may resort to unhealthy coping mechanisms, such as drinking, abusing drugs, or gambling to try to escape your worries. In the worst circumstances, financial stress can even prompt suicidal thoughts or actions. But no matter how hopeless your situation seems, there is help available. By tackling your money problems head-on, you can find a way through the financial quagmire, ease your stress levels, and regain control of your finances—and your life.`
  },
  {
    title: "Phase 2: The Importance of Saving",
    content: `Saving money is one of the essential aspects of building wealth and having a secure financial future. Saving money gives you a way out of the uncertainties of life and provides you with an opportunity to enjoy a quality life. Putting aside a sum of money in a systematic manner can help you steer out of many hurdles and obstacles in life.

It can support you in your hour of need and ensure that your family has something to fall back on in case of an unfortunate event. Among the many advantages of saving is the long-term security it provides you. The future is unpredictable, and financial emergencies can crop up anytime.

Saving money allows you to create a safety net for your future expenses as well as unplanned financial needs. The more you save, the more peace of mind you have, as you are better prepared for anything life throws at you.

The importance of saving money cannot be understated when it comes to independence. Financial independence plays a critical role in making you self-sufficient. It helps you live life according to your preferences and comfort. You have the liberty and authority to spend your money on the things you like and live a comfortable and enriched life.`
  },
  {
    title: "Phase 3: Living Below Your Means",
    content: `When you live below your means, the goal is to spend less than your total monthly income — which means that the money you bring in outweighs your expenses. For example, if you bring in K3,000 each month and are left with K500 at the end of the month, then you are living below your means. The ideal amount to aim for depends on your unique circumstances.

Living below your means has short- and long-term benefits, which can help bring you closer to financial security. Some of the benefits of spending less than you earn include:

- Freeing up money to help build an emergency savings fund.
- Saving more money for big purchases like a vacation, car or home.
- Putting more money toward retirement or other investments.

Ultimately, when you live below your means, you’re better prepared to handle unexpected expenses like a medical bill or home repairs, and to fund the things that make your life feel full, like travel or donating to causes. It’s not easy to shift your behavior when it comes to money, and if you want to reduce your spending, it won’t happen instantly.

But reflecting on your relationship with money and your financial habits can help set you up for success. Try this: Write down what you value in life. Then look closely at your last few financial statements. Do your purchases match your values? You might find that small changes can help you stop spending money on nonessential items.`
  },
  {
    title: "Phase 4: Avoiding Debt",
    content: `Before embarking on your debt-free journey, you must clearly understand your income, expenses, debts, and assets. Assess your financial well-being by looking at the big picture and understanding how much you spend in relation to your income.

Once you understand your financial situation, create a monthly expense budget that works for you. Budgets allow you to track spending and manage your cash flow systematically. A budget should be realistic, flexible, and tailored to your lifestyle. The 50/30/20 guideline is a great way to get started. This ensures that 50% of your monthly income goes toward necessities, 30% toward lifestyle and discretionary spending, and 20% toward savings and debt repayment. The goal is to cover your expenses from income and end each month with some money left over.

**Build an emergency fund**  
An emergency fund serves as a safety net that you can tap into during unexpected life events like job loss, medical bills, car repairs, etc. Having an emergency fund of at least three to six months' worth of living expenses can help prevent you from accumulating more debt and ensure your financial security during difficult times.

- Save a portion of your income.
- Automate your savings to ensure you are setting aside money each month.
- Invest your emergency funds in low-risk investments such as savings accounts or money market funds.

**Establish smart spending habits**  
Mindful spending means only purchasing what you need and avoiding overspending. Evaluate your purchases and ask yourself whether it’s truly necessary or if you’re just succumbing to temptation. Create a budget to track your personal finances to ensure you make the best use of your money. Additionally, challenge yourself to find more affordable and creative alternatives to your desired items. Distinguish between needs and wants to develop smart spending habits.`
  },
  {
    title: "Phase 5: Diversifying Income Streams",
    content: `When you diversify income streams, it is like planting seeds in your financial garden, each growing at different rates and requiring different amounts of attention, but collectively contributing to a robust and flourishing economic ecosystem.

The primary benefit of this approach is financial security. By spreading income sources across different channels, you mitigate the risk associated with relying solely on one income source. This is particularly valuable in times of economic uncertainty or when unexpected personal circumstances arise, such as a job loss or a sudden expense.

Having multiple income streams can accelerate you reaching your financial goals. Whether it's saving for retirement, purchasing a home, or funding education, additional revenue can make these goals more attainable within a shorter timeframe. This strategy not only speeds up wealth accumulation but also provides opportunities to invest in a broader range of assets, further enhancing financial stability.

Diversifying income can also lead to personal growth and satisfaction. Engaging in varied work such as a side business, freelance projects, or investments can foster new skills, expand your professional network, and increase your marketability. It also allows for greater control over your time and the potential for pursuing passions that might not be feasible through a single income source.

Embracing multiple income streams, therefore, not only fortifies your financial position but also enriches your personal and professional life, making it a powerful strategy for anyone looking to build a resilient and fulfilling future.`
  }
];

const FinancialChapter1Reader: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const progress = ((current + 1) / phases.length) * 100;

  const next = () => {
    if (current < phases.length - 1) setCurrent(current + 1);
  };

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const restart = () => setCurrent(0);

  const print = () => {
    const contentToPrint = `
      <div>
        <h2>${phases[current].title}</h2>
        ${phases[current].content
        .split("\n\n")
        .map((para) => `<p>${para}</p>`)
        .join("")}
      </div>
    `;

    const printWindow = window.open("", "", "width=800,height=600");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${phases[current].title}</title>
            <style>
              body {
                font-family: sans-serif;
                padding: 20px;
                line-height: 1.6;
                color: #1f2937;
              }
              h2 {
                font-size: 24px;
                margin-bottom: 16px;
              }
              p {
                font-size: 16px;
                margin-bottom: 12px;
              }
              ul {
                margin-left: 20px;
              }
              li {
                margin-bottom: 8px;
              }
            </style>
          </head>
          <body>${contentToPrint}</body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <div className="w-full bg-gray-300 rounded-full h-3 mb-6">
        <div
          className="bg-pink-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div
        className="py-10 px-8 max-w-4xl mx-auto rounded-2xl"
        style={{
          backgroundColor: "#ffffff",
          color: "#1f2937",
          boxShadow: "0 10px 25px rgba(147, 106, 140, 0.2)"
        }}
      >
        <h2 className="font-bold text-3xl mb-6 text-center text-[#050505]">
          {phases[current].title}
        </h2>
        {phases[current].content.split("\n\n").map((para, idx) => (
          <p key={idx} className="mb-4 text-lg leading-relaxed whitespace-pre-wrap">
            {para}
          </p>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center flex-wrap gap-2">
        <button
          onClick={prev}
          disabled={current === 0}
          className={`${current === 0
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-gray-800 text-white hover:bg-gray-900"
            } font-semibold px-6 py-2 rounded-lg shadow transition`}
        >
          Previous
        </button>

        <button
          onClick={print}
          className="bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
        >
          📄 Print / Save
        </button>

        {current < phases.length - 1 ? (
          <button
            onClick={next}
            className="bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
          >
            Next Chapter
          </button>
        ) : (
          <div className="text-center w-full mt-4">
            <p className="text-green-600 font-semibold mb-4">
              🎉 You’ve completed all chapters!
            </p>
            <button
              onClick={restart}
              className="bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-900 transition"
            >
              🔁 Restart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinancialChapter1Reader;
