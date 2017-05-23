TNTP QA Test Engineer Exercise
===================

You've been selected as a candidate for the QA Test Engineer position at TNTP. Great! This project is intended to see how you work when producing a test for an actual application.

You'll be tasked with taking the instructions in this project (including a [user story](https://www.mountaingoatsoftware.com/agile/user-stories), [Behavior-Driven-Design scenarios](https://dannorth.net/introducing-bdd/), and some helpful pointers), and providing automated tests. We'll then review your submission for completeness, best practices, and accuracy in terms of testing the requirements.

The project: Produce test cases, with accompanying automated test(s) logic, covering the user stories and scenarios in this document. Your test(s) should be able to arrange the necessary conditions to execute the test, perform the test, and positively assert that the expected outcome was met. You'll be testing against one of our applications (Argus), and should have received credentials in a separate communication.

Let's get started!

## Story

```
As an observer,
I would like to be able to submit an observation for a participant,
So that I may be able to provide meaningful feedback about that participant's performance in the classroom
```

```
As an observer,
I would like to be able to view my submitted observations
So that I can ensure that those observations have been recorded accurately
```

```
As an observer,
I would like to be able to recall an observation from the "Submitted" status, to the "Saved" status
So that I may make corrections to the previously submitted observation
```

## Scenarios
```
Given an an observer who wants to record an observation for a participant
When that observer selects a rubric to measure the participant against
Then that observer should be presented with a blank observation form based on that rubric
```
```
Given an an observer who inputs complete data and valid for an observation
When that observer submits the observation
Then the user should be informed that the observation was submitted successfully
And that user should be able to view the observation in their list of observations
```

```
Given an an observer who inputs incomplete data for an observation
When that observer attempts to submit the observation
Then the user should be informed that the observation is incomplete submitted successfully
And the user should be able to identify incomplete/invalid observation fields
```

```
Given an an observer who has submitted an observation that they wish to correct
When that observer recalls the observation
Then that observer should receive a message indicating that the observation has been recalled
And that observer should be able to edit that observation
```

## Technical Restrictions

- Write the tests using a browser automation framework (e.g. Selenium)
- Include a test plan that clearly indicates the steps you took to verify that the features work as defined by the requirements above.

## Instructions

- If you don't already have one, [create an account](https://github.com/join) on Github
- Install a Git client ([Github provides one that's simple and intuitive](https://desktop.github.com/))
- [Create a fork this project into your own Github account](https://help.github.com/articles/fork-a-repo/) (do **NOT** clone the project from the TNTP account)
- [Clone your fork](https://help.github.com/articles/cloning-a-repository/) of this project
- Add your automated tests to the repository directory
- When finished, ensure that your files are in the repository directory, and commit your code
- Push your changes to your fork of the repository
- Perform a [pull request](https://help.github.com/articles/about-pull-requests/), and we'll be able to see your code in the TNTP account!

Feel free to reach out at any time to your contact at TNTP with any questions. **Good luck!**


## Instructions

The test are in test.js file. The test cases are created in selenium webdriver/node.js/mocha/chai.
-Install node js on to your machine in order to run the test.
-Install selenium webdriver with following command:npm install --save selenium-webdriver
-Install chai with following command: npm install --save chai
-Install mocha with following command npm install --save mocha
-The following command is for selenium standalone server : java -jar seleniumjar.version.jar on the command line/console.
-Open another instance of command/Console run the following command mocha --timeout 3000.
 
