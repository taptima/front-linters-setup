import { baseConfig, extendedConfig } from './src/configs/stylelint';
import prettierConfig from './src/configs/prettier';

const styleLintConfig = {
    base: baseConfig,
    extended: extendedConfig,
};

export { styleLintConfig, prettierConfig };
