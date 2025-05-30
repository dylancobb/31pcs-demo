<script lang="ts">
	import {
		getIndex,
		getDiatonic,
		getAccidental,
		colours,
		letterName,
		accidental,
		getIndexFifths,
		getQuality,
		getSize,
		hoverColours
	} from '$lib/utils';

	let firstNote = $state(15);
	let secondNote = $state(15);
	let interval = $derived(secondNote - firstNote);
</script>

<div
	class="mx-auto mt-12 mb-8 w-59.5 border-4 border-stone-600 bg-[#faf6ef] py-4 text-center text-lg shadow-[5px_5px_0_0_var(--color-stone-500)] sm:text-xl lg:w-78 lg:text-2xl xl:w-93 xl:text-3xl"
>
	<span>
		<span class="text-sky-700"
			>{letterName[getDiatonic(firstNote * 18)]}{accidental[
				getAccidental(getIndexFifths(firstNote * 18))
			]}</span
		>
		-
		<span class="text-amber-700"
			>{letterName[getDiatonic(secondNote * 18)]}{accidental[
				getAccidental(getIndexFifths(secondNote * 18))
			]}</span
		>
	</span>
	<span>is a</span>
	<span>{getQuality(interval)}{getSize(interval)}</span>
</div>
<div
	class="3xl:text-lg 3xl:h-28.5 mx-auto mb-24 flex h-22.5 w-fit max-w-[calc(100vw-4rem)] flex-col overflow-auto px-1.75 text-xs xl:text-sm 2xl:h-25.5 2xl:text-base"
>
	<div class="w-fit border-4 border-stone-700 shadow-[7px_7px_0_0_var(--color-stone-500)]">
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
					class="3xl:w-11 3xl:h-8 flex h-6 w-6.5 items-center justify-center border-sky-700 transition-colors duration-300
                    hover:cursor-pointer disabled:pointer-events-none xl:w-8 2xl:h-7 2xl:w-9 {colours[
						getDiatonic(n)
					]} {hoverColours[getDiatonic(n)]} {firstNote === getIndexFifths(n) && 'border-4'}"
					onclick={() => {
						firstNote = getIndexFifths(n);
					}}
				>
					{letterName[getDiatonic(n)]}{accidental[getAccidental(getIndexFifths(n))]}
				</button>
			{/each}
		</div>
		<div class="flex w-fit justify-center">
			{#each Array.from({ length: 31 }, (_, i) => getIndex(i * 18)) as n}
				<button
					class="3xl:w-11 3xl:h-8 flex h-6 w-6.5 items-center justify-center border-amber-700 transition-colors duration-300
                    hover:cursor-pointer disabled:pointer-events-none xl:w-8 2xl:h-7 2xl:w-9 {colours[
						getDiatonic(n)
					]} {hoverColours[getDiatonic(n)]} {secondNote === getIndexFifths(n) && 'border-4'}"
					onclick={() => {
						secondNote = getIndexFifths(n);
					}}
				>
					{letterName[getDiatonic(n)]}{accidental[getAccidental(getIndexFifths(n))]}
				</button>
			{/each}
		</div>
	</div>
</div>
