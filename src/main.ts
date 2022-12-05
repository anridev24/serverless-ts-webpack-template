import { responseFactory } from './utils/response.factory'

export const start = async () => {
	return responseFactory(200, { result: null, message: 'healthy' })
}
