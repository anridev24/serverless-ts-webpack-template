import ResponseBody from '../types/response-body.type'

export const responseFactory = (statusCode?: number, body?: ResponseBody) => {
	return {
		statusCode: statusCode || 200,
		body: JSON.stringify(body, null, 2)
	}
}
