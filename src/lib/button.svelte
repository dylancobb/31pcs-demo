<script lang="ts">
	import { hoverColours, colours } from './utils';

	let { colour, children, ...rest } = $props();
</script>

<button
	{...rest}
	class="{colours[colour]} {hoverColours[
		colour
	]} h-8 px-4 shadow-[5px_5px_0_0_var(--color-stone-600)] disabled:bg-stone-300"
>
	{@render children?.()}
</button>
