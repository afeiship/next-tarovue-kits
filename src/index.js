import nx from '@jswork/next';
import EventMitt from '@jswork/event-mitt';
import pipe from '@jswork/pipe';

// classes
import '@jswork/next-weapp-storage';
import '@jswork/next-date';

// packages
import '@jswork/next-capitalize';
import '@jswork/next-camelize';
import '@jswork/next-classify';
import '@jswork/next-try-set';
import '@jswork/next-compact-object';
import '@jswork/next-deep-assign';
import '@jswork/next-deep-clone';
import '@jswork/next-deep-each';
import '@jswork/next-deep-equal';
import '@jswork/next-empty';
import '@jswork/next-get2get';
import '@jswork/next-is-empty-object';
import '@jswork/next-is-plain-object';
import '@jswork/next-kebab-case';
import '@jswork/next-key-map';
import '@jswork/next-param';
import '@jswork/next-qs';
import '@jswork/next-sets';
import '@jswork/next-sleep';
import '@jswork/next-json';
import '@jswork/next-global';
import '@jswork/next-memo';
import '@jswork/taro-envs';

const defaults = { prefix: 'nuk', queryInterceptors: [nx.stubValue], initialData: null };

const NxTarovueKits = nx.declare('nx.TarovueKits', {
  statics: {
    init: function () {
      nx.sets({ $event: nx.mix(null, EventMitt) });
    },
    create: function (inOptions) {
      return new this(inOptions);
    }
  },
  methods: {
    init: function (inOptions) {
      this.options = nx.mix(null, defaults, inOptions);
      this.initLocal();
      this.initGlobal();
      this.initPage();
    },
    initLocal: function () {
      const { prefix } = this.options;
      nx.sets({ $local: new nx.WeappStorage(prefix) });
    },
    initGlobal: function () {
      const { initialData } = this.options;
      nx.sets({ $global: nx.global(initialData) });
    },
    initPage: function () {
      const { queryInterceptors } = this.options;
      nx.sets({
        $page: function (inKey) {
          const pages = getCurrentPages();
          const page = pages[pages.length - 1];
          const { $taroParams: opts, route, $taroPath } = page;
          const { options } = pipe(...queryInterceptors)({ options: opts, route });
          const meta = { route, options, url: $taroPath };
          return nx.get(meta, inKey);
        }
      });
    }
  }
});

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = NxTarovueKits;
}

export default NxTarovueKits;
