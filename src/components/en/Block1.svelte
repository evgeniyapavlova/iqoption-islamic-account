<script>
	import ImageWrap from '../common/ImageWrap.svelte';
</script>

<section>
	<h2>IQ Option</h2>
	<p>
		IQ Option is an online trading platform that caters to a wide range of investment preferences.
		It has a large user base, with millions of registered members from more than 213 countries
		around the world. This comprehensive guide examines everything you would like to know about IQ
		Option, from its basic features to advanced functions, including the particular Islamic account
		option.
	</p>

	<ImageWrap imageW={1280} imageH={777} path="/ar/img1.png" fullImage={[1333, 809]} darkBgr />

	<h2>IQ Option Profile</h2>
	<p>
		To better understand the IQ Option platform, it’s important to get acquainted with some basic
		information:
	</p>

	<div class="table-wrap">
		<table>
			<tr>
				<td>Feature</td>
				<td>Details</td>
			</tr>
			<tr>
				<td>Official Website</td>
				<td>iqoption.com</td>
			</tr>
			<tr>
				<td>Headquarters</td>
				<td>Limassol, Cyprus</td>
			</tr>

			<tr>
				<td>Founded Year</td>
				<td>2013</td>
			</tr>

			<tr>
				<td>License</td>
				<td>CySEC (Cyprus Securities and Exchange Commission)</td>
			</tr>

			<tr>
				<td>Product Offered</td>
				<td>Forex, Stocks, Options, Commodities, ETFs, Cryptocurrencies, Indices</td>
			</tr>

			<tr>
				<td>Supported Currencies</td>
				<td>USD, EUR, GBP, RUB, and more</td>
			</tr>

			<tr>
				<td>Deposit Methods</td>
				<td
					>Credit/Debit Cards, Bank Transfer, E-wallets (Skrill, Neteller, WebMoney), Cryptocurrency</td
				>
			</tr>

			<tr>
				<td>Minimum Deposit</td>
				<td>$10</td>
			</tr>

			<tr>
				<td>Withdrawals Methods</td>
				<td>Same as deposit methods</td>
			</tr>

			<tr>
				<td>Minimum Withdrawal</td>
				<td>$2</td>
			</tr>

			<tr>
				<td>Minimum Trade</td>
				<td>$1</td>
			</tr>

			<tr>
				<td>Leverage</td>
				<td>Up to 1:500 (varies by instrument)</td>
			</tr>

			<tr>
				<td>Account types</td>
				<td>Demo, Standard, VIP</td>
			</tr>

			<tr>
				<td>Mobile trading</td>
				<td>Available on iOS and Android</td>
			</tr>

			<tr>
				<td>Islamic Account</td>
				<td>Available (swap-free)</td>
			</tr>

			<tr>
				<td>Countries not available</td>
				<td>USA, Australia, Canada, Russia, Japan, Israel, Iran, Syria, and others</td>
			</tr>

			<tr>
				<td>Affiliate program</td>
				<td>Available with a competitive commission structure</td>
			</tr>

			<tr>
				<td>Customer Support</td>
				<td>24/7 via email, live chat, and phone</td>
			</tr>
		</table>
	</div>

	<h2>What is IQ Option?</h2>
	<p>
		IQ Option is an online trading platform that enables users to trade various financial
		instruments like forex, stocks, digital options, binary options, cryptocurrencies, and more. IQ
		Option was established in 2013, and from a simple binary options broker, it has evolved into a
		complete trading platform with various investment options.
	</p>
	<p>
		What sets IQ Option apart from most of its competitors is its easy-to-use interface with
		sophisticated trading instruments. The site is ideal for beginners as well as professional
		traders, with tutorials as well as sophisticated analysis capabilities. With a minimum deposit
		of just $10, IQ Option has made financial markets once involving much higher amounts of money
		accessible to the masses.
	</p>
	<p>
		One of the biggest pluses of IQ Option is the ability to open a free $10,000 demo account. This
		allows you to practice trading without risking your own money – something highly valuable for
		beginners.
	</p>

	<ImageWrap imageW={1091} imageH={620} path="/ar/img.jpg" fullImage={[1091, 620]} />

	<h3>Awards</h3>
	<p>
		IQ Option's commitment to innovation and service excellence hasn't gone unnoticed in the
		industry. The award-winning platform has garnered numerous accolades over the years:
	</p>

	<ul>
		<li>Best Trading Platform 2022 (FX Daily Info)</li>
		<li>Best Mobile Trading App Global 2023 (World Business Outlook)</li>
		<li>Best Trading Experience 2022 (World Forex Award )</li>
		<li>Most Innovative Trading Platform Globe 2023 (International Business Magazine)</li>
		<li>Excellence In Forex Platform Global 2022 (Global Business Review Magazine)</li>
		<li>Best Technology Application (The Web Marketing Association)</li>
		<li>Century International Quality Gold ERA Award (Business Initiative Directions Group)</li>
	</ul>

	<p>
		These awards underscore IQ Option's position as an industry leader and its dedication to
		providing a superior trading experience.
	</p>

	<h3>Regulation and Licensing</h3>
	<p>
		IQ Option is regulated by the Cyprus Securities and Exchange Commission (CySEC) by its parent
		company, IQ Option Europe Ltd. IQ Option Ltd services for users who are not within the European
		Economic Area are offered by IQ Option Ltd, which is registered in St. Vincent and the
		Grenadines.
	</p>

	<h3>Safety</h3>
	<p>
		IQ Option guarantees security through client fund segregation from operating accounts, data
		encryption using SSL, fraud prevention through verification processes, regular security audits,
		and compliance with global data protection standards. While no platform is entirely risk-free,
		these measures demonstrate IQ Option's commitment to maintaining a secure trading environment.
	</p>
</section>

<style>
	tr td:first-child {
		font-weight: 600;
		background-color: var(--secondary-bgr);
	}
	.table-wrap {
		margin-bottom: 40px;
		margin-top: 30px;
	}

	@media screen and (max-width: 600px) {
		.table-wrap {
			overflow: scroll;
		}
	}
</style>
