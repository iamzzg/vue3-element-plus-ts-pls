const { notEmpty } = require('../utils.js')

module.exports = {
  description: 'generate a view',
  prompts: [
    {
      type: 'input',
      name: 'path',
      message: 'view path please'
    },
    {
      type: 'input',
      name: 'name',
      message: 'view name please',
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
        // if (value.indexOf('script') === -1 && value.indexOf('template') === -1) {
        //   return 'View require at least a <script> or <template> tag.'
        // }
        return true
      }
    }
  ],
  actions: (data) => {
    const name = '{{name}}'
    const path = '{{path}}'
    const actions = [
      {
        type: 'add',
        path: `src/views/${path}/${name}/index.vue`,
        templateFile: 'plop-templates/view/index.hbs',
        data: {
          name: name,
          template: 'template',
          script: 'script',
          style: 'style'
        }
      }
    ]

    return actions
  }
}
