/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['knockout', 'appController', 'ojs/ojmodule-element-utils'],
 function(ko, app, moduleUtils) {

    function AboutViewModel() {
      var self = this;

      // Header Config
      self.headerConfig = ko.observable({'view':[], 'viewModel':null});
      moduleUtils.createView({'viewPath':'views/header.html'}).then(function(view) {
        self.headerConfig({'view':view, 'viewModel':new app.getHeaderModel()})
      })

      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.



      // Page Heading Config
      // let button1ClassList = ['mydemo-button__hidden'];
      let button1ClassList = ['oj-button-sm', 'mydemo-button__primary'];
      let button2ClassList = ['oj-button-sm', 'mydemo-button__danger'];
      // define the icon and page heading text
      let pageHeading = {
        bannerIcon: "demo-catalog-icon-24 demo-icon-font-24",
        bannerHeading: "Catalog",
        headingButton1Icon: "oj-fwk-icon oj-fwk-icon-cross02",
        headingButton1Class: button1ClassList,
        headingButton1Text: "Void",
        headingButton2Icon: "demo-copy-icon-24 demo-icon-font-24",
        headingButton2Class: button2ClassList,
        headingButton2Text: "Copy"
      };
      self.pageHeadingConfig = ko.observable({'view':[], 'viewModel':null});
      moduleUtils.createView({'viewPath':'views/pageheading.html'}).then(function(view) {
        self.pageHeadingConfig({ 'view': view, 'viewModel': new app.getPageHeadingModel(pageHeading) })
      })



      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      self.connected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new AboutViewModel();
  }
);
