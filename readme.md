# aurelia-json-schema-form

Build aurelia forms based on JSON schema! All built-in templates are styled with bootstrap 4.1.1

## Use

- installation
  - `npm install aurelia-json-schema-form`
  - make sure to also install the peer dependencies: 
    - `npm install aurelia-validation`
    - `npm install bootstrap jquery popper.js` (only required if you are using the built-in templates)
- reference the plugin in your aurelia bootstrapper entry point `main.ts/js`
  - `aurelia.use.plugin(PLATFORM.moduleName("aurelia-json-schema-form")`
  - customize the plugin by specifying `PluginOptions` configuration function
    - change the validation renderer
    - change templates
    - change validation messages
    - change log level
- add an `<au-json-schema-form/>` element:
  - Schema declaration:
    ```json
    schema = {
      "type": "object",
      "properties": {
        "firstName": {
          "type": "string"
        },
        "lastName": {
          "type": "string"
        }
      },
      "required": [
        "firstName",
        "lastName"
      ]
    }
    ```
  - Form declaration:
    ```javascript
    form: IFormOverride = {
      // match the property key of your json schema, provide optional nested properties/overrides
      firstName: {$noTitle: true},
      // keys leading with $ are override options
      $noSeparator: true,
      // keys leading with @ are emmet like containers to provide layouting, see below Features for details
      // the value is always an array of objects
      "@div.row": [
        {
          "@div.col": [
            {
              firstName: {}
            }
          ],
          "@div.col": [
            {
              lastName: {}
            }
          ]
        }
      ],
      // you can use void elements as well
      "@hr": [],
      // _element is BYO element option, see below Features for details
      "_element": {
        elementName: "task-list"
      }
    }
    ```
  - Add the custom element to your view
    ```html
    <au-json-schema-form schema.bind="schema" form.bind="form" model.two-way="model" options.bind="{validateOnRender: true}"></au-json-schema-form>
    ```

## Features

- Supported schema types:
  - string
  - number
  - array
  - object
  - boolean
- All schema types can be nested in array/object
- Default value population (even if not exposed in form) using default/const
- Emmet-like custom element containers! Wrap form elements in an emmet key (supports `@element#id.class.class` syntax)
  ```json
  "@div.col": [
    {
      state: {}
    }
  ]
  ```
- BYO element
  - `schemaKey` is optional, it will bind `schema` and `model` to your element
  - validation does not occur on this schema key, you must perform your own validation
  - use:
    - create element _i.e._ `my-custom-element.ts` & `my-custom-element.html`
    - add element as a global resource in your bootstrapper/feature 
      ```javascript
      aurelia.use.globalResources(PLATFORM.moduleName("../path/to/my-custom-element"))
      ```
    - add `_element` key to your form overrides
      ```json
      {
        _element: {
          elementName: "my-custom-element",
          schemaKey: "firstName"
        }
      }
      ```

## Running the sample

1. install aurelia cli globally `npm i -g aurelia-cli`
2. clone repo and run `npm install`
3. run `au run`
4. open browser to http://localhost:8080

## Coming soon/Need help with..

- optionally delete items from model on destroy
- bootstrap templates:
  - add date/time/date-time pickers
- add materialize templates
- add additional schema validation (maybe ajv)
- ability to declare keys you want to include/exclude for an easy, generic form

## Contributing

Want to help? Submit a PR for an item above.
