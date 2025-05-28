<script lang="ts">
	function getIndex(n: number) {
		return (n + 29) % 31;
	}
	function getCircularIndex(n: number) {
		return ((n + 29) * 19) % 31;
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

	function getDiatonic(n: number) {
		let index = getCircularIndex(n);
		return (index * 4 + 4) % 7;
	}
	function getDiatonicFifths(n: number) {
		let index = getCircularIndex(n);
		return (index + 1) % 7;
	}

	function getChromatic(n: number) {
		let index = getCircularIndex(n);
		return (index * 7 + 5) % 12;
	}
	function getChromaticFifths(n: number) {
		let index = getCircularIndex(n);
		return (index + 11) % 12;
	}
	function isAboveBlackKey(n: number) {
		let index = getChromaticFifths(n);
		return index >= 6 && index <= 10;
	}

	const letterName = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
	const accidental = ['x', '#', '', 'b', 'bb'];
	function getRow(n: number) {
		if (n > 25) return 0;
		if (n > 18) return 1;
		if (n > 11) return 2;
		if (n > 4) return 3;
		return 4;
	}
</script>

<h1 class="mt-8 text-center text-5xl">31-Tone Pitch Class Sets</h1>
<h2 class="text-center text-2xl">a simple system for manipulating intervals in a tonal context</h2>

<div class="mx-auto mt-16 flex w-fit shadow-[10px_10px_0_0_#000000]">
	<div
		class="flex flex-col border-4 border-r-0 border-stone-800 bg-stone-300 pt-7 text-center text-xl"
	>
		<div class="h-8 bg-red-300 pl-1">x</div>
		<div class="h-8 bg-orange-200 pl-1">#</div>
		<div class="h-8 bg-green-50 pl-1">♮</div>
		<div class="h-8 bg-cyan-200 pl-1">b</div>
		<div class="h-8 bg-blue-300 pl-1">bb</div>
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
					<div class="-mr-1 h-112 w-45.5 border-4 border-stone-800 bg-white">
						<div class="ml-0.5 h-full w-1/2 border-r-4 border-dashed"></div>
					</div>
				{:else if [3, 4, 6].includes(index)}
					<div class="-mr-1 h-112 w-45 border-4 border-stone-800 bg-white"></div>
				{:else if index === 7}
					<div class="-mr-1 h-112 w-34.5 border-4 border-stone-800 bg-white">
						<div class="ml-0.5 h-full w-2/3 border-r-4 border-dashed"></div>
					</div>
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
							{#if getRow(getCircularIndex(n)) === row}
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
						<td class="w-11">{getCircularIndex(n)}</td>
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
</div>
