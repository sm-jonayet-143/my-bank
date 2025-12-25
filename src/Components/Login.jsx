import { useState } from "react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email === "jonayetsm81@gmail.com" &&
      password === "1234"
    ) {
      onLogin();
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-6">
          Welcome To <span className="text-purple-600">NRBC Bank</span>
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-green-100 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-lg mb-4">Please Login</h2>

          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
            required
          />

          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
            required
          />

          {error && (
            <p className="text-red-600 mb-3">{error}</p>
          )}

          {/* LOGIN BUTTON (VISIBLE FOR SURE) */}
          <button
            type="submit"
            className="w-full text-red-600 text-3xl font-extrabold py-2 rounded font-bold hover:bg-purple-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
