<script lang="ts">
	import type { Snippet } from "svelte";

	interface LayoutProps {
		children: Snippet;
	}

	// This generates the error Unsafe assignment of an `any` value. [@typescript-eslint/no-unsafe-assignment]
	let { children }: LayoutProps = $props();
</script>

{@render children()}

