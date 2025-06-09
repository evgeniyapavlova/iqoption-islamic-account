<script>
	import meta__img from '$lib/images/meta__img.jpg';
	import AllBlocks from '../components/AllBlocks.svelte';

	const title =
		'لنتعرَّف على منصَّة IQ Option - ما هي وما آلية عملها كوسيط مالي، مع نظرة على الحساب الإسلامي لديها';
	const desc =
		'IQ Option: Descubra como funciona, o que é e como usar esta popular plataforma de negociação online. Saiba tudo sobre a corretora que conquistou o Brasil.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:image" content={meta__img} />

	<meta name="twitter:site" content="iq-trade.br.com" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={desc} />
	<meta name="twitter:image" content={meta__img} />
	<link
		rel="preload"
		as="image"
		href="/images/bg_intro.webp"
		type="image/webp"
		fetchpriority="high"
	/>
</svelte:head>

<AllBlocks />
