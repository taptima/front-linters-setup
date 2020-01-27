import baseConfig from './baseConfig';
import formatConfig from './formatConfig';

const extendedConfig = {
    ...formatConfig,
    ...baseConfig,
};

export { baseConfig, extendedConfig };
