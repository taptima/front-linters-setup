import { baseConfig, extendedConfig } from './src/configs/stylelint';
import prettierConfig from './src/configs/prettier';
import { format } from './src';

const styleLintConfig = {
    base: baseConfig,
    extended: extendedConfig,
};

export { styleLintConfig, prettierConfig };
export default format;
