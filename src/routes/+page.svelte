<script>
	import { base } from '$app/paths';
	import meta__img from '$lib/images/meta__img.jpg';
	import AllBlocks from '../components/AllBlocks.svelte';

	const title =
		'لنتعرَّف على منصَّة IQ Option - ما هي وما آلية عملها كوسيط مالي، مع نظرة على الحساب الإسلامي لديها';
	const desc =
		'تُعدُّ IQ Option منصَّة تداوُل إلكترونية مُتاحة عبر الإنترنت، مُصمَّمة لتلبية طيف واسع من التفضيلات الاستثمارية لدى العملاء. تضمُّ قاعدة مستخدمين واسعة، مع ملايين الأعضاء المُسجَّلين لديها عبر ما يزيد عن 213 دولة حول العالم. ستجد في هذا الدليل الإرشاديّ الشامل إجاباتٍ لكل ما يخطر ببالك حول منصَّة IQ Option، بدءًا من أبرز مزاياها الأساسية ووصولًا إلى الوظائف المتقدِّمة، بما يشمل ميزة الحساب الإسلامي على وجه الخصوص.';
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
		href="{base}/images/bg_intro.webp"
		type="image/webp"
		fetchpriority="high"
	/>
</svelte:head>

<AllBlocks />
