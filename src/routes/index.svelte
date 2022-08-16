<script lang="ts">
	import type { Guest } from 'src/types';
	import '../app.css';

	import Card from '../components/Card.svelte';

	export let guests: Guest[];
	export let guestCount: number;

	let openAllCards = false;

	const toggleCards = () => {
		openAllCards = !openAllCards;
	};
</script>

<svelte:head>
	<meta property="og:title" content="Wedding Guest List" />
	<meta property="og:description" content="There are {guestCount} guests" />
</svelte:head>

<div class="p-4">
	<h1 class="text-3xl">Wedding Guest List</h1>
	<div class="flex justify-left gap-2 items-center pt-4">
		<button class="rounded bg-slate-300 px-4 py-2" on:click={toggleCards}
			>{openAllCards ? 'Close' : 'Open'} All Cards
		</button>
		<p>There are <span class="font-bold">{guestCount}</span> guests</p>
	</div>
	<div class="flex flex-wrap gap-2 pt-4">
		{#each guests as guest, i}
			<Card {guest} guestNumber={i} open={openAllCards} />
		{/each}
	</div>
</div>
