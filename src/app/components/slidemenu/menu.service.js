(function() {
    'use strict';

    angular
        .module('zlimsui')
        .factory('menu', ['$location', menuService]);

    /** @ngInject */
    function menuService($location) {
        var sections = [{
            name: 'Dashborad',
            state: 'home.autocomplete',
             type: 'link'
        }];
        sections.push({
            name: 'demo',
            type: 'toggle',
            pages: [{
                name: 'autocompelte',
                type: 'link',
                state: 'home.autocomplete',
                icon: 'fa fa-square-o'
            }, {
                name: 'button sheet',
                state: 'home.buttonsheet',
                type: 'link',
                icon: 'fa fa-square-o'
            }]
        });

        sections.push({
            name: 'Resource',
            type: 'toggle',
            pages: [{
                name: 'ResourceTemplate',
                type: 'link',
                state: 'home.resourcetemplate',
                icon: 'fa fa-square-o'
            }, {
                name: 'ResourceInstance',
                state: 'home.buttonsheet',
                type: 'link',
                icon: 'fa fa-square-o'
            }]
        });

        var self;

        return self = {
            sections: sections,

            toggleSelectSection: function(section) {
                self.openedSection = (self.openedSection === section ? null : section);
            },
            isSectionSelected: function(section) {
                return self.openedSection === section;
            },

            selectPage: function(section, page) {
                page && page.url && $location.path(page.url);
                self.currentSection = section;
                self.currentPage = page;
            }
        };
    }
})();
