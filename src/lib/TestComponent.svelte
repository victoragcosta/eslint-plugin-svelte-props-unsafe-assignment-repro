<script lang="ts">
	import type { Snippet } from "svelte";

	interface TestComponentProps {
		children: Snippet;
	}

	// This generates the error Unsafe assignment of an `any` value. [@typescript-eslint/no-unsafe-assignment]
	let { children }: TestComponentProps = $props();
</script>

<pre>{@render children()}</pre>
