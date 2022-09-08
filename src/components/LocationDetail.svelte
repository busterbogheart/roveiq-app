<script>
import { store, selectedLocation as loc } from "$lib/store";
</script>

<div class='container'>
	
{#if $store && $loc}
	<img src='{$loc.banner_img}' />
	<span class='logo'>
		<img src='{$loc.logo_img}'/>
		<h2>{$loc.name}</h2>
	</span>
	<span>{$loc.description}</span>
	<div>{$loc.address1 + ($loc.address2 ?? '')}</div>
{:else}
	
{/if}
	
</div>


<style>
	.container {
		@apply basis-5/12 bg-orange-100;	
	}
	.container > * {
		@apply p-2
	}
	
	.logo {
		@apply flex justify-between
	}
	
	.logo img{
		@apply w-1/3;
	}
	
	.logo h2{
		@apply w-1/3;
	}
</style>