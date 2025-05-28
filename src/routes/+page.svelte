<script lang="ts">
	function getIndex(n: number) {
		return (n + 29) % 31;
	}
	function getIndexFifths(n: number) {
		return ((n + 29) * 19) % 31;
	}
	function getDiatonic(n: number) {
		let index = getIndexFifths(n);
		return (index * 4 + 4) % 7;
	}
	function getDiatonicFifths(n: number) {
		let index = getIndexFifths(n);
		return (index + 1) % 7;
	}
	function getChromatic(n: number) {
		let index = getIndexFifths(n);
		return (index * 7 + 5) % 12;
	}
	function getChromaticFifths(n: number) {
		let index = getIndexFifths(n);
		return (index + 11) % 12;
	}
	function isAboveBlackKey(n: number) {
		let index = getChromaticFifths(n);
		return index >= 6 && index <= 10;
	}
	function getRow(n: number) {
		if (n > 25) return 0;
		if (n > 18) return 1;
		if (n > 11) return 2;
		if (n > 4) return 3;
		return 4;
	}

	const colours = [
		'bg-[#ffb66c]',
		'bg-[#729fcf]',
		'bg-[#ff6d6d] text-white',
		'bg-[#ffe994]',
		'bg-[#e161a9] text-white',
		'bg-[#85d171]',
		'bg-[#8e86ae] text-white'
	];
	const letterName = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
	const accidental = ['x', '#', '', 'b', 'bb'];
</script>

<div class="mt-24 flex flex-col gap-4">
	<h1 class="text-center text-5xl">31-Tone Pitch Class Sets</h1>
	<div class="text-center text-2xl">
		a surprisingly simple system for representing, querying and manipulating:
	</div>
	<div class="flex justify-center gap-4 text-lg">
		<div class="bg-green-200 px-4 py-2 shadow-[5px_5px_0_0_#444444]">notes</div>
		<div class="bg-red-200 px-4 py-2 shadow-[5px_5px_0_0_#444444]">intervals</div>
		<div class="bg-yellow-200 px-4 py-2 shadow-[5px_5px_0_0_#444444]">keys</div>
		<div class="bg-blue-200 px-4 py-2 shadow-[5px_5px_0_0_#444444]">modes</div>
		<div class="bg-purple-200 px-4 py-2 shadow-[5px_5px_0_0_#444444]">enharmonics</div>
	</div>
	<div class="text-center text-2xl">programmatically in a tonal context.</div>
</div>

<div class="relative mx-auto mt-16 flex w-fit shadow-[10px_10px_0_0_#444444]">
	<div
		class="flex flex-col border-4 border-r-0 border-stone-800 bg-stone-300 pt-7 text-center text-xl"
	>
		<div class="h-8 bg-red-200 pl-1">x</div>
		<div class="h-8 bg-orange-100 pl-1">#</div>
		<div class="h-8 bg-green-50 pl-1">♮</div>
		<div class="h-8 bg-cyan-100 pl-1">b</div>
		<div class="h-8 bg-blue-200 pl-1">bb</div>
		<div class="mt-8 h-8 pl-1 text-right">31pcs</div>
		<div class="h-8 pl-1 text-right">*31pcs</div>
		<div class="h-8 pl-1 text-right">7pcs</div>
		<div class="h-8 pl-1 text-right">*7pcs</div>
		<div class="h-8 pl-1 text-right">12pcs</div>
		<div class="h-8 pl-1 text-right">*12pcs</div>
	</div>
	<div class="relative h-fit w-fit">
		<div class="flex h-fit w-fit">
			{#each { length: 8 }, index}
				{#if index === 0}
					<div class="-mr-1 h-112 w-45.5 border-4 border-stone-800 bg-white"></div>
				{:else if [3, 4, 6].includes(index)}
					<div class="-mr-1 h-112 w-45 border-4 border-stone-800 bg-white"></div>
				{:else if index === 7}
					<div class="-mr-1 h-112 w-34.5 border-4 border-stone-800 bg-white"></div>
				{:else}
					<div class="-mr-1 h-112 w-56 border-4 border-stone-800 bg-white"></div>
				{/if}
			{/each}
		</div>
		<div class="absolute top-0 left-34 flex gap-33.5">
			{#each { length: 6 }, index}
				{#if index === 3}
					<div class="-mr-0.5"></div>
				{:else}
					<div class="-mr-0.5 h-112 w-22 bg-stone-800"></div>
				{/if}
			{/each}
		</div>
		<table class="absolute top-8 left-1 text-center align-middle text-xl">
			<tbody>
				{#each { length: 5 }, row}
					<tr class="h-8">
						{#each { length: 34 }, n}
							{#if getRow(getIndexFifths(n)) === row}
								<td class="w-11 {colours[getDiatonic(n)]}"
									>{letterName[getDiatonic(n)]}{accidental[row]}</td
								>
							{:else}
								<td></td>
							{/if}
						{/each}
					</tr>
				{/each}
				<tr class="h-8"></tr>

				<tr class="h-8 bg-stone-300">
					{#each { length: 34 }, n}
						<td class="w-11">{getIndex(n)}</td>
					{/each}
				</tr>
				<tr class="h-8 bg-stone-300">
					{#each { length: 34 }, n}
						<td class="w-11">{getIndexFifths(n)}</td>
					{/each}
				</tr>
				<tr class="h-8">
					{#each { length: 34 }, n}
						<td class="w-11 {colours[getDiatonic(n)]}">{getDiatonic(n)}</td>
					{/each}
				</tr>
				<tr class="h-8">
					{#each { length: 34 }, n}
						<td class="w-11 {colours[getDiatonic(n)]}">{getDiatonicFifths(n)}</td>
					{/each}
				</tr>
				<tr class="h-8">
					{#each { length: 34 }, n}
						<td class="w-11 {isAboveBlackKey(n) && 'text-white'}">{getChromatic(n)}</td>
					{/each}
				</tr>
				<tr class="h-8">
					{#each { length: 34 }, n}
						<td class="w-11 {isAboveBlackKey(n) && 'text-white'}">{getChromaticFifths(n)}</td>
					{/each}
				</tr>
			</tbody>
		</table>
	</div>
	<div class="absolute top-1 left-28.25 h-110 w-16 border-r-3 border-dashed border-stone-600"></div>
	<div
		class="absolute top-1 left-369.25 h-110 w-16 border-r-3 border-dashed border-stone-600"
	></div>
	<div class="absolute -bottom-12">* ordered as a sequence of fifths</div>
</div>
