import { readable, writable } from 'svelte/store';

const _fetchData = async() => {
	let res = await fetch('https://testapi.io/api/ndenlinger/roveiq');
	res = await res.json();
	return res;
}

export const store = readable({}, set => {
	_fetchData().then(res => set(res.data))
	
	return ()=>{}; //cleanup
});

export const selectedLocation = writable();