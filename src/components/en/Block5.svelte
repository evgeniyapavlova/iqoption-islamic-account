<script>
	import Accordion from '../common/Accordion.svelte';
	const items = [
		{
			q: 'Is IQ Option free?',
			a: 'There is no cost to open an account, and the demo account does not require any deposit. To trade with real money, a minimum of $10 needs to be deposited. There are no fees for subscriptions, but there are trading and service fees that apply.'
		},
		{
			q: 'Is IQ Option a scam?',
			a: "No, IQ Option is not a scam. It's a legitimate trading platform regulated by CySEC in Europe with millions of registered users worldwide. The company has been operating since 2013 and has built a solid reputation in the online trading industry. However, like all trading platforms, there are risks involved in trading financial instruments."
		},
		{
			q: 'Can IQ Option be trusted?',
			a: 'Yes, IQ Option is a trusted broker with appropriate security measures. The platform implements segregated accounts for client funds, uses SSL encryption for data protection, and follows strict verification procedures. That said, trust should be paired with personal responsibility—always trade cautiously and only invest money you can afford to lose.'
		},
		{
			q: 'Is IQ Option legit?',
			a: 'Yes, IQ Option is a safe trading platform licensed by CySEC in Europe with millions of traders across the world. Having been in operation since 2013, it has developed a good name in the online trading sector. However, financial risks are present with all trading platforms.'
		},
		{
			q: 'Is IQ Option safe?',
			a: 'The website emphasizes security through regulatory compliance, client-segregated funds, encryption, security audits, and identity verification procedures. While the processes guarantee safe operation, trading inherently carries financial risks.'
		},
		{
			q: 'Is IQ Option good for beginners?',
			a: 'IQ Option is beginner-friendly as it possesses a simple user experience interface, learning facilities, a low minimum deposit, a free demo account, a simple trading process, and graphical tools that allow beginners to learn with little monetary investment.'
		},
		{
			q: 'Is IQ Option withdrawal safe?',
			a: 'Yes, withdrawals follow standard security procedures like account verification to prevent fraud. Withdrawals are processed to the same payment method used for deposits according to international financial rules.'
		},
		{
			q: 'How much money can I withdraw from IQ Option?',
			a: '<p>There is no withdrawal limit. You can withdraw your entire balance, subject to:</p><ul> <li>Minimum withdrawal amount: $2</li> <li>First monthly withdrawal: Free (later: $31 fee, free for VIP)</li> <li>Verification requirements</li> <li>Varied processing times depending on payment methods</li> </ul>'
		}
	];
</script>

<section>
	<h2>الأسئلة الشائعة</h2>

	{#each items as item, idx}
		{#if idx === 0}
			<Accordion open {item} />{:else}<Accordion {item} />{/if}
	{/each}
</section>

<style>
	h2 {
		margin-bottom: 10px;
	}
	h3 {
		text-align: center;
		margin-bottom: 40px;
		margin-top: 0;
	}
</style>
