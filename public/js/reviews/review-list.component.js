angular.module('foodApp').component('reviewList', {
	templateUrl: 'js/reviews/review-list.template.html',
	controller: function ReviewListController(){
		this.reviews = [
		{
			name: 'review01',
			title: 'Custards Last Stand',
			date: '2013-09-01',
			description: 'An overlooked gem, this roadside stand serves up the best hot dogs this side of the Mississippi River.',
			image: 'resto1.png'
		},
		{
			name: 'review1404',
			title: 'Grillenium',
			date: '2014-04-15',
			description: 'You haven\t had grilled cheese until you\'ve sampled the Star Wars-themed sandwiches at this venerable cantina.',
			image: 'resto2.png'
		},
		{
			name: 'review1210',
			title: 'Lebanese Scrooge',
			date: '2012-10-01',
			description: 'Lebaneser Scrooge is my go-to spot for delicious falafels and shish kababobs.',
			image: 'resto3.png'
		},
		{
			name: 'review1810',
			title: 'Bread Zeppelin',
			date: '2012-10-20',
			description: 'The friendly servers at Bread Zeppelin know their breads, from marble rye to a French baguette. Don\t miss the selection of salads either.',
			image: 'resto4.png'
		},
		{
			name: 'review1811x',
			title: 'Thai Tanic',
			date: '2012-10-20',
			description: 'The best Thai noodles in town, this hole-in-the-wall shop is especially known for its curry-infused dishes.',
			image: 'resto5.png'
		}
		]
	}
})
