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

<div class="relative mx-auto mt-16 flex w-fit shadow-[10px_10px_0_0_var(--color-stone-500)]">
	<div
		class="3xl:text-lg flex flex-col border-4 border-r-0 border-stone-700 bg-stone-300 pt-5 text-sm 2xl:pt-7 2xl:text-base"
	>
		<div class="flex h-6 items-center justify-center bg-red-200 pr-2 pl-3 2xl:h-8">x</div>
		<div class="flex h-6 items-center justify-center bg-orange-100 pr-2 pl-3 2xl:h-8">#</div>
		<div class="flex h-6 items-center justify-center bg-green-50 pr-2 pl-3 2xl:h-8">♮</div>
		<div class="flex h-6 items-center justify-center bg-cyan-100 pr-2 pl-3 2xl:h-8">b</div>
		<div class="flex h-6 items-center justify-center bg-blue-200 pr-2 pl-3 2xl:h-8">bb</div>
		<div class="mt-6 flex h-6 items-center justify-end pr-2 pl-3 text-right 2xl:mt-8 2xl:h-8">
			31pcs
		</div>
		<div class="flex h-6 items-center justify-end pr-2 pl-3 text-right 2xl:h-8">*31pcs</div>
		<div class="flex h-6 items-center justify-end pr-2 pl-3 text-right 2xl:h-8">7pcs</div>
		<div class="flex h-6 items-center justify-end pr-2 pl-3 text-right 2xl:h-8">*7pcs</div>
		<div class="flex h-6 items-center justify-end pr-2 pl-3 text-right 2xl:h-8">12pcs</div>
		<div class="flex h-6 items-center justify-end pr-2 pl-3 text-right 2xl:h-8">*12pcs</div>
	</div>
	<div class="relative h-fit w-fit">
		<div class="flex h-fit w-fit">
			{#each { length: 8 }, index}
				{#if index === 0}
					<div
						class="3xl:w-45.5 -mr-1 h-84 w-33.5 border-4 border-stone-700 bg-white 2xl:h-112 2xl:w-37.5"
					></div>
				{:else if [3, 4, 6].includes(index)}
					<div
						class="3xl:w-45 -mr-1 h-84 w-33 border-4 border-stone-700 bg-white 2xl:h-112 2xl:w-37"
					></div>
				{:else if index === 7}
					<div
						class="3xl:w-34.5 -mr-1 h-84 w-25.5 border-4 border-stone-700 bg-white 2xl:h-112 2xl:w-28.5"
					></div>
				{:else}
					<div
						class="3xl:w-56 -mr-1 h-84 w-41 border-4 border-stone-700 bg-white 2xl:h-112 2xl:w-46"
					></div>
				{/if}
			{/each}
		</div>
		<div
			class="3xl:left-34 3xl:gap-33.5 absolute top-0 left-25 flex gap-24.5 2xl:left-28 2xl:gap-27.5"
		>
			{#each { length: 6 }, index}
				{#if index === 3}
					<div class="-mr-0.5"></div>
				{:else}
					<div class="3xl:w-22 -mr-0.5 h-84 w-16 bg-stone-700 2xl:h-112 2xl:w-18"></div>
				{/if}
			{/each}
		</div>
		<table
			class="3xl:text-lg absolute top-6 left-1 text-center align-middle text-sm 2xl:top-8 2xl:text-base"
		>
			<tbody>
				{#each { length: 5 }, row}
					<tr class="h-6 2xl:h-8">
						{#each { length: 34 }, n}
							{#if getRow(getIndexFifths(n)) === row}
								<td class="3xl:w-11 w-8 2xl:w-9 {colours[getDiatonic(n)]}"
									>{letterName[getDiatonic(n)]}{accidental[row]}</td
								>
							{:else}
								<td></td>
							{/if}
						{/each}
					</tr>
				{/each}
				<tr class="h-6 2xl:h-8"></tr>

				<tr class="h-6 bg-stone-300 2xl:h-8">
					{#each { length: 34 }, n}
						<td class="3xl:w-11 w-8 2xl:w-9">{getIndex(n)}</td>
					{/each}
				</tr>
				<tr class="h-6 bg-stone-300 2xl:h-8">
					{#each { length: 34 }, n}
						<td class="3xl:w-11 w-8 2xl:w-9">{getIndexFifths(n)}</td>
					{/each}
				</tr>
				<tr class="h-6 2xl:h-8">
					{#each { length: 34 }, n}
						<td class="3xl:w-11 w-8 2xl:w-9 {colours[getDiatonic(n)]}">{getDiatonic(n)}</td>
					{/each}
				</tr>
				<tr class="h-6 2xl:h-8">
					{#each { length: 34 }, n}
						<td class="3xl:w-11 w-8 2xl:w-9 {colours[getDiatonic(n)]}">{getDiatonicFifths(n)}</td>
					{/each}
				</tr>
				<tr class="h-6 2xl:h-8">
					{#each { length: 34 }, n}
						<td class="3xl:w-11 w-8 2xl:w-9 {isAboveBlackKey(n) && 'text-white'}"
							>{getChromatic(n)}</td
						>
					{/each}
				</tr>
				<tr class="h-6 2xl:h-8">
					{#each { length: 34 }, n}
						<td class="3xl:w-11 w-8 2xl:w-9 {isAboveBlackKey(n) && 'text-white'}"
							>{getChromaticFifths(n)}</td
						>
					{/each}
				</tr>
			</tbody>
		</table>
		<div
			class="3xl:left-7.5 absolute top-1 left-1.5 h-82 w-16 border-r-3 border-dashed border-stone-500 2xl:left-3.5 2xl:h-110"
		></div>
		<div
			class="3xl:left-348.5 absolute top-1 left-249.5 h-82 w-16 border-r-3 border-dashed border-stone-500 2xl:left-282.5 2xl:h-110"
		></div>
	</div>
	<div class="absolute -bottom-12 text-xs md:text-sm xl:text-base">
		* ordered as a sequence of fifths
	</div>
</div>
