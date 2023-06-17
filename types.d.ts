type Meta = {
  id: string;
  title: string;
  date: string;
  tags: string[];
  customImage: string;
}

type BlogPost = {
  meta: Meta,
  content: ReactElement<any, string | JSXElementConstructor<any>>,
}
