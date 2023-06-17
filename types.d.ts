type Meta = {
  id: string;
  title: string;
  date: string;
  tags: string[];
  customImage: boolean;
}

type BlogPost = {
  meta: Meta,
  content: ReactElement<any, string, boolean | JSXElementConstructor<any>>,
}
