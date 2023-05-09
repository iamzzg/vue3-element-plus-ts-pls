const { notEmpty } = require('../utils.js')

module.exports = {
  description: 'generate vue component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'component name please',
      validate: notEmpty('name')
    },
    {
      type: 'checkbox',
      name: 'blocks',
      message: 'Blocks:',
      choices: [
        {
          name: '<template>',
          value: 'template',
          checked: true
        },
        {
          name: '<script>',
          value: 'script',
          checked: true
        },
        {
          name: 'style',
          value: 'style',
          checked: true
        }
      ],
      validate(value) {
        if (value.indexOf('script') === -1 && value.indexOf('template') === -1) {
          return 'Components require at least a <script> or <template> tag.'
        }
        return true
      }
    }
  ],
  actions: (data) => {
    // https://plopjs.com/documentation/#interface-actionconfig
    // properCase/pascalCase: ChangeFormatToThis
    // dashCase/kebabCase: change-format-to-this
    const name = '{{properCase name}}'
    const actions = [
      {
        type: 'add',
        path: `src/components/${name}/src/index.vue`,
        templateFile: 'plop-templates/component/index.hbs',
        data: {
          name: name,
          template: data.blocks.includes('template'),
          script: data.blocks.includes('script'),
          style: data.blocks.includes('style')
        }
      },
      {
        type: 'add',
        path: `src/components/${name}/index.ts`,
        templateFile: 'plop-templates/component/index.ts.hbs',
        data: {
          name: name
        }
      }
    ]

    return actions
  }
}
