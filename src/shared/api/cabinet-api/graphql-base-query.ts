import { request, ClientError } from 'graphql-request'

export const graphqlBaseQuery =
    ({ baseUrl }: { baseUrl: string }) =>
    async ({ body }: { body: string }) => {
        try {
            const result = await request(baseUrl, body)
            return { data: result }
        } catch (error) {
            if (
                error instanceof ClientError &&
                error?.response?.errors?.length &&
                error.response.errors[0].extensions?.originalError
            ) {
                return {
                    error: {
                        status: error.response.errors[0].extensions.originalError.statusCode,
                        message:
                            error.response.errors[0].extensions.originalError.message.toLowerCase(),
                    },
                }
            }

            return { error: { status: 500, data: error } }
        }
    }
