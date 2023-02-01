<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ headerContent } = data);
	$: $headerContent = 'This is the root page.';
</script>

<a href="/some-other-page">Go to some other page</a>
