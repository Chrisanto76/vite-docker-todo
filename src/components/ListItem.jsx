import React from 'react';

export default function ListItem() {
	return (
		<li className="p-2 bg-zinc-200 mb-2 rounded flex">
			<span>item 1</span>
			<button className="ml-auto bg-red-600 w-6 h-6 rounded text-zinc-200">
				X
			</button>
		</li>
	);
}
