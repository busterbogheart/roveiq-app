<script>
	import AdSlideshow from '$lib/components/AdSlideshow.svelte';
	import LocationDetail from '$lib/components/LocationDetail.svelte';
	import Locations from '$lib/components/Locations.svelte';
	import Screen from '$lib/components/Screen.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		return () => {}; //cleanup
	});
</script>

<Screen>
	<Locations />
	<LocationDetail />
	<AdSlideshow />
</Screen>

