import React, { useState } from "react";

const CenterPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const validateEmail = (value) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		setEmailError(!regex.test(value));
		setEmail(value);
	};

	const validatePassword = (value) => {
		setPasswordError(value.length < 6);
		setPassword(value);
	};

	return (
		<div className="relative w-full h-full flex flex-col items-center justify-center p-4">
			<div className="flex justify-center mb-6">
				<i className="fas fa-user-circle text-gray-600 text-4xl"></i>
			</div>
			<h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
			<form>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="email"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => validateEmail(e.target.value)}
						className={`w-full px-3 py-2 border ${
							emailError ? "border-red-500" : "border-green-500"
						} rounded-lg`}
					/>
					{emailError && (
						<p className="text-red-500 text-xs mt-1">
							Invalid email address
						</p>
					)}
				</div>
				<div className="mb-6">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="password"
					>
						Password
					</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => validatePassword(e.target.value)}
						className={`w-full px-3 py-2 border ${
							passwordError
								? "border-red-500"
								: "border-green-500"
						} rounded-lg`}
					/>
					{passwordError && (
						<p className="text-red-500 text-xs mt-1">
							Password must be at least 6 characters
						</p>
					)}
				</div>
				<div className="flex items-center justify-center">
					<button
						type="submit"
						className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default CenterPage;
