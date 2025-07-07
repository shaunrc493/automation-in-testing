# Cypress Test Strategy Demonstration

**Author:** Shaun Curtis
**Date:** Sunday 6th July 2025

## About This Repo

This repository demonstrates a test strategy using the [`automationintesting.online`](https://automationintesting.online) practice site, with Cypress as the test automation framework.

The test suite covers three key areas of quality:

- **API Health Checks**
- **Non-Functional Testing**
- **UI/UX Functional Testing**

More detail on the approach can be found in [`docs/test-strategy.md`](docs/test-strategy.md).

---

## Getting Started with Cypress

### Requirements

- Node.js **v20.18.0**
- npm **v10.8.2**

### Installation

1. Clone this repo
2. CD into the project
3. Run `npm install`
4. If it's your first time using Cypress you may need to run `npx cypress open`

### Running Tests

Cypress can be used interactively using the Dashboard, or used in the CLI.

To use open the Cypress Dashboard, run command
```bash
npx cypress open
```
This will run the start up and configuration commands, and start the Cypress Dashboard for you.
You can select a preferred browser to run the tests in, however this repo has configured Chrome
to be the default browser.
You can select any spec you wish to run from the Dashboard, and follow the steps visually as well
as following the Cypress Log.

To use Cypress in the CLI, run command
```bash
npx cypress run
```
This will run Cypress in headless mode and run through each spec in directory order.
A final report will be outputted once all specs have been executed.

### GrepTags

Cypress has been setup with the `@cypress/grep` package in this repo to enable filtering on specs.
This can improve efficiency in running the tests, and allow specific specs or assertions to be
executed depending on their needs.

For example, if you are deploying work related only to `APIs`, you may only want to run specs that
are related to `APIs` and omit any `Frontend` specs.

Any specs which are filtered out will appear as Pending tests in the final report.

To use the GrepTags, run command
```bash
npx cypress run --env grepTags={tags}
```

The list of tags included in this demonstration are:
- `@accessibility`
- `@api`
- `@functional`
- `@non-functional`
- `@performance`
- `@ui`
- `@ux`

GrepTags may be used individually or as a space seperated array, such as
```bash
npx cypress run --env grepTags='@api'
npx cypress run --env grepTags='@functional, @non-functional'
```
