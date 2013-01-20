EME.Photo = DS.Model.extend({
    primaryKey: 'id',
    id: DS.attr('string'),
    imageTitle: DS.attr('string'),
    imageUrl: DS.attr('string')
})

EME.PhotoListController = Ember.ArrayProxy.create({
    content: [],
    selected: null
});

EME.SelectedPhotoController = Ember.Object.create({
    contentBinding: 'EME.PhotoListController.selected'
});