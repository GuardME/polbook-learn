// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import wixData from 'wix-data';

$w.onReady(function () {
	async function populateInterest() {
		const topicsQueryResult = await wixData.query("Topics").find();
		const topics = topicsQueryResult.items;
		$w('#interest-tags').options = topics.map((topic) => ({
			label: topic.title,
			value: topic.title
		}))		
	}
	populateInterest();
});