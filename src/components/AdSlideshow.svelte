<script>
import { store } from "$lib/store";
import { onDestroy } from "svelte";

let currAd = 0;

let int = setInterval(() => {
	if(!$store?.schedules) return;
	
	console.log(currAd, $store.schedules)
	++currAd > ($store.schedules.length-1) ? currAd = 0 : currAd;
}, 10000);

onDestroy(()=>clearInterval(int));
</script>

<div>
	{#if $store?.schedules}
		<img src='{$store.schedules[currAd].ads[0].img_url}' />
	{:else}
		...loading ads
	{/if}
</div>


<style>
	div {
		@apply basis-5/12
	}
</style>