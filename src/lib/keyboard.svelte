<script lang="ts">
	import {
		getIndex,
		getIndexFifths,
		getDiatonic,
		getDiatonicFifths,
		getChromatic,
		getChromaticFifths,
		isAboveBlackKey,
		getRow,
		colours,
		letterName,
		accidental
	} from '$lib/utils';
</script>

<div
	class="relative mx-auto mt-16 flex w-fit max-w-[calc(100vw-2rem)] shadow-[10px_10px_0_0_var(--color-stone-500)] sm:max-w-[calc(100vw-4rem)]"
>
	<div
		class="3xl:text-lg flex flex-col border-4 border-stone-700 bg-stone-300 pt-5 text-sm 2xl:pt-7 2xl:text-base"
	>
		<div class="3xl:h-8 flex h-6 items-center justify-center bg-red-200 pr-2 pl-3 2xl:h-7">x</div>
		<div class="3xl:h-8 flex h-6 items-center justify-center bg-orange-100 pr-2 pl-3 2xl:h-7">
			#
		</div>
		<div class="3xl:h-8 flex h-6 items-center justify-center bg-green-50 pr-2 pl-3 2xl:h-7">♮</div>
		<div class="3xl:h-8 flex h-6 items-center justify-center bg-cyan-100 pr-2 pl-3 2xl:h-7">b</div>
		<div class="3xl:h-8 flex h-6 items-center justify-center bg-blue-200 pr-2 pl-3 2xl:h-7">bb</div>
		<div
			class="3xl:h-8 mt-6 flex h-6 items-center justify-end pr-2 pl-3 text-right 2xl:mt-8 2xl:h-7"
		>
			31pcs
		</div>
		<div class="3xl:h-8 flex h-6 items-center justify-end pr-2 pl-3 text-right 2xl:h-7">*31pcs</div>
		<div class="3xl:h-8 flex h-6 items-center justify-end pr-2 pl-3 text-right 2xl:h-7">7pcs</div>
		<div class="3xl:h-8 flex h-6 items-center justify-end pr-2 pl-3 text-right 2xl:h-7">*7pcs</div>
		<div class="3xl:h-8 flex h-6 items-center justify-end pr-2 pl-3 text-right 2xl:h-7">12pcs</div>
		<div class="3xl:h-8 flex h-6 items-center justify-end pr-2 pl-3 text-right 2xl:h-7">*12pcs</div>
	</div>
	<div class="relative h-fit w-fit overflow-auto border-r-4 border-stone-700 lg:overflow-clip">
		<div class="flex h-fit w-fit">
			{#each { length: 8 }, index}
				{#if index === 0}
					<div
						class="3xl:w-44.5 3xl:h-112 -mr-1 h-84 w-26.5 border-4 border-l-0 border-stone-700 bg-white xl:w-32.5 2xl:h-98 2xl:w-36.5"
					></div>
				{:else if [3, 4, 6].includes(index)}
					<div
						class="3xl:w-45 3xl:h-112 -mr-1 h-84 w-27 border-4 border-stone-700 bg-white xl:w-33 2xl:h-98 2xl:w-37"
					></div>
				{:else if index === 7}
					<div
						class="3xl:w-33.5 3xl:h-112 -mr-1 h-84 w-20 border-4 border-r-0 border-stone-700 bg-white xl:w-24.5 2xl:h-98 2xl:w-27.5"
					></div>
				{:else}
					<div
						class="3xl:w-56 3xl:h-112 -mr-1 h-84 w-33.5 border-4 border-stone-700 bg-white xl:w-41 2xl:h-98 2xl:w-46"
					></div>
				{/if}
			{/each}
		</div>
		<div
			class="3xl:left-33 3xl:gap-33.5 absolute top-0 left-19.5 flex gap-20 xl:left-24 xl:gap-24.5 2xl:left-27 2xl:gap-27.5"
		>
			{#each { length: 6 }, index}
				{#if index === 3}
					<div class="-mr-0.5"></div>
				{:else}
					<div
						class="3xl:w-22 3xl:h-112 -mr-0.5 h-84 w-13 bg-stone-700 xl:w-16 2xl:h-98 2xl:w-18"
					></div>
				{/if}
			{/each}
		</div>
		<table
			class="3xl:text-lg absolute top-6 left-0 min-w-max text-center align-middle text-xs xl:text-sm 2xl:top-8 2xl:text-base"
		>
			<tbody>
				{#each { length: 5 }, row}
					<tr class="3xl:h-8 h-6 2xl:h-7">
						{#each Array.from({ length: 34 }, (_, i) => i + 29) as n}
							{#if getRow(getIndexFifths(n)) === row}
								<td class="3xl:w-11 w-6.5 xl:w-8 2xl:w-9 {colours[getDiatonic(n)]}"
									>{letterName[getDiatonic(n)]}{accidental[row]}</td
								>
							{:else}
								<td></td>
							{/if}
						{/each}
					</tr>
				{/each}
				<tr class="3xl:h-8 h-6 2xl:h-7"></tr>

				<tr class="3xl:h-8 h-6 bg-stone-300 2xl:h-7">
					{#each Array.from({ length: 34 }, (_, i) => i + 29) as n}
						<td class="3xl:w-11 w-6.5 xl:w-8 2xl:w-9">{getIndex(n)}</td>
					{/each}
				</tr>
				<tr class="3xl:h-8 h-6 bg-stone-300 2xl:h-7">
					{#each Array.from({ length: 34 }, (_, i) => i + 29) as n}
						<td class="3xl:w-11 w-6.5 xl:w-8 2xl:w-9">{getIndexFifths(n)}</td>
					{/each}
				</tr>
				<tr class="3xl:h-8 h-6 2xl:h-7">
					{#each Array.from({ length: 34 }, (_, i) => i + 29) as n}
						<td class="3xl:w-11 w-6.5 xl:w-8 2xl:w-9 {colours[getDiatonic(n)]}">{getDiatonic(n)}</td
						>
					{/each}
				</tr>
				<tr class="3xl:h-8 h-6 2xl:h-7">
					{#each Array.from({ length: 34 }, (_, i) => i + 29) as n}
						<td class="3xl:w-11 w-6.5 xl:w-8 2xl:w-9 {colours[getDiatonic(n)]}"
							>{getDiatonicFifths(n)}</td
						>
					{/each}
				</tr>
				<tr class="3xl:h-8 h-6 2xl:h-7">
					{#each Array.from({ length: 34 }, (_, i) => i + 29) as n}
						<td class="3xl:w-11 w-6.5 xl:w-8 2xl:w-9 {isAboveBlackKey(n) && 'text-white'}"
							>{getChromatic(n)}</td
						>
					{/each}
				</tr>
				<tr class="3xl:h-8 h-6 2xl:h-7">
					{#each Array.from({ length: 34 }, (_, i) => i + 29) as n}
						<td class="3xl:w-11 w-6.5 xl:w-8 2xl:w-9 {isAboveBlackKey(n) && 'text-white'}"
							>{getChromaticFifths(n)}</td
						>
					{/each}
				</tr>
			</tbody>
		</table>
		<div
			class="3xl:left-18.5 3xl:h-110 absolute top-1 left-9.25 h-82 w-4 border-r-2 border-dashed border-stone-500 lg:border-r-3 xl:left-12.5 2xl:left-14.5 2xl:h-96"
		></div>
		<div
			class="3xl:left-359.5 3xl:h-110 absolute top-1 left-210.75 h-82 w-4 border-r-2 border-dashed border-stone-500 lg:border-r-3 xl:left-260.5 2xl:left-293.5 2xl:h-96"
		></div>
	</div>
	<div class="absolute -bottom-12 text-xs md:text-sm xl:text-base">* fifths-ordered numbering</div>
</div>
