/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const preprocessor = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const {isFileExist} = require('cy-verify-downloads');
const path = require("path");
const gmail_tester = require("gmail-tester");
/**
 * @type {Cypress.PluginConfig}
 */

async function configure(on, config) {
  await preprocessor(on, config);
}

module.exports = (on, config) => {
  configure(on, config);
  on('file:preprocessor', browserify.default(config))
  on('task', {downloadFile})
  on('task', {isFileExist})
  on('task', {
    decryptFile() {
     const fs = require('fs')
     let rawdata = fs.readFileSync("cypress/plugins/operators_data.json");
     let operadorLista = JSON.parse(rawdata);
     return operadorLista;
   }

 })
  on("task", {
    async "gmail:check" (args) {
      const {from, to, subject} = args;

      const options = {
        subject: subject,
        from: from,
        to: to,
        wait_time_sec: 30,
        max_wait_time_sec: 60,
        include_body: true
      }

      const email = await gmail_tester.check_inbox(
         path.resolve(__dirname, "credentials.json"),
         path.resolve(__dirname, "auth_token.json"),
         options,
      );

      return email;

    },
  });

  on("task", {
    async "gmail:checkSecond" (args) {
      const {from, to, subject} = args;

      const options = {
        subject: subject,
        from: from,
        to: to,
        wait_time_sec: 30,
        max_wait_time_sec: 60,
        include_body: true
      }

      const email = await gmail_tester.check_inbox(
         path.resolve(__dirname, "credentials_second_operator.json"),
         path.resolve(__dirname, "auth_token_second_operator.json"),
         options,
      );

      return email;

    },
  });

  on("task", {
    async "gmail:checkThird" (args) {
      const {from, to, subject} = args;

      const options = {
        subject: subject,
        from: from,
        to: to,
        wait_time_sec: 30,
        max_wait_time_sec: 60,
        include_body: true
      }

      const email = await gmail_tester.check_inbox(
         path.resolve(__dirname, "credentials_third_operator.json"),
         path.resolve(__dirname, "auth_token_third_operator.json"),
         options,
      );

      return email;

    },
  });
}
