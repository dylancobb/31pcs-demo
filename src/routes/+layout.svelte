<script lang="ts">
	import '../app.css';

	let { children } = $props();
	export const ssr = false;
	export const prerender = true;
</script>

{@render children()}
