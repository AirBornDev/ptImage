define(

  ['knockout', 'CCi18n'],

  function(ko, CCi18n) {

    "use strict";

    return {
      /*
       * Note that "this" is bound to the Widget View Model.
       */      
      resourcesLoaded : function(widget) {
      },

      onLoad : function(widget) { 
      
        /*
         Configuration properties can be accessed as follows:
         */
        console.log(widget.exampleStringProperty());
        console.log(widget.exampleOptionProperty());
        console.log(widget.exampleBooleanProperty());
            
      },

      beforeAppear : function(page) {
      }
    }
  }
);
