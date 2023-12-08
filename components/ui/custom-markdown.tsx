import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { TinaMarkdownContent } from 'tinacms/dist/rich-text';

export function CustomMarkdown(props: { content: TinaMarkdownContent | TinaMarkdownContent[] }) {
  return (
    <div className='text-container'>
      <TinaMarkdown
        content={props.content}
        components={{
          bold: (props) => (
            <span>
              <strong className='hover:blur-[1px]' {...props} />
            </span>
          ),
        }}
      />
    </div>
  );
}
