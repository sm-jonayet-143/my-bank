import { useState } from "react";

const Dashboard = () => {
  const [balance, setBalance] = useState(1200);
  const [deposit, setDeposit] = useState("");
  const [withdraw, setWithdraw] = useState("");

  const handleDeposit = () => {
    if (deposit) {
      setBalance(balance + Number(deposit));
      setDeposit("");
    }
  };

  const handleWithdraw = () => {
    if (withdraw && Number(withdraw) <= balance) {
      setBalance(balance - Number(withdraw));
      setWithdraw("");
    }
  };

  return (
    // FULL SCREEN CENTER
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-10">
          Let,s get some{" "}
          <span className="text-purple-600">mooooney!!!!</span>
        </h1>

        {/* TOP CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-blue-400 text-white p-6 rounded text-xl text-center">
            Deposit <br /> ${deposit || 0}
          </div>

          <div className="bg-green-400 text-white p-6 rounded text-xl text-center">
            Withdraw <br /> ${withdraw || 0}
          </div>

          <div className="bg-yellow-400 text-white p-6 rounded text-xl text-center">
            Balance <br /> ${balance}
          </div>
        </div>

        {/* FORMS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Deposit */}
          <div className="bg-black p-8 rounded shadow">
            <h2 className="text-2xl font-bold text-red-700 mb-4">
              Deposit
            </h2>

            <input
              type="number"
              placeholder="$ Amount you want to deposit"
              value={deposit}
              onChange={(e) => setDeposit(e.target.value)}
              className="w-full p-2 mb-4 border rounded text-white border-amber-500"
            />

            <button
              onClick={handleDeposit}
              className="bg-purple-600 px-6 py-2 rounded font-semibold text-white"
            >
              Deposit
            </button>
          </div>

          {/* Withdraw */}
          <div className="bg-black p-8 rounded shadow">
            <h2 className="text-2xl font-bold text-red-700 mb-4">
              Withdraw
            </h2>

            <input
              type="number"
              placeholder="$ Amount you want to withdraw"
              value={withdraw}
              onChange={(e) => setWithdraw(e.target.value)}
              className="w-full p-2 mb-4 border rounded border-amber-500 text-white"
            />

            <button
              onClick={handleWithdraw}
              className="bg-purple-600 px-6 py-2 rounded font-semibold text-white"
            >
              Withdraw
            </button>
          </div>
          {/* <div className="mb-10 mt-30 flex text-center justify-center">
        <p  className="font-bold text-center flex">&copy;Content Owner: Ibna Mohammad Jonayet</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
