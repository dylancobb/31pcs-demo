<script lang="ts">
	import {
		getIndex,
		getDiatonic,
		getAccidental,
		colours,
		letterName,
		accidental,
		getIndexFifths,
		getModalDegree,
		mode,
		hoverColours,
		disabledColours,
		getChromatic
	} from '$lib/utils';
	import { fade, fly } from 'svelte/transition';
	import Button from './button.svelte';

	let selectedMode = $state(1);
	function setMode(n: number) {
		selectedMode = n;
	}
	let selectedCenter = $state(13);
	function setCenter(n: number) {
		selectedCenter = n;
	}
	let degreeMatrix = $derived.by(() => {
		let result = Array.from({ length: 17 }, (_, i) => getIndex(i * 18 + 2)).map((n) => {
			return {
				row: getAccidental(getIndexFifths(n)),
				pc: (((getChromatic(n) - 7 * (selectedMode - 1)) % 12) + 12) % 12,
				n: (getIndexFifths(n) + selectedCenter + 19 - selectedMode) % 31,
				degree: getModalDegree(n, selectedMode)
			};
		});

		let matrix = Array.from({ length: 3 }, () => Array(12).fill(null));

		for (const { row, pc, degree, n } of result) {
			matrix[row - 1][pc] = { degree, pc, n };
		}
		return matrix;
	});

	function fuckLocrian(e: MouseEvent) {
		const msg = document.createElement('div');
		msg.textContent = 'No.';

		// Tailwind classes for styling and animation
		msg.className =
			'absolute -top-8 left-1/2 -translate-x-1/2 bg-stone-600 text-white text-sm px-3 py-1 pointer-events-none opacity-100 transition-opacity duration-300';

		e.target.appendChild(msg);

		setTimeout(() => {
			msg.classList.add('opacity-0');
			setTimeout(() => msg.remove(), 300);
		}, 1000);
	}

	let keyWindow = $derived(selectedCenter - selectedMode - 5);
</script>

<div class="mx-auto mt-24 mb-8 w-full text-center text-lg sm:text-xl lg:text-2xl xl:text-3xl">
	{letterName[getDiatonic(selectedCenter * 18)]}{accidental[
		getAccidental(getIndexFifths(selectedCenter * 18))
	]}
	{mode[selectedMode]}
</div>
<div class="mx-auto mb-4 flex flex-wrap justify-center gap-4 px-4">
	{#each { length: 7 }, index}
		<Button
			colour={(index * 4 + 3) % 7}
			onclick={index === 6 ? (e: Event) => fuckLocrian(e) : () => setMode(index)}
			disabled={index < selectedCenter - 19 || index > selectedCenter - 5}>{mode[index]}</Button
		>
	{/each}
</div>
<div
	class="3xl:text-lg 3xl:h-28.5 mx-auto flex h-22.5 w-fit max-w-[calc(100vw-4rem)] flex-col overflow-auto text-xs xl:text-sm 2xl:h-25.5 2xl:text-base"
>
	<div class="w-fit border-4 shadow-[7px_7px_0_0_var(--color-stone-500)]">
		<div class="flex w-fit justify-center bg-stone-300">
			{#each Array.from({ length: 31 }, (_, i) => getIndex(i * 18)) as n}
				<div
					class="3xl:w-11 3xl:h-8 flex h-6 w-6.5 items-center justify-center xl:w-8 2xl:h-7 2xl:w-9"
				>
					{getIndexFifths(n)}
				</div>
			{/each}
		</div>
		<div class="flex w-fit justify-center">
			{#each Array.from({ length: 31 }, (_, i) => getIndex(i * 18)) as n}
				<button
					class="3xl:w-11 3xl:h-8 flex h-6 w-6.5 items-center justify-center transition-colors duration-300 xl:w-8 2xl:h-7 2xl:w-9 {colours[
						getDiatonic(n)
					]} {hoverColours[getDiatonic(n)]} {disabledColours[getDiatonic(n)]}"
					onclick={() => {
						setCenter(getIndexFifths(n));
					}}
					disabled={selectedMode < getIndexFifths(n) - 19 || selectedMode > getIndexFifths(n) - 5}
				>
					{letterName[getDiatonic(n)]}{accidental[getAccidental(getIndexFifths(n))]}
				</button>
			{/each}
		</div>
	</div>
	<div
		class="3xl:[--unit:2.75rem] relative -mt-1 flex w-fit border-4 border-t-0 shadow-[7px_7px_0_0_var(--color-stone-500)] transition-[left] duration-300 [--unit:1.625rem] xl:[--unit:2rem] 2xl:[--unit:2.25rem]"
		style={`left: calc(${keyWindow} * var(--unit));`}
	>
		{#each Array.from({ length: 17 }, (_, i) => getIndex(i * 18 + 2)) as n}
			<div
				class="3xl:w-11 3xl:h-8 flex h-6 w-6.5 items-center justify-center xl:w-8 2xl:h-7 2xl:w-9 {colours[
					getDiatonic(n)
				]}"
			>
				{accidental[getAccidental(getIndexFifths(n))]}{getModalDegree(n, selectedMode)}
			</div>
		{/each}
	</div>
</div>
<table
	class="3xl:text-lg mx-auto mt-12 min-w-max text-center align-middle text-xs xl:text-sm 2xl:top-8 2xl:text-base"
>
	<tbody>
		{#each { length: 3 }, row}
			<tr class="3xl:h-8 h-6 2xl:h-7">
				{#each { length: 13 }, col}
					{#if degreeMatrix[row][col % 12]}
						<td
							in:fade
							class="3xl:w-11 w-6.5 xl:w-8 2xl:w-9 {colours[
								degreeMatrix[row][col % 12].degree - 1
							]}">{accidental[row + 1]}{degreeMatrix[row][col % 12].degree}</td
						>
					{:else}
						<td></td>
					{/if}
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
<table
	class="3xl:text-lg mx-auto mt-12 min-w-max text-center align-middle text-xs xl:text-sm 2xl:top-8 2xl:text-base"
>
	<tbody>
		{#each { length: 3 }, row}
			<tr class="3xl:h-8 h-6 2xl:h-7">
				{#each { length: 13 }, col}
					{#if degreeMatrix[row][col % 12]}
						<td
							in:fade
							class="3xl:w-11 w-6.5 xl:w-8 2xl:w-9 {colours[
								degreeMatrix[row][col % 12].degree - 1
							]}"
							>{letterName[(degreeMatrix[row][col % 12].n * 4 + 4) % 7]}{accidental[
								getAccidental(degreeMatrix[row][col % 12].n)
							]}</td
						>
					{:else}
						<td></td>
					{/if}
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
