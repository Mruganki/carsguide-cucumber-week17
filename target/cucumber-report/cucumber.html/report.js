$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "As a User I should able to check search functionality",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 17,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Hyundai",
        "IX35",
        "NSW - Hunter",
        "$20,000"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Honda",
        "CR-V",
        "NSW - Newcastle",
        "$25,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "BMW",
        "2 Series",
        "NSW - All",
        "$80,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Audi",
        "A3",
        "NSW - All",
        "$30,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Suzuki",
        "Liana",
        "NSW - All",
        "$50,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Jeep",
        "Patriot",
        "NSW - Newcastle",
        "$40,000"
      ],
      "line": 23,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4422013800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Hyundai\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"IX35\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Hunter\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$20,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Hyundai\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SerchCarstepsDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 184862000,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 767912000,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 2171917600,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 203965900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 15
    }
  ],
  "location": "SerchCarstepsDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 251626500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IX35",
      "offset": 16
    }
  ],
  "location": "SerchCarstepsDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 172584700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Hunter",
      "offset": 19
    }
  ],
  "location": "SerchCarstepsDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 177336300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 16
    }
  ],
  "location": "SerchCarstepsDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 2207202200,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 1748783100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 23
    }
  ],
  "location": "SerchCarstepsDefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 223570200,
  "status": "passed"
});
formatter.after({
  "duration": 825231700,
  "status": "passed"
});
formatter.before({
  "duration": 4315348400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"CR-V\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Newcastle\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$25,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Honda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SerchCarstepsDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 25000,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 186139600,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 2301711300,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 53195000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "SerchCarstepsDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 175581900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CR-V",
      "offset": 16
    }
  ],
  "location": "SerchCarstepsDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 182407200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Newcastle",
      "offset": 19
    }
  ],
  "location": "SerchCarstepsDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 172868000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$25,000",
      "offset": 16
    }
  ],
  "location": "SerchCarstepsDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 2169851000,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 1465007000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "SerchCarstepsDefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 874991400,
  "status": "passed"
});
formatter.after({
  "duration": 834882300,
  "status": "passed"
});
formatter.before({
  "duration": 4614156000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"2 Series\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$80,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SerchCarstepsDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 22500,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 332541100,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 2319941200,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 198596200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "SerchCarstepsDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 180063100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 Series",
      "offset": 16
    }
  ],
  "location": "SerchCarstepsDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 183107700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "SerchCarstepsDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 198780500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80,000",
      "offset": 16
    }
  ],
  "location": "SerchCarstepsDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 2205134500,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3938471600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "SerchCarstepsDefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 146972600,
  "status": "passed"
});
formatter.after({
  "duration": 803063500,
  "status": "passed"
});
formatter.before({
  "duration": 4293598000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"A3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$30,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SerchCarstepsDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 18600,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 401790100,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 2274649000,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 251287400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "SerchCarstepsDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 164580600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A3",
      "offset": 16
    }
  ],
  "location": "SerchCarstepsDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 207668000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "SerchCarstepsDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 190139000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$30,000",
      "offset": 16
    }
  ],
  "location": "SerchCarstepsDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 2158473000,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2095448800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "SerchCarstepsDefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 40457700,
  "status": "passed"
});
formatter.after({
  "duration": 839205200,
  "status": "passed"
});
formatter.before({
  "duration": 3551318300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Suzuki\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Liana\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Suzuki\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SerchCarstepsDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 19200,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 956993900,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 1498696700,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 81447200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suzuki",
      "offset": 15
    }
  ],
  "location": "SerchCarstepsDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 321078900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Liana",
      "offset": 16
    }
  ],
  "location": "SerchCarstepsDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 212424200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "SerchCarstepsDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 191361900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "SerchCarstepsDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 2204276800,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 8056042200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suzuki",
      "offset": 23
    }
  ],
  "location": "SerchCarstepsDefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 141158200,
  "status": "passed"
});
formatter.after({
  "duration": 832481700,
  "status": "passed"
});
formatter.before({
  "duration": 3605800900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Jeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Patriot\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Newcastle\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SerchCarstepsDefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 24300,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 675382400,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iClickSearchCars()"
});
formatter.result({
  "duration": 1530714100,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 143761800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "SerchCarstepsDefs.iSelectMake(String)"
});
formatter.result({
  "duration": 151276500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patriot",
      "offset": 16
    }
  ],
  "location": "SerchCarstepsDefs.iSelectModel(String)"
});
formatter.result({
  "duration": 150750600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Newcastle",
      "offset": 19
    }
  ],
  "location": "SerchCarstepsDefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 183687500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$40,000",
      "offset": 16
    }
  ],
  "location": "SerchCarstepsDefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 2216957100,
  "status": "passed"
});
formatter.match({
  "location": "SerchCarstepsDefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2027697500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "SerchCarstepsDefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 153591000,
  "status": "passed"
});
formatter.after({
  "duration": 867012700,
  "status": "passed"
});
});