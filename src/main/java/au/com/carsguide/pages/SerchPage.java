package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SerchPage extends Utility {

    private static final Logger log = LogManager.getLogger(Homepage.class.getName());//pagefactory model on the top of each class

    @FindBy(xpath = "//h1[contains(text(),'New & Used Car Search - carsguide')]")
    WebElement newAndUsedCarsTxt;

    @FindBy(xpath = "//select[@id='makes']")
    WebElement Anymake;

    @FindBy(xpath = " //select[@id='models']")
    WebElement Anymodel;

    @FindBy(xpath = "//select[@id='locations']")
    WebElement Anylocation;

    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement carprice;

    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement myNextCarTab;

    @FindBy(xpath = "//h1[@class='listing-search-title']")
    WebElement getSearchTitleTxt;

   public String verifyNewAndUsedCarText(){
       log.info("Verifing new and UsedCar Text from element:"+newAndUsedCarsTxt.toString());
       return getTextFromElement(newAndUsedCarsTxt);
   }

   public void selectMakeofCarFromDropdown(String make){
       log.info("Selecting Car Make from drop down menu list of select element"+Anymake.toString());
       selectByVisibleTextFromDropDown(Anymake,make);
   }

   public void selectModelofCarFromDropdown(String model){
       log.info("Selecting Car Model from dropdown menu list of Select element"+Anymodel.toString());
       selectByValueFromDropDown(Anymodel,model);
   }

   public void selectCarLocationFromDropdown(String location){
       log.info("Selecting Car Location drom deopdown menu list of select element "+Anylocation.toString());
       selectByVisibleTextFromDropDown(Anylocation,location);
   }

   public void selectCarPriceFromDropdown(String price){
       log.info("Selecting car price from drop down menu list of select element"+carprice.toString());
       selectByVisibleTextFromDropDown(carprice,price);
   }

   public void clickOnFindMyCarBtn(){
       log.info("Clicking on Find My next car button "+myNextCarTab.toString());
       clickOnElement(myNextCarTab);
   }

   public String getTitleText(){
       return getSearchTitleTxt.getText();
   }

}
