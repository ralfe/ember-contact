Contact = Ember.Application.create({
});

Contact.ApplicationController = Ember.Controller.extend({
    firstName: "Dagobert",
    lastName: "Duck"
});

Contact.Router.map(function() {
    this.route("about", { path: "/about" });
});
