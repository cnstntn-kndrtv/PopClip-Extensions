define(function () {
  const styles = [
    '(round)',
    '[square]',
    '{curly}',
    '<angle>'
  ]
  function makeIcon (index: number): string {
    return ['brackets-round.png', 'brackets-square.png', 'brackets-curly.png', 'brackets-angle.png'][index]
  }
  function makeIdentifier (index: number): string {
    return `style-${index}`
  }
  const extension: Extension = {
    options: styles.map((style, index) => {
      return {
        identifier: makeIdentifier(index),
        label: style,
        type: 'boolean',
        icon: makeIcon(index),
        defaultValue: !(index > 0)
      }
    }),
    actions (selection, options) {
      if (selection.text.length > 0) {
        return styles.filter((style, index) => options[makeIdentifier(index)]).map((style, index) => {
          return {
            title: styles[index],
            icon: makeIcon(index),
            code: (selection) => popclip.pasteText(style[0] + selection.text + style[2])
          }
        })
      } else {
        return null
      }
    }
  }
  return extension
})
