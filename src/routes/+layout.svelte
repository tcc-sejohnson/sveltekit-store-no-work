<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	$: ({ headerContent } = data);
</script>

<h1>{$headerContent}</h1>
<slot />
