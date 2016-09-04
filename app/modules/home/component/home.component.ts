import {Component} from "angular2/core";

@Component({
    selector: "home",
    template: `
        <div class="content-div">
            <div class="jumbotron">
                <div class="media">
                    <div class="media-left media-top">
                        <a href="#">
                            <img class="media-object thumbnail" src="https://avatars2.githubusercontent.com/u/12702671?v=3&s=460">
                        </a>
                        <div style="padding-left: 60px;">
                          <div _ngcontent-jsd-4="" style="padding-left: 5px; float: left;">
                              <a href="https://co.linkedin.com/in/daniel-roldan-amaya-68498499" target="_blank" _ngcontent-jsd-4="">
                                  <img class="media-object" height="45" src="assets/images/LinkedIn.png" width="45" _ngcontent-jsd-4="">
                              </a>
                          </div>
                          <div _ngcontent-jsd-4="" style="padding-left: 5px; float: left;">
                              <a href="https://github.com/d-amaya" target="_blank" _ngcontent-jsd-4="">
                                  <img class="media-object" height="45" src="assets/images/Octocat.png" width="45" _ngcontent-jsd-4="">
                              </a>
                          </div>
  						</div>
                        
                    </div>
                    <div class="media-body">
                        <h2>Welcome to Angular 2 & TypeScript!</h2>
                        <br>
                        <p>
                            NgProject is an application developed to highlight the new features available in Angular 2.
                            You will find libraries like RxJS, Underscore that help developers to keep the code readable and maintainable.
                        </p>
                    </div>
                </div>
                <div>
                    <div style="padding-left: 5px; float: right;">
                        <a class="btn btn-primary btn-lg" role="button" target="_blank" href="https://github.com/d-amaya/ng-project" >
                            GitHub Repository
                        </a>
                    </div>
                    <div style="padding-left: 5px; float: right;">
                        <a class="btn btn-primary btn-lg" role="button" href="https://github.com/d-amaya/ng-project/archive/master.zip" >
                            Download Code
                        </a>
                    </div>
                </div>
                <br><br>
            </div>
        </div>
    `,
    styles:[".thumbnail { border-radius: 100%; }"]
})
export class HomeComponent { }