import React, { useState } from "react";

const BelajarHook = () => {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<p>Anda klik sebanyak {count} kali</p>
			<button onClick={() => handleClick()}>Tambah Count</button>
		</div>
	);
};

export default BelajarHook;
