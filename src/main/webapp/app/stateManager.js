setTimeout(function () {
    //EME.generateImages();
    EME.stateManager = Ember.StateManager.create({
        rootElement: '#mainArea',
        initialState: 'showPhotoView',

        showPhotoView: Ember.State.create({
            enter: function (stateManager) {
                this._super(stateManager);
                EME.PhotoListController.set('content', EME.store.findAll(EME.Photo));
            },

            view: Ember.ContainerView.create({
                childViews: ['photoListView'],

                photoListView: Ember.View.extend({
                    templateName: 'photo-view-list',
                    contentBinding: 'EME.PhotoListController.content',
                    classNames: ['thumbnailViewList']
                })
            })
        })
    });
}, 50);