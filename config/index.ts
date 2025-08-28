import { developmentConfig } from './development';
import { productionConfig } from './production';

const config = process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig;

export default config;
export { developmentConfig, productionConfig };
