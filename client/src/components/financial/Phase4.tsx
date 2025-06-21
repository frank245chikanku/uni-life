import React from "react";

const Phase4: React.FC = () => {
  return (
    <div
      className="py-10 px-8 max-w-4xl mx-auto rounded-2xl"
      style={{
        backgroundColor: "#ffffff",
        color: "#1f2937",
        boxShadow: "0 10px 25px rgba(147, 106, 140, 0.2)",
      }}
    >
      <h1 className="font-bold text-3xl mb-6 text-center text-[#050505]">
        Phase 4: Avoiding Debt
      </h1>
      <p className="text-lg leading-relaxed mb-6">
        Before embarking on your debt-free journey, you must clearly understand your income, expenses, debts, and assets. Assess your financial well-being by looking at the big picture and understanding how much you spend in relation to your income.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        Once you understand your financial situation, create a monthly expense budget that works for you. Budgets allow you to track spending and manage your cash flow systematically. A budget should be realistic, flexible, and tailored to your lifestyle.
        The 50/30/20 guideline is a great way to get started. This ensures that 50% of your monthly income goes toward necessities, 30% toward lifestyle and discretionary spending, and 20% toward savings and debt repayment. The goal is to cover your expenses from income and end each month with some money left over.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        <strong>Build an emergency fund</strong>
        <br />
        An emergency fund serves as a safety net that you can tap into during unexpected life events like job loss, medical bills, car repairs, etc. Having an emergency fund of at least three to six months' worth of living expenses can help prevent you from accumulating more debt and ensure your financial security during difficult times.
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Save a portion of your income.</li>
        <li>Automate your savings to ensure you are setting aside money each month.</li>
        <li>Invest your emergency funds in low-risk investments such as savings accounts or money market funds.</li>
      </ul>
      <p className="text-lg leading-relaxed">
        <strong>Establish smart spending habits</strong>
        <br />
        Mindful spending means only purchasing what you need and avoiding overspending. Evaluate your purchases and ask yourself whether it’s truly necessary or if you’re just succumbing to temptation. Create a budget to track your personal finances to ensure you make the best use of your money. Additionally, challenge yourself to find more affordable and creative alternatives to your desired items. Distinguish between needs and wants to develop smart spending habits.
      </p>
    </div>
  );
};

export default Phase4;
