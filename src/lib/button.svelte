<script lang="ts">
	import { hoverColours, colours } from './utils';

	let { colour, children, ...rest } = $props();
</script>

<button
	{...rest}
	class="{colours[colour]} {hoverColours[
		colour
	]} relative flex h-8 items-center justify-center px-3 py-1.5 text-sm shadow-[5px_5px_0_0_var(--color-stone-600)] disabled:bg-stone-300 md:px-4 md:py-2 lg:py-5 lg:text-base xl:text-lg"
>
	{@render children?.()}
</button>
