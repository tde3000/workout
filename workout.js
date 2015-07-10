// Create the collection for workouts
Workouts = new Mongo.Collection("workouts");

if(Meteor.isClient){
	Template.datepicker.rendered = function(){
		document.getElementById('date').valueAsDate = new Date();
		Session.set("date", document.getElementById('date').value);
	};	

	Template.datepicker.events({
		"change .date-picker": function(){
		Session.set("date", document.getElementById('date').value);
		}
	});

	Template.body.helpers({
		date: function(){
			return Session.get("date");
		},
		workouts: function(){
			return Workouts.find({});
		}
	});


}


