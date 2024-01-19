import classNames from 'classnames';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { TinaMarkdownContent } from 'tinacms/dist/rich-text';

export default function CustomMarkdown(props: {
  content: TinaMarkdownContent | TinaMarkdownContent[];
  className?: string;
}) {
  return (
    <div className={classNames('text-container', props.className)}>
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
