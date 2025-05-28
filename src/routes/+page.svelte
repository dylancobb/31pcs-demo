<script lang="ts">
	import Keyboard from '$lib/keyboard.svelte';
</script>

<div class="mt-24 flex flex-col items-center gap-4 text-center">
	<h1 class="text-3xl lg:text-4xl xl:text-5xl">31-Tone Pitch Class Sets</h1>
	<div class="text-lg lg:text-xl xl:text-2xl">
		a simple system for representing, querying and manipulating
	</div>
	<div class="flex justify-center gap-4 text-sm lg:text-base xl:text-lg">
		<div class="bg-green-200 px-4 py-2 shadow-[5px_5px_0_0_#44403b]">notes</div>
		<div class="bg-red-200 px-4 py-2 shadow-[5px_5px_0_0_#44403b]">intervals</div>
		<div class="bg-yellow-200 px-4 py-2 shadow-[5px_5px_0_0_#44403b]">keys</div>
		<div class="bg-blue-200 px-4 py-2 shadow-[5px_5px_0_0_#44403b]">modes</div>
		<div class="bg-violet-200 px-4 py-2 shadow-[5px_5px_0_0_#44403b]">enharmonics</div>
	</div>
	<div class="text-center text-lg lg:text-xl xl:text-2xl">
		while preserving semantic meaning in tonal music.
	</div>
</div>

<Keyboard />
