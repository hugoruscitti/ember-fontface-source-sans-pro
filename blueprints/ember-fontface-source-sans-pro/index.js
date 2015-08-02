module.exports = {
  normalizeEntityName: function() {

  },

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }


  afterInstall: function(options) {
    this.addBowerPackageToProject('fontface-source-sans-pro', '*');
  }
};
