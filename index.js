export default function (kibana) {
  return new kibana.Plugin({
    uiExports: {
      visTypes: [ 'plugins/kibana-viz-leaving-button/leaving-button' ]
    },

    init(server, options) {
      // Must be empty
    }
  });
};
