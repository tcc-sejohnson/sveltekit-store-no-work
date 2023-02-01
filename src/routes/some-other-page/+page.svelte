<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ headerContent } = data);
	$: $headerContent = 'This is some other page.';
</script>

<a href="/">Go home</a>
