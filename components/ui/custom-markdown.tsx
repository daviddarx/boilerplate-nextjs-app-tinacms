import classNames from 'classnames';
import { type Components, TinaMarkdown, type TinaMarkdownContent } from 'tinacms/dist/rich-text';

const components: Components<{
  CTA: {
    url: string;
    label: string;
    blank: boolean;
  };
}> = {
  bold: (props) => <strong className='hover:blur-[1px]' {...props} />,
  CTA: (props) => {
    return (
      <a href={props.url} className='button' target={props.blank ? '_blank' : '_self'}>
        {props.label}
      </a>
    );
  },
};

export default function CustomMarkdown(props: {
  content: TinaMarkdownContent | TinaMarkdownContent[];
  className?: string;
}) {
  return (
    <div className={classNames('text-container', props.className)}>
      <TinaMarkdown content={props.content} components={components} />
    </div>
  );
}
