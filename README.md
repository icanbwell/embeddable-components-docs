# Documentation for using b.well's embeddable web components

Welcome to b.well's embeddable web components documentation. We will be showing you how to get started and use our components to integrate our functionality into your applications.

There are several ways you can include our components. This example demonstrates the most simple straighforward way using plain html files with javascript script tags.

There are three basic steps that you will need to do to include our components:

1. Get a license key.
2. Include our component's script using either a `<script>` tag or an including an npm module in your code.
3. Initialize our components with your license key.
4. Include the web-component's tag in your html markup.

## Let's get Started with plain HTML

It really is that easy. As you can see from the example.html file in this repo, in the `<head>` tag of the file we include two scripts:

```html
<script src="https://bwell-dev-platform-static-ue1.s3.amazonaws.com/embeddable/bwell-connections.federated-loader.js"></script>
<script src="https://bwell-dev-platform-static-ue1.s3.amazonaws.com/embeddable/user-identity.federated-loader.js"></script>
```

These two script tags import two js libraries, one each for two of our web components that are used later in the code.

Next we created a callback so that we could initialize the system with your application key.

```html
<script type="text/javascript">
  function onClick() {
    bwell.init("Replace with your Key");
  }
</script>
```

When called this function will simply send your key into the init function and inform our components of what application is using them.

Finally, we need to include the components in the html markup where you would like to place them:

```html
<embeddable-bwell-connections></embeddable-bwell-connections> <bwell-user-identity></bwell-user-identity>
```

And with that, you have a working application that includes the b.well web-components in it. In this case you have included two web-components, the first is the IAL-1.5 ID Verification web component and the other is the Health Records Connection web component. It doesn't make sense to place these two in this placement in your app, but as this is a contrived app for demonstration purposes it shows that both can be placed here.

When the page first loads, the app only displays a single button:
![Image of app without components](images/initial-basic-app.png?raw=true)

But by clicking the button the onClick method is called and the two web-components display:
![Image of app after component loaded](images/web-component-view.png?raw=true)
Because the key was valid, the web components are displayed and the user is able to use the b.well system to validate their ID and connect to health records.

## Example React App

The [react-app](./react-app/README.md) folder contains an example React application using the b.well data connection web-component.


