<script lang="ts">
	import IntervalsText from '$lib/intervals-text.svelte';
	import Intervals from '$lib/intervals.svelte';
	import Keyboard from '$lib/keyboard.svelte';
	import PageHeader from '$lib/page-header.svelte';
	import ScalesText from '$lib/scales-text.svelte';
	import Scales from '$lib/scales.svelte';
</script>

<svelte:head>
	<title>31 Tone PCS</title>
</svelte:head>

<PageHeader />

<Keyboard />

<ScalesText />

<Scales />

<IntervalsText />

<Intervals />
