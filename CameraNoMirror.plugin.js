/**
 * @name CameraNoMirror
 * @author lbineau
 * @version 1.0.0
 * @description Deactivate mirror effect for your own camera
 */

module.exports = (_ => {
   const config = {
      "info": {
         "name": "CameraNoMirror",
         "author": "lbineau",
         "version": "1.0.0",
         "description": "Mirror your own camera"
      }
   };

   return class {
      getName () {return config.info.name;}
      getAuthor () {return config.info.author;}
      getVersion () {return config.info.version;}
      getDescription () {return config.info.description;}
      
      start () {this.disableMirror();}
      stop () {this.enableMirror();}

      disableMirror () {
         const css = `
            [class*="pictureInPictureVideo-"] [class*="mirror-"],
            .media-engine-video[class*="mirror-"] {
               transform: none;
            }
         `;
         global.BdApi.injectCSS('mirror', css)
         global.BdApi.showToast('Your webcam mirror is disabled', {type:"success", icon: true})
      }
      enableMirror () {
         global.BdApi.clearCSS('mirror')
         global.BdApi.showToast('Your webcam mirror is enabled', {type:"info", icon: true})
      }
   }
})();
