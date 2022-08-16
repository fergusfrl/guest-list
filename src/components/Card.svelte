<script lang="ts" module>
	import { slide } from 'svelte/transition';
	import type { Guest } from 'src/types';
	export let guest: Guest;
	export let guestNumber: number;
	export let open = false;

	const toggleCard = () => {
		open = !open;
	};
</script>

<div
	class="border rounded p-5 shadow cursor-pointer hover:bg-slate-50 hover:shadow-md duration-300"
	on:click={toggleCard}
>
	<h6>
		<span class="font-bold">{guestNumber + 1}.</span>
		<span class="text-lg">{guest.name}</span>
	</h6>
	{#if open}
		<div transition:slide class="border-t-2 pt-2 mt-2">
			<p>Nights Accommadation: {guest.requiresAccommodation}</p>
			<p>Email: {guest.email}</p>
			{#if guest.dietryDescription !== ''}
				<p>Dietary Requirements: {guest.dietryDescription}</p>
			{/if}
		</div>
	{/if}
</div>
