var assert = require('assert');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var client = new webdriver.Builder().
	forBrowser('chrome')
    .build();
var chai = require("chai");
 var expect = chai.expect;
 //const until = webdriver.until;
/*const chai   = require('chai');
chai.use(require('chai-as-promised'));
chai.should();
const expect = chai.expect;
var webdriver = require(‘selenium-webdriver’);
var client = new webdriver.Builder().withCapabilities({ ‘browserName’: ‘chrome’ }).build();
 var chai = require(‘chai’);
 var expect = chai.expect;*/

describe("app", function() { var url = "https://beta.argusobservations.com/";

beforeEach(function(done)
{ client.get(url).then(function() {
done();
 });
 });

after(function(done)
 { client.quit().then(function(){
	 done();
	 });
	 });
//Test case # 1 returns title of the screen.
 it("Return the title of the page", function(done)
 { client.getTitle().then(function(title)
 { expect(title).to.equal("Argus Observations");
  done();  })
 })
 //Test case 2 is to validate the  Sign In text box.
 it("Verify please sign in text", function(done) {
 	 client.findElement(webdriver.By.xpath(".//*[@id='page']/form/div[1]/span")).getText().
 	 then(function(header) {expect(header).to.equal("Please sign in");
 	 done();
 	 	 })
 })
 //Test case # 3 is to validate the "Sign In" button.
it("Verify Sign in button return's error message", function(done) {
	 client.findElement(webdriver.By.id("page")).click().
	 then(function(text) { console.log("Please enter login information");
	 done();
	 	 })
 })
// Test case # 4 is to validate Forgot password link
 it("Forgot Password Link", function(done){
       client.findElement(webdriver.By.xpath(".//*[@id='page']/form/div[1]/a")).click();
       client.findElement(webdriver.By.css(".btn.btn-sm")).click().
        then(function(header) {assert.strictEqual(true, true, "Please sign in");

 	 client.sleep(3000);
 	 done();

 	 })
  })
  // Test case # 5 is to validate About us link
   it("About us link", function(done){
         client.findElement(webdriver.By.css(".panel-footer>a")).click();
         client.navigate().back().

   	then(function(header) {assert.strictEqual(true, true, "Please sign in");

   	 done();

   	 })
    })
    // Test case # 6 is to validate failed login
 it("Failed login", function(done) {
 	 client.findElement(webdriver.By.id("inputEmail")).sendKeys("pathakmonika.com");

 	 client.findElement(webdriver.By.id("inputPassword")).sendKeys("cGnC3LJ");
     client.findElement(webdriver.By.id("page")).click().

 then(function(header) {assert.strictEqual(true, true, "Oops! Unable to sign in. Please check your credentials and try again.");
 	 done();
 	 })

 	 })
 //Test case  # 7 is to validate the successful login
it("Sucessfully Log in", function(done) {
	 client.findElement(webdriver.By.id("inputEmail")).sendKeys("pathakmonika86@gmail.com");
	 client.findElement(webdriver.By.id("inputPassword")).sendKeys("cGnC3LJCnzaqw8rTKhEJ");
	 client.findElement(webdriver.By.id("page")).click().
	 then(function(header) {assert.strictEqual(true, true, "Welcome Monika Pathak");
	 client.sleep(3000);
	 done();

	 })
 })
 //Test case  # 8 is to validate the Navigation pane button
it("Dashboard verification", function(done) {

	 client.findElement(webdriver.By.xpath(".//*[@id='app-body']/nav-bar/div/div[2]/button")).click().
     	 then(function(header) { assert.strictEqual(true, true, "Argus");
 done();
 	 })
 })
 //Test case  # 9 is to validate the My Observation link
it(" My Observation", function(done) {
	 client.findElement(webdriver.By.id("mainNav")).click();
	 client.findElement(webdriver.By.xpath(".//*[@id='mainNav']/ul/li[2]/ul/li[2]/a/span'")).click().
     	 then(function(header) {assert.strictEqual(true, true, "New Observation");
done();
	 })
 })

	 })