import { baseConfig, extendedConfig } from './configs/stylelint';
import prettierConfig from './configs/prettier/config';

const styleLintConfig = {
    base: baseConfig,
    extended: extendedConfig,
};

export { styleLintConfig, prettierConfig };
