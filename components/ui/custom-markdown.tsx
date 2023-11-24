import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { TinaMarkdownContent } from 'tinacms/dist/rich-text';

export function CustomMarkdown(props: { content: TinaMarkdownContent | TinaMarkdownContent[] }) {
  return (
    <TinaMarkdown
      content={props.content}
      components={{
        bold: (props) => <strong className='bg-black p-2 text-white' {...props} />,
        p: (props) => <p className='mb-12' {...props} />,
      }}
    />
  );
}
