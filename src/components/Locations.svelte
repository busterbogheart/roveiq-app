<script>
	import { store, selectedLocation } from '$lib/store';
	import { onMount } from 'svelte';
	
	$: {
		if($store){
			locations = $store.locations;
		}
	}
	let locations = [];
	
	onMount(()=>{
			
		return ()=>{} //cleanup
	})
</script>

<div>
	<h2>Locations</h2>
	
	{#if locations?.length}
		<ul>
			{#each locations as loc (loc.id)}
				<button on:click={selectedLocation.set(loc)}>
					<span>{loc.name}</span>
					<span>{loc.address1 + (loc.address2 ?? '')}</span>
				</button>
			{/each}
		</ul>
	{:else}
		...loading
	{/if}

</div>


<style>
	div{
		@apply bg-fuchsia-50 flex flex-auto basis-2/12 flex-col;
	}
	
	button{
		@apply border-b-2 w-full border-orange-300 p-1 py-2;
	}
	
	button span:last-child{
		@apply text-xs block;
	}
</style>
