package au.com.carsguide.stepDefs;

import au.com.carsguide.pages.Homepage;
import au.com.carsguide.pages.SerchPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.eo.Se;
import gherkin.lexer.Th;
import org.junit.Assert;

public class SerchCarstepsDefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I mouse hover on “buy\\+sell” tab$")
    public void iMouseHoverOnBuySellTab() {
        new Homepage().mouseHoverOnBuySellTab();
    }

    @And("^I click Search Cars$")
    public void iClickSearchCars() {
        new Homepage().clickOnSerchCars();
    }
    @Then("^I navigate to new and used car search page$")
    public void iNavigateToNewAndUsedCarSearchPage() {
        Assert.assertEquals("New & Used Car Search - carsguide",new SerchPage().verifyNewAndUsedCarText());
    }


    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make)  {
        new SerchPage().selectMakeofCarFromDropdown(make);
    }


    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model) {
        new SerchPage().selectModelofCarFromDropdown(model);

    }


    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location) {
        new SerchPage().selectCarLocationFromDropdown(location);
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price) throws InterruptedException {
        Thread.sleep(2000);
        new SerchPage().selectCarPriceFromDropdown(price);

    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() {
        new SerchPage().clickOnFindMyCarBtn();
    }

    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String make) {
        Assert.assertTrue(make,new SerchPage().getTitleText().contains(make));

    }
}
