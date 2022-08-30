# Example React App using b.well embeddable components

This is a React app (created with create react app) that shows how to embed b.well embeddable components in it. This is only here to be an example of how to integrate b.well web-components into your React app. Let's get started!

## Prepare

If you haven't already, clone this repo or download the code for this app to a folder on your development machine.

From there you will need to run one of the following commands:

```bash
$ npm init
$ yarn
$
```

This should have created a node_modules folder inside your application with the appropriate dependancies based on the package.json file in this folder.

Congratulations, you are ready to run the app!

## Running the app

Now execute one of these two commands at the command line.

```bash
$ npm start
$ yarn start
$
```

## What is happening

Let's walk through how this is all happening and how we got it to happen.

The first thing we had to do was include the npm module in our application with one of the two commands below:

```bash
$ npm
$ yarn add @icanbwell/data-connection
$
```

This added the bwell-data-connection npm module and web component to your app.

The second thing we had to do was import this into one of our jsx/tsx files. In this case we added it to src/App.tsx. You can include it in any React component that needs it with an import statement like this:

```typescript
import "@icanbwell/welcome";
```

This will allow you to initialize the b.well components system and use the b.well web components in your react component.

We placed the initialization code inside a useEffect hook as follows:

```typescript
useEffect(() => {
  window.bwell.init("Your key goes here");
}, []);
```

This block of code simply initializes the b.well component system for you. Please remember to use your own key where it says 'Your key goes here'.

Finally, place the actual web component wherever in your jsx that you would like it to appear as if it was another React component.

In our example it looks like this:

```typescript
<bwell-welcome></bwell-welcome>
```

Notice that the name of the component is 'bwell-' and the name of the components npm module.

## Conclusion

Thank you for running the app and learning how easy it is to integrate our web components into your React app.
