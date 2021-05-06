var MODEL = (function () {
  var homeContent = `<div class="pageTopHero">
            
  <div class="headerText">
      <h1>Header goes here</h1>
  </div>
  <div class="underHeaderText">
      <h2 class="lessImportant">Less important text goes here</h2>
  </div>
  <div class="underHeaderPara">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Fugiat aliquid minus nemo sed est.
      </p>
  </div>
  <div class="readMore">READ MORE</div>
</div>

<div class="quoteBox">
  <p>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo”
  </p>

  <h3>John Smith</h3>
</div>

<div class="homeEventBox">
  <div class="homeEventTitle">
      <h1 class="upcomingEvents">Upcoming Events:</h1>
  </div>

  <div class="homeEventGroup">
      
          <div class="homeEventButton">
              <div class="homeDate">
                  <h2 class="eventOne">
                      06
                  </h2>
                  <h3>June</h3>
              </div>
              <div class="homeDateInfo">
                  <div class="upperText">Sed et persipiatis unde omnis</div>
                  <div class="bottomText">Lorem ipsum dolor sit amet, consectetur</div>
              </div>
          </div>

          <div class="homeEventButton">
              <div class="homeDate">
                  <h2 class="eventOne">
                      30
                  </h2>
                  <h3>July</h3>
              </div>
              <div class="homeDateInfo">
                  <div class="upperText">Sed et persipiatis unde omnis</div>
                  <div class="bottomText">Lorem ipsum dolor sit amet, consectetur</div>
              </div>
          </div>

          <div class="homeEventButton">
              <div class="homeDate">
                  <h2 class="eventOne">
                      30
                  </h2>
                  <h3>August</h3>
              </div>
              <div class="homeDateInfo">
                  <div class="upperText">Sed et persipiatis unde omnis</div>
                  <div class="bottomText">Lorem ipsum dolor sit amet, consectetur</div>
              </div>
          </div>

          <div class="homeEventButton">
              <div class="homeDate">
                  <h2 class="eventOne">
                      23
                  </h2>
                  <h3>Nov</h3>
              </div>
              <div class="homeDateInfo">
                  <div class="upperText">Sed et persipiatis unde omnis</div>
                  <div class="bottomText">Lorem ipsum dolor sit amet, consectetur</div>
              </div>
          </div>

          <div class="homeEventButton">
              <div class="homeDate">
                  <h2 class="eventOne">
                      23
                  </h2>
                  <h3>Dec</h3>
              </div>
              <div class="homeDateInfo">
                  <div class="upperText">Sed et persipiatis unde omnis</div>
                  <div class="bottomText">Lorem ipsum dolor sit amet, consectetur</div>
              </div>
          </div>
      </div>
  </div>
</div>
    `;

  var contactContent = `<div class="contactHeader">
    <h1 class="contactTitle">
        Contact:
    </h1>
</div>

<div class="contactForm">
    <div class="contactSubs">
        <div class="contactEntry">Your Name...</div>
        <div class="contactEntry">Email...</div>
        <div class="contactEntry">Company...</div>
        <div class="message">Message...</div>
    </div>

    <div class="contactMap"></div>
</div>

<div class="messageRow">
    <div class="messageButton">SEND MESSAGE</div>
    </div>
    `;

  var blogContent = `
    <div class="blogHeader">
        <div class="blogTitle">
            <h1 class="pageTitles">Blog:</h1>
        </div>
    </div>

    <div class="blogPage">
        <div class="blogContainer">
            <div class="blogPost">
                <div class="blogDate">
                    <h1>06</h1>
                    <h2>Jun</h2>
                </div>
                <div class="blogInfo">
                    <div class="blogPic"></div>
                    <div class="blogBlack">Sed et persipiatis unde</div>
                    <div class="blogRed">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi </div>
                </div>
            </div>

            <div class="blogPost">
                <div class="blogDate">
                    <h1>30</h1>
                    <h2>Jul</h2>
                </div>
                <div class="blogInfo">
                    <div class="blogPic"></div>
                    <div class="blogBlack">Sed et persipiatis unde</div>
                    <div class="blogRed">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi </div>
                </div>
            </div>

            <div class="blogPost">
                <div class="blogDate">
                    <h1>30</h1>
                    <h2>Aug</h2>
                </div>
                <div class="blogInfo">
                    <div class="blogPic"></div>
                    <div class="blogBlack">Sed et persipiatis unde</div>
                    <div class="blogRed">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi </div>
                </div>
            </div>

            <div class="blogPost">
                <div class="blogDate">
                    <h1>23</h1>
                    <h2>Nov</h2>
                </div>
                <div class="blogInfo">
                    <div class="blogPic"></div>
                    <div class="blogBlack">Sed et persipiatis unde</div>
                    <div class="blogRed">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi </div>
                </div>
            </div>

            <div class="blogPost">
                <div class="blogDate">
                    <h1>23</h1>
                    <h2>Dec</h2>
                </div>
                <div class="blogInfo">
                    <div class="blogPic"></div>
                    <div class="blogBlack">Sed et persipiatis unde</div>
                    <div class="blogRed">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi </div>
                </div>
            </div>
            
        </div>

    </div>
    `;

  var aboutContent = `
    <div class="aboutCont">
        <div class="aboutHeadImage">
            
                <h1>Our History:</h1>
            
        </div>

        <div class="aboutPara">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur </div>
    </div>
    `;

  var galleryContent = `
  <div class="galleryTitle">
  <h1>
      Gallery:
  </h1>
</div>

<div class="galleryButtons">
  <div class="galleryFirstRow">
        <div id="galleryBoxOne"></div>
      <div class="galleryBoxTwo"></div>
      <div class="galleryBoxThree"></div>
  </div>

  <div class="gallerySecondRow">
      <div class="galleryBoxFour"></div>
      <div class="galleryBoxFive"></div>
  </div>

  

</div>
`;

  var foodFestContent = `
  <div class="galleryPageOne">
        <div class="bigEventHeader">
            <div class="funkyHeader">
            <div class="bigText">1. </div> <div>food festival</div>
            </div>
        </div>

        <div class="paraGroup">
            <div class="paraGroupOne">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
            </div>
            <div class="paraGroupTwo">
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
        </div>
`;

  var deeJayContent = `
  <div class="galleryPageTwo">
        <div class="bigEventHeader">
            <div class="funkyHeader">
                <div class="bigText">2. </div><div>dee-jay</div>
            </div>
        </div>

        <div class="paraGroup">
            <div class="paraGroupOne">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
            </div>
            <div class="paraGroupTwo">
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
        </div>


    </div>
`;

  var speechContent = `<div class="galleryPageThree">
  <div class="bigEventHeader">
      <div class="funkyHeader">
      <div class="bigText">3. </div> <div>speech</div>
      </div>
  </div>

  <div class="paraGroup">
      <div class="paraGroupOne">
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
      </div>
      <div class="paraGroupTwo">
          <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
      </div>
  </div>


</div>
`;

  var openFoodFestContent = `<div class="galleryPageFour">
  <div class="bigEventHeader">
      <div class="funkyHeader">
      <div class="bigText">4. </div> <div>open food-fest</div>
      </div>
  </div>

  <div class="paraGroup">
      <div class="paraGroupOne">
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
      </div>
      <div class="paraGroupTwo">
          <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
      </div>
  </div>


</div>
`;

  var internationalContent = `
  <div class="galleryPageFive">
        <div class="bigEventHeader">
            <div class="funkyHeader">
            <div class="bigText">5. </div> <div>international</div>
            </div>
        </div>

        <div class="paraGroup">
            <div class="paraGroupOne">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
            </div>
            <div class="paraGroupTwo">
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
        </div>


    </div>
`;

  var blogPageOneContent = ` <div class="blogOne">
  <div class="blogTopImage">
      <div class="blogTopDateBox">
          <div class="blogDateInfo">
              <p><b>06</b></p>
              <p>Jun</p>
          </div>
      </div>
  </div>
</div>

<div class="blogTextOne">
  <div class="blogTextTitle">Header #1:</div>
  <div class="blogTextPara">
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>

      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  </div>
</div>

<div class="blogTextTwo">
  <div class="blogTextTitle">Header #2:</div>
  <div class="blogTextPara">
      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  </div>
</div>`;

  var blogPageTwoContent = `<div class="blogOne">
  <div class="blogTopImage">
      <div class="blogTopDateBox">
          <div class="blogDateInfoTwo">
            <p>30</p>
            <p>Jul</p>
              
          </div>
      </div>
  </div>
</div>

<div class="blogTextOne">
  <div class="blogTextTitle">Header #1:</div>
  <div class="blogTextPara">
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>

      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  </div>
</div>

<div class="blogTextTwo">
  <div class="blogTextTitle">Header #2:</div>
  <div class="blogTextPara">
      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  </div>
</div>`;

  var blogPageThreeContent = `<div class="blogOne">
  <div class="blogTopImage">
      <div class="blogTopDateBox">
          <div class="blogDateInfoThree">
            <p>30</p>
            <p>Aug</p>
              
          </div>
      </div>
  </div>
</div>

<div class="blogTextOne">
  <div class="blogTextTitle">Header #1:</div>
  <div class="blogTextPara">
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>

      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  </div>
</div>

<div class="blogTextTwo">
  <div class="blogTextTitle">Header #2:</div>
  <div class="blogTextPara">
      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  </div>
</div>`;

  var blogPageFourContent = `<div class="blogOne">
  <div class="blogTopImage">
      <div class="blogTopDateBox">
          <div class="blogDateInfoFour">
            <p>23</p>
            <p>Nov</p>
              
          </div>
      </div>
  </div>
</div>

<div class="blogTextOne">
  <div class="blogTextTitle">Header #1:</div>
  <div class="blogTextPara">
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>

      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  </div>
</div>

<div class="blogTextTwo">
  <div class="blogTextTitle">Header #2:</div>
  <div class="blogTextPara">
      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  </div>
</div>`;

  var blogPageFiveContent = `<div class="blogOne">
  <div class="blogTopImage">
      <div class="blogTopDateBox">
          <div class="blogDateInfoFive">
            <p>23</p>
            <p>Dec</p>
              
          </div>
      </div>
  </div>
</div>

<div class="blogTextOne">
  <div class="blogTextTitle">Header #1:</div>
  <div class="blogTextPara">
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>

      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  </div>
</div>

<div class="blogTextTwo">
  <div class="blogTextTitle">Header #2:</div>
  <div class="blogTextPara">
      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  </div>
</div>`;

  var _getPageContent = function (pageId) {
    console.log("test" + pageId);

    $("#eventsySite").html(eval(pageId));
  };

  return {
    getPageContent: _getPageContent,
  };
})();
