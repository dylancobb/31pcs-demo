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
		disabledColours
	} from '$lib/utils';
	import Button from './button.svelte';

	let selectedMode = $state(1);
	function setMode(n: number) {
		selectedMode = n;
	}
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
<div class="mx-auto w-full text-center">
	Selected: {letterName[getDiatonic(selectedCenter * 18)]}{accidental[
		getAccidental(getIndexFifths(selectedCenter * 18))
	]}
	{mode[selectedMode]}
</div>
