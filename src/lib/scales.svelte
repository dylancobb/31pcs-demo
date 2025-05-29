<script lang="ts">
	import {
		getIndex,
		getDiatonic,
		getRow,
		colours,
		letterName,
		accidental,
		getIndexFifths,
		mode
	} from '$lib/utils';
	import Button from './button.svelte';
</script>

<div class="mx-auto mt-24 mb-4 flex flex-wrap justify-center gap-4">
	{#each { length: 7 }, index}
		<Button colour={(index * 4 + 3) % 7}>{mode[index]}</Button>
	{/each}
</div>
<div
	class="3xl:text-lg 3xl:h-25.5 mx-auto flex h-19.5 max-w-[calc(100vw-4rem)] flex-col items-center overflow-auto text-xs xl:text-sm 2xl:h-22.5 2xl:text-base"
>
	<div class="flex w-fit justify-center shadow-[5px_5px_0_0_var(--color-stone-500)]">
		{#each Array.from({ length: 31 }, (_, i) => getIndex(i * 18)) as n}
			<div
				class="3xl:w-11 3xl:h-8 flex h-6 w-6.5 items-center justify-center xl:w-8 2xl:h-7 2xl:w-9 {colours[
					getDiatonic(n)
				]}"
			>
				{getIndexFifths(n)}
			</div>
		{/each}
	</div>
	<div class="flex w-fit justify-center shadow-[5px_5px_0_0_var(--color-stone-500)]">
		{#each Array.from({ length: 31 }, (_, i) => getIndex(i * 18)) as n}
			<div
				class="3xl:w-11 3xl:h-8 flex h-6 w-6.5 items-center justify-center xl:w-8 2xl:h-7 2xl:w-9 {colours[
					getDiatonic(n)
				]}"
			>
				{letterName[getDiatonic(n)]}{accidental[getRow(getIndexFifths(n))]}
			</div>
		{/each}
	</div>
	<div class="flex w-fit justify-center shadow-[5px_5px_0_0_var(--color-stone-500)]">
		{#each Array.from({ length: 17 }, (_, i) => getIndex(i * 18 + 2)) as n}
			<div
				class="3xl:w-11 3xl:h-8 flex h-6 w-6.5 items-center justify-center xl:w-8 2xl:h-7 2xl:w-9 {colours[
					getDiatonic(n)
				]}"
			>
				{accidental[getRow(getIndexFifths(n))]}{getDiatonic(n) + 1}
				<!-- {getIndexFifths(n)} -->
			</div>
		{/each}
	</div>
</div>
