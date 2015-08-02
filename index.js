/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-fontface-source-sans-pro',

  included: function included(app) {
    this.app = app;
    this._super.included(app);

    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/source-sans-pro.css");
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/EOT/SourceSansPro-Black.eot", { destDir: "EOT" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/EOT/SourceSansPro-BlackIt.eot", { destDir: "EOT" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/EOT/SourceSansPro-Bold.eot", { destDir: "EOT" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/EOT/SourceSansPro-BoldIt.eot", { destDir: "EOT" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/EOT/SourceSansPro-ExtraLight.eot", { destDir: "EOT" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/EOT/SourceSansPro-ExtraLightIt.eot", { destDir: "EOT" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/EOT/SourceSansPro-It.eot", { destDir: "EOT" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/EOT/SourceSansPro-Light.eot", { destDir: "EOT" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/EOT/SourceSansPro-LightIt.eot", { destDir: "EOT" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/EOT/SourceSansPro-Regular.eot", { destDir: "EOT" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/EOT/SourceSansPro-Semibold.eot", { destDir: "EOT" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/EOT/SourceSansPro-SemiboldIt.eot", { destDir: "EOT" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/OTF/SourceSansPro-Black.otf", { destDir: "OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/OTF/SourceSansPro-BlackIt.otf", { destDir: "OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/OTF/SourceSansPro-Bold.otf", { destDir: "OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/OTF/SourceSansPro-BoldIt.otf", { destDir: "OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/OTF/SourceSansPro-ExtraLight.otf", { destDir: "OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/OTF/SourceSansPro-ExtraLightIt.otf", { destDir: "OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/OTF/SourceSansPro-It.otf", { destDir: "OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/OTF/SourceSansPro-Light.otf", { destDir: "OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/OTF/SourceSansPro-LightIt.otf", { destDir: "OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/OTF/SourceSansPro-Regular.otf", { destDir: "OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/OTF/SourceSansPro-Semibold.otf", { destDir: "OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/OTF/SourceSansPro-SemiboldIt.otf", { destDir: "OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/TTF/SourceSansPro-Black.ttf", { destDir: "TTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/TTF/SourceSansPro-BlackIt.ttf", { destDir: "TTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/TTF/SourceSansPro-Bold.ttf", { destDir: "TTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/TTF/SourceSansPro-BoldIt.ttf", { destDir: "TTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/TTF/SourceSansPro-ExtraLight.ttf", { destDir: "TTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/TTF/SourceSansPro-ExtraLightIt.ttf", { destDir: "TTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/TTF/SourceSansPro-It.ttf", { destDir: "TTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/TTF/SourceSansPro-Light.ttf", { destDir: "TTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/TTF/SourceSansPro-LightIt.ttf", { destDir: "TTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/TTF/SourceSansPro-Regular.ttf", { destDir: "TTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/TTF/SourceSansPro-Semibold.ttf", { destDir: "TTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/TTF/SourceSansPro-SemiboldIt.ttf", { destDir: "TTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/OTF/SourceSansPro-Black.otf.woff", { destDir: "WOFF/OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/OTF/SourceSansPro-BlackIt.otf.woff", { destDir: "WOFF/OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/OTF/SourceSansPro-Bold.otf.woff", { destDir: "WOFF/OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/OTF/SourceSansPro-BoldIt.otf.woff", { destDir: "WOFF/OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/OTF/SourceSansPro-ExtraLight.otf.woff", { destDir: "WOFF/OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/OTF/SourceSansPro-ExtraLightIt.otf.woff", { destDir: "WOFF/OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/OTF/SourceSansPro-It.otf.woff", { destDir: "WOFF/OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/OTF/SourceSansPro-Light.otf.woff", { destDir: "WOFF/OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/OTF/SourceSansPro-LightIt.otf.woff", { destDir: "WOFF/OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/OTF/SourceSansPro-Regular.otf.woff", { destDir: "WOFF/OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/OTF/SourceSansPro-Semibold.otf.woff", { destDir: "WOFF/OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/OTF/SourceSansPro-SemiboldIt.otf.woff", { destDir: "WOFF/OTF" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/TTF/SourceSansPro-Black.ttf.woff", { destDir: "" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/TTF/SourceSansPro-BlackIt.ttf.woff", { destDir: "" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/TTF/SourceSansPro-Bold.ttf.woff", { destDir: "" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/TTF/SourceSansPro-BoldIt.ttf.woff", { destDir: "" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/TTF/SourceSansPro-ExtraLight.ttf.woff", { destDir: "" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/TTF/SourceSansPro-ExtraLightIt.ttf.woff", { destDir: "" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/TTF/SourceSansPro-It.ttf.woff", { destDir: "" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/TTF/SourceSansPro-Light.ttf.woff", { destDir: "" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/TTF/SourceSansPro-LightIt.ttf.woff", { destDir: "" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/TTF/SourceSansPro-Regular.ttf.woff", { destDir: "" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/TTF/SourceSansPro-Semibold.ttf.woff", { destDir: "" });
    this.app.import(app.bowerDirectory + "/fontface-source-sans-pro/fonts/WOFF/TTF/SourceSansPro-SemiboldIt.ttf.woff", { destDir: "" });


  }

};
