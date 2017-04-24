// public parts of the plugin (i.e. parts that reside in the public folder and will be transfered to the client)
// must be AMD modules (RequireJS)
define(function (require) {

  // Includes
  require('plugins/kibana-viz-leaving-button/leaving-button.css');
  require('plugins/kibana-viz-leaving-button/leaving-button-controller');

  // Register the below provider to the visualization registry
  require('ui/registry/vis_types').register(LeavingButtonProvider);

  // The provider function must return the visualization
  function LeavingButtonProvider(Private) {
    // Load TemplateVisType
    var TemplateVisType = Private(require('ui/template_vis_type/template_vis_type'));

    // Return a new instance describing this visualization
    return new TemplateVisType({
      name: 'kibana-viz-leaving-button', // the internal id of the visualization
      title: 'Leaving Button', // the name shown in the visualize list
      icon: 'fa-share', // the class of the font awesome icon for this
      description: 'Leaving Button plugin', // description shown to the user
      requiresSearch: false, // Cannot be linked to a search
      template: require('plugins/kibana-viz-leaving-button/leaving-button.html'), // Load the template of the visualization
      params: {
        editor: require('plugins/kibana-viz-leaving-button/leaving-button-editor.html'), // Use this HTML as an options editor for this vis
        defaults: { // Set default values for paramters (that can be configured in the editor)
          url: 'http://localhost:8080/testovacia_url'
        }
      }
    });
  }

  // Return the provider, so you potentially load it with RequireJS.
  // This isn't mandatory, but since all Kibana plugins do this, you might
  // want to also return the provider.
  return LeavingButtonProvider;

});
