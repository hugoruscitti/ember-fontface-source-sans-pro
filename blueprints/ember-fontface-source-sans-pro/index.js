module.exports = {
  description: 'Installs the bower dependency.',
  normalizeEntityName: function() {

  },

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }


  afterInstall: function(options) {
    return this.addBowerPackageToProject('fontface-source-sans-pro');
  }
};
