import EnvManager from '@jswork/env-manager';

declare var wx: any;

const vueEnv = new EnvManager({
  prefix: 'VUE_APP_',
  env: process.env,
});

class VueEnvs {
  public static get(inKey?: string): any {
    return vueEnv.get(inKey);
  }

  public static set(inCmdRc: any): void {
    return vueEnv.set(inCmdRc);
  }
}

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = VueEnvs;
}

export default VueEnvs;
