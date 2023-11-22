import path, { resolve } from 'path';
import fs from 'fs';
import MarkdownIt from 'markdown-it';
import mdContainer from 'markdown-it-container';

export const mdPlugin = (md: MarkdownIt) => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : '';
        const sourceFileToken = tokens[idx + 2];
        let source = '';
        const sourceFile = sourceFileToken.children?.[0].content ?? '';

        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(
            path.resolve(
              resolve(__dirname, '..', '..'),
              '.vitepress',
              sourceFile,
            ),
            'utf-8',
          );
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`);

        return `demo start - ${description}<br/>${encodeURIComponent(source)}`;
      } else {
        return ' - demo end';
      }
    },
  });
};
