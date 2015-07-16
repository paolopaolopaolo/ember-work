import Ember from "ember";

export default Ember.Controller.extend({
	// @desc: Observer function bound to changes in model.progress
	// @params: None
	// @returns: Void
	sexyProgressBarMovements: Ember.observer("model.progress", function () {
		Ember.$(".load-bar").animate({"width": this.get("model.progress").toString() + "%"});
	}),
	
});