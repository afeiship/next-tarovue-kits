interface Options {
  prefix?: string;
  queryInterceptors?: any[];
  initialData?: any;
}

interface NxStatic {
  TarovueKits: {
    create(options?: Options): any;
  };
}
