package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Homepage extends Utility {

    private static final Logger log = LogManager.getLogger(Homepage.class.getName());//pagefactory model on the top of each class

    @FindBy(xpath = "//a[text()='buy + sell']")
    WebElement buySellTab;

    @FindBy(xpath = "//a[text()='Search Cars']")
    WebElement serchCars;

    public void mouseHoverOnBuySellTab(){
        log.info("MouseHover on Buy+Sell Tab :"+buySellTab.toString());
        mouseHoverToElement(buySellTab);
    }

    public void clickOnSerchCars(){
        log.info("Clicking on Serch Cars :"+serchCars.toString());
        mouseHoverToElementAndClick(serchCars);
    }

}
