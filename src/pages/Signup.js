import { useState } from "react";

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleName = (e) => {
		setName(e.target.value);
	};

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	return (
		<form className="form">
			<h1>Signup</h1>
			<div>
				<label htmlFor="name">Name</label>
				<input type="text" value={name} onChange={handleName} />
			</div>

			<div>
				<label htmlFor="email">Email</label>
				<input type="email" value={email} onChange={handleEmail} />
			</div>

			<div>
				<label htmlFor="password">Password</label>
				<input type="password" value={password} onChange={handlePassword} />
			</div>

			<button type="submit">Submit</button>
		</form>
	);
};

export default Signup;
