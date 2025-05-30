<script lang="ts">
	import Keyboard from '$lib/keyboard.svelte';
	import Scales from '$lib/scales.svelte';
</script>

<svelte:head>
	<title>31 Tone PCS</title>
</svelte:head>

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

<div
	class="3xl:w-7xl mx-auto flex w-full flex-col gap-6 px-4 pt-24 sm:px-8 md:gap-12 lg:w-4xl xl:w-5xl 2xl:w-6xl"
>
	<section
		class="flex w-full flex-col gap-4 border-4 border-stone-400 bg-stone-600 p-8 text-white shadow-[7px_7px_0_0_var(--color-stone-500)]"
	>
		<h2 class="text-lg sm:text-xl lg:text-2xl xl:text-3xl">Keys / modes</h2>
		<ul class="list-inside list-[square] text-sm lg:text-base xl:text-lg">
			<li>
				We define a key or mode as a sequence of 17 perfect fifths:
				<ul class="list-inside list-[square] pl-4 text-sm lg:text-base xl:text-lg">
					<li>7 diatonic scale degrees.</li>
					<li>5 chromatically raised degrees.</li>
					<li>5 chromatically lowered degrees.</li>
				</ul>
			</li>
			<li>
				This is because <span
					class="underline decoration-stone-200 decoration-dotted underline-offset-4 sm:underline-offset-5 xl:underline-offset-6"
					>well-behaved</span
				>
				chromatically altered notes resolve by
				<span
					class="underline decoration-stone-200 decoration-dotted underline-offset-4 sm:underline-offset-5 xl:underline-offset-6"
					>diatonic half-step</span
				> in the direction of their alteration. Any more notes would be enharmonic to diatonic scale
				degrees, and have nowhere available to correctly resolve to.
			</li>
		</ul>
	</section>
</div>

<Scales />

<!-- <div -->
<!-- 	class="3xl:w-7xl mx-auto mb-16 flex w-full flex-col gap-6 px-4 pt-24 sm:px-8 md:gap-12 lg:w-4xl xl:w-5xl 2xl:w-6xl" -->
<!-- > -->
<!-- 	<div -->
<!-- 		class="flex w-full flex-col gap-2 border-4 border-stone-700 bg-white p-8 text-center shadow-[5px_5px_0_0_var(--color-stone-500)] sm:w-52 sm:text-left" -->
<!-- 	> -->
<!-- 		<h2 class="mb-2 text-center text-2xl">Contents</h2> -->
<!-- 		<a href="#why" class="hover:text-stone-300 hover:*:decoration-stone-300"> -->
<!-- 			<span -->
<!-- 				class="underline decoration-stone-500 decoration-dotted underline-offset-4 sm:underline-offset-5 xl:underline-offset-6" -->
<!-- 				>Why</span -->
<!-- 			>?</a -->
<!-- 		> -->
<!-- 		<a href="#how" class="hover:text-stone-300 hover:*:decoration-stone-300"> -->
<!-- 			<span -->
<!-- 				class="underline decoration-stone-500 decoration-dotted underline-offset-4 sm:underline-offset-5 xl:underline-offset-6" -->
<!-- 				>How</span -->
<!-- 			>?</a -->
<!-- 		> -->
<!-- 	</div> -->
<!---->
<!-- 	<section -->
<!-- 		id="how" -->
<!-- 		class="flex w-full flex-col gap-2 border-4 border-stone-700 bg-white p-8 shadow-[5px_5px_0_0_var(--color-stone-500)]" -->
<!-- 	> -->
<!-- 		<h2 class="text-3xl">How?</h2> -->
<!-- 		<p>todo</p> -->
<!-- 	</section> -->
<!-- </div> -->
