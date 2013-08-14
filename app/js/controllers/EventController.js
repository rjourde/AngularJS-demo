'use strict';

eventsApp.controller('EventController',
	function EventController($scope) {
		
		$scope.snippet = '<span style="color:red">hi there</span>';
		$scope.boolValue = true;
		$scope.mystyle = {color:'red'};
		$scope.myclass = "blue";
		$scope.buttonDisabled = true;
		$scope.sortorder = 'name';
		$scope.event = {
			name: 'Angular Boot Camp',
			date: '1/1/2013',
			time: '10:30 am',
			location: {
				address: 'Google Headquarters',
				city: 'Moutain View',
				province: 'CA'
			},
			imageUrl: '/img/angularjs-logo.png',
			sessions: [
				{
					name: 'Directives Masterclass',
					creatorName: 'Bob Smith',
					duration: 1,
					level: 'Advanced',
					abstract: 'In this session you will learn the ins and outs of directives!',
					upVoteCount: 0
				},
				{
					name: 'Scopes for fun and profit',
					creatorName: 'John Doe',
					duration: 2,
					level: 'Introductory',
					abstract: 'In this session you will take a closer look at scopes. Learn what they do, how they do it, and how to get them to do it for you.',
					upVoteCount: 0
				},
				{
					name: 'Well Behaved Controllers',
					creatorName: 'Jane Doe',
					duration: 4,
					level: 'Intermediate',
					abstract: 'Controllers are the beginning of everything Angular does. Learn how to craft controllers that will win the respect of your friend and neighbors.',
					upVoteCount: 0
				}
			]
		}
		
		$scope.upVoteSession = function(session){
			session.upVoteCount++;
		}
		
		$scope.downVoteSession = function(session){
			session.upVoteCount--;
		}
	}
);