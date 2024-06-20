<script lang="ts">
	import type { Snippet } from "svelte";

	interface LayoutProps {
		children: Snippet;
	}

	let { children }: LayoutProps = $props() as LayoutProps;
</script>

{@render children()}

<style>
	:global(*) {
		box-sizing: border-box;
	}
</style>
