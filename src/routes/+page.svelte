<script lang="ts">
	interface Key {
		key: string;
		shiftKey?: string;
		altGrKey?: string;
		fnKey?: string;
		render: string;
		width: number;
	}

	const keyboard84: Key[][] = [
		[
			{ key: "<Esc>", render: "esc", width: 1 },
			{ key: "<F1>", render: "F1", width: 1 },
			{ key: "<F2>", render: "F2", width: 1 },
			{ key: "<F3>", render: "F3", width: 1 },
			{ key: "<F4>", render: "F4", width: 1 },
			{ key: "<F5>", render: "F5", width: 1 },
			{ key: "<F6>", render: "F6", width: 1 },
			{ key: "<F7>", render: "F7", width: 1 },
			{ key: "<F8>", render: "F8", width: 1 },
			{ key: "<F9>", render: "F9", width: 1 },
			{ key: "<F10>", render: "F10", width: 1 },
			{ key: "<F11>", render: "F11", width: 1 },
			{ key: "<F12>", render: "F12", width: 1 },
			{ key: "<PrtScr>", render: "print<br>scrn", width: 1 },
			{ key: "<Del>", fnKey: "<Ins>", render: "del", width: 1 },
			{ key: "<Light>", render: "lamp", width: 1 },
		],
		[
			{ key: "`", shiftKey: "~", render: "` ~", width: 1 },
			{ key: "1", shiftKey: "!", render: "1 !", width: 1 },
			{ key: "2", shiftKey: "@", render: "2 @", width: 1 },
			{ key: "3", shiftKey: "#", render: "3 #", width: 1 },
			{ key: "4", shiftKey: "$", render: "4 $", width: 1 },
			{ key: "5", shiftKey: "%", render: "5 %", width: 1 },
			{ key: "6", shiftKey: "^", render: "6 ^", width: 1 },
			{ key: "7", shiftKey: "&", render: "7 &", width: 1 },
			{ key: "8", shiftKey: "*", render: "8 *", width: 1 },
			{ key: "9", shiftKey: "(", render: "9 (", width: 1 },
			{ key: "0", shiftKey: ")", render: "0 )", width: 1 },
			{ key: "-", shiftKey: "_", render: "- _", width: 1 },
			{ key: "=", shiftKey: "+", render: "= +", width: 1 },
			{ key: "<Backspace>", render: "<--", width: 2 },
			{ key: "<PgUp>", render: "page<br>up", width: 1 },
		],
		[
			{ key: "<Tab>", render: "tab", width: 1.5 },
			{ key: "q", shiftKey: "Q", render: "Q", width: 1 },
			{ key: "w", shiftKey: "W", render: "W", width: 1 },
			{ key: "e", shiftKey: "E", render: "E", width: 1 },
			{ key: "r", shiftKey: "R", render: "R", width: 1 },
			{ key: "t", shiftKey: "T", render: "T", width: 1 },
			{ key: "y", shiftKey: "Y", render: "Y", width: 1 },
			{ key: "u", shiftKey: "U", render: "U", width: 1 },
			{ key: "i", shiftKey: "I", render: "I", width: 1 },
			{ key: "o", shiftKey: "O", render: "O", width: 1 },
			{ key: "p", shiftKey: "P", render: "P", width: 1 },
			{ key: "[", shiftKey: "{", render: "[ {", width: 1 },
			{ key: "]", shiftKey: "}", render: "] }", width: 1 },
			{ key: "\\", shiftKey: "|", render: "\\ |", width: 1.5 },
			{ key: "<PgDown>", render: "page<br>down", width: 1 },
		],
		[
			{ key: "<Caps>", render: "caps lock", width: 1.75 },
			{ key: "a", shiftKey: "A", render: "A", width: 1 },
			{ key: "s", shiftKey: "S", render: "S", width: 1 },
			{ key: "d", shiftKey: "D", render: "D", width: 1 },
			{ key: "f", shiftKey: "F", render: "F", width: 1 },
			{ key: "g", shiftKey: "G", render: "G", width: 1 },
			{ key: "h", shiftKey: "H", render: "H", width: 1 },
			{ key: "j", shiftKey: "J", render: "J", width: 1 },
			{ key: "k", shiftKey: "K", render: "K", width: 1 },
			{ key: "l", shiftKey: "L", render: "L", width: 1 },
			{ key: ";", shiftKey: ":", render: "; :", width: 1 },
			{ key: "'", shiftKey: '"', render: "' \"", width: 1 },
			{ key: "<Enter>", render: "enter", width: 2.25 },
			{ key: "<Home>", render: "home", width: 1 },
		],
		[
			{ key: "<Shift>", render: "shift", width: 2.25 },
			{ key: "z", shiftKey: "Z", render: "Z", width: 1 },
			{ key: "x", shiftKey: "X", render: "X", width: 1 },
			{ key: "c", shiftKey: "C", render: "C", width: 1 },
			{ key: "v", shiftKey: "V", render: "V", width: 1 },
			{ key: "b", shiftKey: "B", render: "B", width: 1 },
			{ key: "n", shiftKey: "N", render: "N", width: 1 },
			{ key: "m", shiftKey: "M", render: "M", width: 1 },
			{ key: ",", shiftKey: "<", render: ", <", width: 1 },
			{ key: ".", shiftKey: ">", render: ". >", width: 1 },
			{ key: "/", shiftKey: "?", render: "/ ?", width: 1 },
			{ key: "<Shift>", render: "shift", width: 1.75 },
			{ key: "<ArrowUp>", render: "^", width: 1 },
			{ key: "<End>", render: "end", width: 1 },
		],
		[
			{ key: "<Ctrl>", render: "control", width: 1.25 },
			{ key: "<Meta>", render: "meta", width: 1.25 },
			{ key: "<Alt>", render: "alt", width: 1.25 },
			{ key: " ", render: "", width: 6.25 },
			{ key: "<Alt>", render: "alt", width: 1 },
			{ key: "<Fn>", render: "fn", width: 1 },
			{ key: "<Ctrl>", render: "control", width: 1 },
			{ key: "<ArrowLeft>", render: "<", width: 1 },
			{ key: "<ArrowDown>", render: "v", width: 1 },
			{ key: "<ArrowRight>", render: ">", width: 1 },
		],
	];
</script>

<div class="keyboard">
	{#each keyboard84 as line}
		{#each line as key}
			<span
				class="key"
				style="grid-column: span {4 * key.width}; {key.width === 1
					? 'aspect-ratio: 1;'
					: ''}"
			>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html key.render}
			</span>
		{/each}
	{/each}
</div>

<style>
	.keyboard {
		display: grid;
		grid-template-columns: repeat(64, 0.25fr);
		grid-auto-rows: 1fr;
		gap: 3px;
	}

	.key {
		background-color: #555;
		color: white;
		font-family: sans-serif;

		padding: 0.25em;

		border-radius: 0.25em;
		box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.2);

		display: grid;
		place-content: start center;
	}
</style>
