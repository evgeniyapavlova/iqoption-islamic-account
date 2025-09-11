<script>
	import { base } from '$app/paths';
	import meta__img from '$lib/images/meta__img_en.jpg';
	import AllBlocks from '../../components/en/AllBlocksEN.svelte';

	const title = 'IQ Option - What Is and How Does Broker Work, Is Islamic Account';
	const desc =
		'Explore how IQ Option works, its main features, and the benefits of an Islamic account designed for traders with specific ethical requirements.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:image" content={meta__img} />

	<meta name="twitter:site" content="iqoptionsaudi.com" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={desc} />
	<meta name="twitter:image" content={meta__img} />

	<meta property="og:locale" content="en_US" />

	<link rel="alternate" hreflang="ar" href="https://iqoptionsaudi.com/" />
	<link rel="alternate" hreflang="en" href="https://iqoptionsaudi.com/en/" />
	<link rel="alternate" hreflang="x-default" href="https://iqoptionsaudi.com/en/" />

	<link rel="canonical" href="https://iqoptionsaudi.com" />

	<link
		rel="preload"
		as="image"
		href="{base}/images/bg_intro.webp"
		type="image/webp"
		fetchpriority="high"
	/>
</svelte:head>

<AllBlocks />
