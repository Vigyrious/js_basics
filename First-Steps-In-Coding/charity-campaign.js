function charityCampaign(days_count, bakers_count, cakes_count, waffles_count, pancakes_count) {
        let cakes = 45 * Number(cakes_count);
        let waffles = 5.8 * Number(waffles_count);
        let pancakes = 3.2 * Number(pancakes_count);
        let sum_day = (cakes + waffles + pancakes) * Number(bakers_count)
        let campaign_sum = sum_day * Number(days_count);
        console.log(campaign_sum - (campaign_sum/8))
}
charityCampaign("23","8","14","30","16")