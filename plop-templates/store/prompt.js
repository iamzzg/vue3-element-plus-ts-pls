const { notEmpty } = require('../utils.js')

module.exports = {
  description: 'generate store',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'store name please',
      validate: notEmpty('name')
    }
  ],
  actions() {
    const name = '{{camelCase name}}'
    const actions = [
      {
        type: 'add',
        path: `src/stores/modules/${name}.ts`,
        templateFile: 'plop-templates/store/index.hbs',
        // 传递给模板的变量
        data: {
          name: name
        }
      }
    ]
    return actions
  }
}
