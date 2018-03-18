module.exports = function(plop) {
  // component generator
  plop.setGenerator("component", {
    description: "application component logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name (comp name -> CompName)"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{properCase name }}/{{properCase name }}.jsx",
        templateFile: "plop-templates/component.hbs"
      },
      {
        type: "add",
        path: "src/components/{{properCase name }}/{{properCase name }}.css"
      },
      {
        type: "add",
        path:
          "src/components/{{properCase name }}/{{properCase name }}.story.js",
        templateFile: "plop-templates/component.story.hbs"
      }
    ]
  });

  // styled component
  plop.setGenerator("styled-component", {
    description: "application styled-component logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name (comp name -> CompName)"
      },
      {
        type: "input",
        name: "element",
        default: "div",
        message: "element type (div, button, h1, etc..)"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{properCase name }}/{{properCase name }}.jsx",
        templateFile: "plop-templates/styled-component.hbs"
      },
      {
        type: "add",
        path:
          "src/components/{{properCase name }}/{{properCase name }}.story.js",
        templateFile: "plop-templates/component.story.hbs"
      }
    ]
  });
};
