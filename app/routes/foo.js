// Foo Route

import Ember from 'ember';


// Using Object to keep persistent progress number
var TimeHolder = Ember.Object.extend({
	// Limit is always 100
	limit: 100,
	// Progress starts at 0 and goes to 100
	progress: 0,
	// randWait is a number that is between 0 and 10
	randWait: 0,
});

var time_holder = new TimeHolder();


export default Ember.Route.extend({
	// @desc: Model hook for Foo Route (sets persistence model of Foo)
	// @params: None
	// @returns: Array Object
	model: function () {
		var limit = time_holder.get("limit"),
			progress = time_holder.get("progress"),
			randWait;

		// Set time_holder params to current random value
		time_holder.set("randWait", Math.floor(Math.random() * 10));
		randWait = time_holder.get("randWait");

		// Increment the progress by the random value
		time_holder.set("progress", progress + (randWait));

		if (progress < limit) {
			return {"progress": progress.toString() + "%"};
		} else {
			time_holder.set("progress", 0);
			return {"progress": "100%"};
		}
	},


	actions: {
		// @desc: refresh UI function, starts a polling interval
		// @params: None
		// @returns: Void
		refresh: function () {
			var randWait,
				progress = time_holder.get("progress");
			// Mimicks a 1 second Poll interval
			setInterval(function () {
				// Invoke model hook
				this.refresh();
			}.bind(this), 1000);
			
		},
	},
});


