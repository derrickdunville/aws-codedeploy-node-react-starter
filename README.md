# React-Redux-React Router Boilerplate

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

* React 16
* Redux
* Webpack 3
* Babel 6
* CSS modules
* React Router
* Connected Router (react router + redux)
* Redux DevTools
* Eslint
* Jest & Enzyme
* Express

And optional (just install missing dependencies):

* Sass/SCSS - `npm i node-sass sass-loader --save`

## Running
Application has very few dependencies, so it’s most probably very easy to understand when you scan through the code, but there is at least few steps you should know

### Start front-end React application
Application is divided into two parts. One is pure React front-end, powered by `webpack-dev-server` in development mode.

To start this application run command below and open your app on `http://localhost:8080`

```javascript
npm start
```

To test your application, run

* `npm run test` - single run - good for CI or precook
* `npm run test:watch` - watches for changes, good for development


## Production

Running `npm run build` will create production ready application into your `dist` folder. All you need to do is make this `dist` folder publicly available. You can use `surge.sh` as described bellow to do so.

Included Express server is preconfigured to serve `/dist` folder. All you need to do is run `npm run server` on your production server. The same is happening automatically, when you deploy to Heroku (It executes this command from `Procfile`

This is also good to run on your local computer to ensure, that your application is running as it should.

### Heroku

Heroku works out of the box, just use "deploy to heroku" button

## AWS CodeDeploy

This project is configured to work with AWS CodeDeploy and CodePipeline for continuous integration and delivery

`buildspec.yml` - needed for AWS CodeBuild to know how to build to project.
`appspec.yml` - needed for AWS CodeDeploy to know how to deploy the build to the server and run it.

### EC2 Instance Config

The EC2 Instance needs to have an IAM role with EC2 and S3 policies, and also needs to have codedeploy-agent installed.

https://docs.aws.amazon.com/codedeploy/latest/userguide/codedeploy-agent-operations-install-ubuntu.html

```
apt-get update
apt-get install ruby2.0
apt-get install wget
cd /home/ubunutu
wget https://aws-codedeploy-us-east-2.s3.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto
```

## Tools
This project works with ReduxDevtool extension for chrome. [Read more](https://github.com/zalmoxisus/redux-devtools-extension)

## License
MIT
