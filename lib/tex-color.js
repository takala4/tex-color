const {CompositeDisposable} = require('atom')

module.exports = {
  subscriptions: null,

  activate () {
    this.subscriptions = new CompositeDisposable()
    this.subscriptions.add(atom.commands.add('atom-workspace',
      {'tex-color:coloring': () => this.coloring()})
    )
  },

  deactivate () {
    this.subscriptions.dispose()
  },

  coloring() {
    const editor = atom.workspace.getActiveTextEditor()
    const selection = editor.getSelectedText()
    var color_name = 'red'
    if (editor) {
      editor.insertText('\\textcolor{' + color_name + '}{\n' + selection + '\n}')
    }
    
  }
}
