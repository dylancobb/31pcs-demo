<script lang="ts">
	import Keyboard from '$lib/keyboard.svelte';
</script>

<div class="mt-24 flex flex-col items-center gap-4 text-center">
	<h1 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">31-Tone Pitch Class Sets</h1>
	<div class="text-base sm:text-lg lg:text-xl xl:text-2xl">
		a simple system for representing, querying and manipulating
	</div>
	<div class="flex flex-wrap justify-center gap-4 text-sm lg:text-base xl:text-lg">
		<div
			class="bg-green-200 px-3 py-1.5 shadow-[5px_5px_0_0_var(--color-stone-600)] md:px-4 md:py-2"
		>
			notes
		</div>
		<div class="bg-red-200 px-3 py-1.5 shadow-[5px_5px_0_0_var(--color-stone-600)] md:px-4 md:py-2">
			intervals
		</div>
		<div
			class="bg-yellow-200 px-3 py-1.5 shadow-[5px_5px_0_0_var(--color-stone-600)] md:px-4 md:py-2"
		>
			keys
		</div>
		<div
			class="bg-blue-200 px-3 py-1.5 shadow-[5px_5px_0_0_var(--color-stone-600)] md:px-4 md:py-2"
		>
			modes
		</div>
		<div
			class="bg-violet-200 px-3 py-1.5 shadow-[5px_5px_0_0_var(--color-stone-600)] md:px-4 md:py-2"
		>
			enharmonics
		</div>
	</div>
	<div class="text-center text-base sm:text-lg lg:text-xl xl:text-2xl">
		while preserving <span
			class="underline decoration-stone-500 decoration-dotted underline-offset-4 sm:underline-offset-5 xl:underline-offset-6"
			>semantic meaning</span
		> in tonal music.
	</div>
</div>

<Keyboard />
