<script>
	import { base } from '$app/paths';
	import meta__img from '$lib/images/meta__img.jpg';
	import AllBlocks from '../components/AllBlocks.svelte';

	const title =
		'لنتعرَّف على منصَّة IQ Option – ما هي وما آلية عمل هذا الوسيط المالي، وهل تُوفِّر حسابًا إسلاميًا';
	const desc =
		' استكشِف آلية عمل منصَّة IQ Option، وتعرَّف على أبرز ميزاتها، إضافةً إلى مزايا الحساب الإسلامي المُصمَّم خصيصًا للمُتداوِلين المُلتزمين بضوابط أخلاقيَّة ودينيَّة خاصَّة.';
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

	<meta property="og:locale" content="ar_SA" />

	<link rel="alternate" hreflang="ar" href="https://iqoptionsaudi.com/" />
	<link rel="alternate" hreflang="en" href="https://iqoptionsaudi.com/en/" />
	<link rel="alternate" hreflang="x-default" href="https://iqoptionsaudi.com/" />

	<link rel="canonical" href="https://iqoptionsaudi.com" />

	<link
		rel="preload"
		as="image"
		href="{base}/images/bg_intro.webp"
		type="image/webp"
		fetchpriority="high"
	/>
</svelte:head>

<div dir="rtl">
	<AllBlocks />
</div>
