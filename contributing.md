## How to contribute ?

Each component is located inside `/src/components/*` folder

### To add a new component : 

1. Create the `<componentName>` folder in `/src/components`
2. Inside your `<componentName>` folder create your `.vue` file(s) you can multiple components in folder if needed.
3. Create and `index.js` file in the root of `<componentName>`, this file will import all components from the current folder to expose it to superior level import scope
    ```js
    //content of ../<componentName>/index.js
    import ComponentName from "./<Component>.vue";
    export default ComponentName;
    ```
4. Add your export to the upper level `index.js` 
    ```js
    //Content of /src/components/index.js
    export { default as ComponentName } from "./<componentName>";

Folder structure will end-up like this:
```sh
/src
├── components
│   ├── <ComponentName>
│   │   ├── ComponentName.vue
│   │   └── index.js
│   └── index.js
├── index.js
└── main.js
```


### To add the documentation of your new Component 

> We use VuePress to document each component, so you need to be familiar with [VuePress folder structure and configuration](https://vuepress.vuejs.org/guide/directory-structure.html#default-page-routing).

1. Go to `/docs/components` and add a new Markdown file named with your component name (`<componentName.md>`)
2. In this file add those lines to display your component and component code source
    ```markdown
    ## Example

    <Demo componentName="examples-standard-component-doc" />

    ## Source Code

    <SourceCode>
    <<< @/src/components/Button/Button.vue
    </SourceCode>
    ```
    **Notice that we call `componentName="examples-<componentName>-doc"` with `examples` before, this is managed by VuePress to implicitely find your component named `<componentName>-doc.vue` inside the `examples` folder. See the step 3**
3. Add to `.vuepress/components/examples` a new file `<componentName>-doc.vue` which will contain a vue component that call your component in context
4. Now add your new Markdown file to the side bar of your Vuepress site by adding this code to `/docs/.vuepress/config.js`
    ```js
    //config.js
    ...
    sidebar: {
            '/components/': [
              {
                title: 'Components',
                collapsable: false,
                children: [... '<ComponentName.md>']
              }
            ]
          }
    ...
    ```
5. Test your site ! You are done :)


Folder structure will end-up like this:
```sh
/docs
├── .vuepress
│   ├── components
│   │   ├── Demo.vue
│   │   ├── SourceCode.vue
│   │   └── examples
│   │       └── <componentName>-doc.vue
│   ├── config.js
│   └── enhanceApp.js
├── README.md
├── components
│   ├── <componentName.md>
│   └── README.md
└── guide.md
```