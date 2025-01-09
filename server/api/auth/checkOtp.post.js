export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    const { public: {apiBase} } = useRuntimeConfig()
    const loginToken =  getCookie(event, 'login_token')
    // return body

    // console.log(body, loginToken)
    // return 'data'

    try {
        const data = await $fetch(`${apiBase}/auth/check-otp`, {
            method: 'POST',
            body: {...body, login_token:loginToken},
            headers: {
                'Accept': 'application/json'
            }
        })

        setCookie(event, 'token', data.data.token, {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 *  6,
            path: '/'
        })

        setCookie(event, 'login_token', '', {
            httpOnly: true,
            secure: true,
            expires: new Date(0),
            path: '/'
        })

        // console.log(data)
        return data.data.user
        // return 'login success'
    } catch (error) {
        console.log(error)
        return error
    }

})