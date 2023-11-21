import MarkdownIt from 'markdown-it';
import mdContainer from 'markdown-it-container';

export const mdPlugin = (md: MarkdownIt) => {
  md.use(mdContainer, 'test', {
    validate(params) {
      return !!params.trim().match(/^test\s*(.*)$/);
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^test\s*(.*)$/);
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : '';
        const sourceFileToken = tokens[idx + 2];
        return `test start - ${description} - ${sourceFileToken} - `;
      } else {
        return ' - test end';
      }
    },
  });
};
