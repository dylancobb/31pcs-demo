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
		hoverColours
	} from '$lib/utils';
	import Button from './button.svelte';

	let selectedMode = $state(1);
	function setMode(n: number) {
		selectedMode = n;
	}

	let selectedCenter = $state(13);
	function setCenter(n: number) {
		selectedCenter = n;
	}

	let keyWindow = $derived(selectedCenter - selectedMode - 5);
</script>

<div class="mx-auto mt-24 mb-4 flex flex-wrap justify-center gap-4 px-4">
	{#each { length: 7 }, index}
		<Button
			colour={(index * 4 + 3) % 7}
			onclick={() => setMode(index)}
			disabled={index < selectedCenter - 19 || index > selectedCenter - 5}>{mode[index]}</Button
		>
	{/each}
</div>
<div
	class="3xl:text-lg 3xl:h-28.5 mx-auto flex h-22.5 w-fit max-w-[calc(100vw-4rem)] flex-col overflow-auto text-xs xl:text-sm 2xl:h-25.5 2xl:text-base"
>
	<div class="border-4 shadow-[7px_7px_0_0_var(--color-stone-500)]">
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
					class="3xl:w-11 3xl:h-8 flex h-6 w-6.5 items-center justify-center xl:w-8 2xl:h-7 2xl:w-9 {colours[
						getDiatonic(n)
					]} {hoverColours[getDiatonic(n)]}"
					onclick={() => {
						setCenter(getIndexFifths(n));
					}}
				>
					{letterName[getDiatonic(n)]}{accidental[getAccidental(getIndexFifths(n))]}
				</button>
			{/each}
		</div>
	</div>
	<div
		class="relative -mt-1 flex w-fit border-4 shadow-[7px_7px_0_0_var(--color-stone-500)] transition-[left] duration-300"
		style={`left: calc(${keyWindow} * ((100% - 0.5rem) / 31));`}
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
<div class="mx-auto w-full text-center">
	Selected: {letterName[getDiatonic(selectedCenter * 18)]}{accidental[
		getAccidental(getIndexFifths(selectedCenter * 18))
	]}
	{mode[selectedMode]}
	{keyWindow}
	{selectedCenter}
</div>
