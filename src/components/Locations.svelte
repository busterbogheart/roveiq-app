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
